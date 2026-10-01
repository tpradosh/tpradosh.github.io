import { useEffect, useRef, useState } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&<>/\\[]{}";
const GLITCH = ["var(--glitch-green)", "var(--glitch-red)"];

interface ScrambleTextProps {
  text: string;
  className?: string;
  as?: "span" | "h1" | "h2" | "p";
  playOnMount?: boolean;
}

interface Glyph {
  char: string;
  locked: boolean;
  color?: string;
}

function buildFrame(source: string, locked: number): Glyph[] {
  return source.split("").map((char, index) => {
    if (char === " ") return { char: " ", locked: true };
    if (index < locked) return { char: source[index], locked: true };
    return {
      char: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
      locked: false,
      color: GLITCH[Math.floor(Math.random() * GLITCH.length)],
    };
  });
}

function idleFrame(source: string): Glyph[] {
  return source.split("").map((char) => ({ char, locked: true }));
}

export default function ScrambleText({
  text,
  className = "",
  as: Tag = "span",
  playOnMount = false,
}: ScrambleTextProps) {
  const [glyphs, setGlyphs] = useState<Glyph[]>(() =>
    playOnMount ? buildFrame(text, 0) : idleFrame(text)
  );
  const frame = useRef(0);
  const timer = useRef<number | null>(null);

  const run = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setGlyphs(idleFrame(text));
      return;
    }

    if (timer.current) window.clearInterval(timer.current);

    frame.current = 0;
    setGlyphs(buildFrame(text, 0));

    timer.current = window.setInterval(() => {
      frame.current += 1;
      const hold = 5;
      const locked = Math.max(0, frame.current - hold);
      setGlyphs(buildFrame(text, locked));
      if (locked >= text.length) {
        setGlyphs(idleFrame(text));
        if (timer.current) window.clearInterval(timer.current);
      }
    }, 28);
  };

  useEffect(() => {
    if (playOnMount) run();
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, playOnMount]);

  return (
    <Tag className={className} onMouseEnter={run}>
      {glyphs.map((glyph, index) =>
        glyph.locked ? (
          <span key={index}>{glyph.char}</span>
        ) : (
          <span
            key={index}
            className="scramble-glyph"
            style={{ color: glyph.color }}
          >
            {glyph.char}
          </span>
        )
      )}
    </Tag>
  );
}
