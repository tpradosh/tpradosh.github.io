import { useRef, type ReactNode, type MouseEvent } from "react";
import gsap from "gsap";
import { useCursorMagnet } from "./CursorContext";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export default function Magnetic({
  children,
  className = "",
  strength = 0.32,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { setMagnet, setHot } = useCursorMagnet();

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    gsap.to(el, {
      x: (event.clientX - cx) * strength,
      y: (event.clientY - cy) * strength,
      duration: 0.9,
      ease: "power2.out",
      overwrite: "auto",
    });
    setMagnet({ x: cx, y: cy });
    setHot(true);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 1.15,
      ease: "power3.out",
      overwrite: "auto",
    });
    setMagnet(null);
    setHot(false);
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-magnetic
    >
      {children}
    </div>
  );
}
