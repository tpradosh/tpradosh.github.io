import { useEffect, useRef } from "react";
import { useCursorMagnet } from "./CursorContext";

export default function CustomCursor() {
  const { magnet, hot } = useCursorMagnet();
  const magnetRef = useRef(magnet);
  magnetRef.current = magnet;
  const coreRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const core = useRef({ x: 0, y: 0 });
  const trail = useRef({ x: 0, y: 0 });
  const prev = useRef({ x: 0, y: 0 });
  const lastMagnet = useRef({ x: 0, y: 0 });
  const influence = useRef(0);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (event: MouseEvent) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };

    window.addEventListener("mousemove", onMove);

    let frame = 0;
    const tick = () => {
      const magnetNow = magnetRef.current;
      if (magnetNow) lastMagnet.current = magnetNow;

      influence.current += ((magnetNow ? 1 : 0) - influence.current) * 0.045;
      const weight = 0.2 * influence.current;
      const pull = {
        x: mouse.current.x * (1 - weight) + lastMagnet.current.x * weight,
        y: mouse.current.y * (1 - weight) + lastMagnet.current.y * weight,
      };

      core.current.x += (pull.x - core.current.x) * 0.12;
      core.current.y += (pull.y - core.current.y) * 0.12;
      trail.current.x += (pull.x - trail.current.x) * 0.055;
      trail.current.y += (pull.y - trail.current.y) * 0.055;

      const vx = trail.current.x - prev.current.x;
      const vy = trail.current.y - prev.current.y;
      const speed = Math.min(Math.hypot(vx, vy), 42);
      const angle = Math.atan2(vy, vx);
      const stretch = 1 + speed / 48;

      if (coreRef.current) {
        coreRef.current.style.transform = `translate3d(${core.current.x}px, ${core.current.y}px, 0)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trail.current.x}px, ${trail.current.y}px, 0) rotate(${angle}rad) scale(${stretch}, ${1 / stretch})`;
      }

      prev.current.x = trail.current.x;
      prev.current.y = trail.current.y;
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <div className="custom-cursor hidden md:block" aria-hidden>
      <div ref={trailRef} className={`cursor-trail ${hot ? "is-hot" : ""}`} />
      <div ref={coreRef} className="cursor-core" />
    </div>
  );
}
