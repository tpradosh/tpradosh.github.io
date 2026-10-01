import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }

    const play = () => {
      el.classList.add("is-glitching");
      gsap.set(el, { visibility: "visible", pointerEvents: "auto" });

      const tl = gsap.timeline({
        onComplete: () => {
          el.classList.remove("is-glitching");
          el.classList.add("is-visible");
          gsap.set(el, { clearProps: "clipPath,filter,transform" });
        },
      });

      tl.fromTo(
        el,
        { opacity: 0, x: -22, skewX: -14 },
        { opacity: 1, duration: 0.05 }
      )
        .to(el, { opacity: 0.12, x: 18, skewX: 12, duration: 0.045 })
        .to(el, {
          opacity: 1,
          x: -14,
          skewX: -9,
          clipPath: "inset(18% 0 48% 0)",
          duration: 0.055,
        })
        .to(el, {
          opacity: 0.25,
          x: 10,
          clipPath: "inset(62% 0 8% 0)",
          duration: 0.05,
        })
        .to(el, {
          opacity: 1,
          x: -6,
          skewX: 5,
          clipPath: "inset(8% 0 22% 0)",
          duration: 0.06,
        })
        .to(el, {
          opacity: 0.7,
          x: 4,
          clipPath: "inset(0 12% 0 0)",
          duration: 0.045,
        })
        .to(el, {
          opacity: 1,
          x: 0,
          skewX: 0,
          clipPath: "inset(0 0 0 0)",
          duration: 0.2,
          ease: "power2.out",
        });
    };

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 84%",
      once: true,
      onEnter: () => {
        gsap.delayedCall(delay, play);
      },
    });

    return () => {
      trigger.kill();
    };
  }, [delay]);

  return (
    <div ref={ref} className={`glitch-reveal ${className}`}>
      {children}
    </div>
  );
}
