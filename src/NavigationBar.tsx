import { useState } from "react";
import { useLenis } from "lenis/react";
import Magnetic from "./Magnetic";
import ScrambleText from "./ScrambleText";

const links = [
  { href: "#Home", label: "Home" },
  { href: "#Experience", label: "Experience" },
  { href: "#Projects", label: "Projects" },
  { href: "#Contact", label: "Contact" },
];

function NavigationBar() {
  const lenis = useLenis();
  const [open, setOpen] = useState(false);

  const go = (href: string) => {
    setOpen(false);
    lenis?.scrollTo(href, { offset: -18, duration: 1.15 });
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-40 flex justify-center px-4">
      <div className="neo-raised neo-sheen w-full max-w-5xl rounded-[28px] px-4 py-3 md:px-6">
        <div className="flex items-center justify-between gap-4">
          <Magnetic>
            <button
              type="button"
              onClick={() => go("#Home")}
              className="font-display text-lg font-bold tracking-tight"
            >
              <ScrambleText text="Pradosh T" />
            </button>
          </Magnetic>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Magnetic key={link.href} strength={0.4}>
                <button
                  type="button"
                  onClick={() => go(link.href)}
                  className="neo-raised-sm neo-press-sm rounded-2xl px-4 py-2 text-sm font-semibold text-[var(--ink)]"
                >
                  <ScrambleText text={link.label} />
                </button>
              </Magnetic>
            ))}
          </nav>

          <button
            type="button"
            className="neo-raised-sm neo-press-sm rounded-2xl p-2 md:hidden"
            aria-label="Open menu"
            onClick={() => setOpen((value) => !value)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {open && (
          <nav className="mt-3 flex flex-col gap-2 border-t border-[rgba(26,35,50,0.08)] pt-3 md:hidden">
            {links.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => go(link.href)}
                className="neo-inset rounded-2xl px-4 py-3 text-left font-semibold"
              >
                {link.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

export default NavigationBar;
