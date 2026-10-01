import { createContext, useContext, useState, type ReactNode } from "react";

type Magnet = { x: number; y: number } | null;

const MagnetContext = createContext<{
  magnet: Magnet;
  setMagnet: (value: Magnet) => void;
  hot: boolean;
  setHot: (value: boolean) => void;
}>({
  magnet: null,
  setMagnet: () => {},
  hot: false,
  setHot: () => {},
});

export function CursorProvider({ children }: { children: ReactNode }) {
  const [magnet, setMagnet] = useState<Magnet>(null);
  const [hot, setHot] = useState(false);

  return (
    <MagnetContext.Provider value={{ magnet, setMagnet, hot, setHot }}>
      {children}
    </MagnetContext.Provider>
  );
}

export function useCursorMagnet() {
  return useContext(MagnetContext);
}
