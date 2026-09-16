"use client";

import { ReactNode, useEffect, useState, createContext, useContext } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "@/lib/useReducedMotion";

type LenisContextType = {
    lenis: Lenis | null;
};

const LenisContext = createContext<LenisContextType>({
    lenis: null,
});

export const useLenis = () => useContext(LenisContext);

export default function SmoothScroll({ children }: { children: ReactNode }) {
    const [lenis, setLenis] = useState<Lenis | null>(null);
    const reducedMotion = useReducedMotion();

    useEffect(() => {
        // Smooth scroll is motion the viewer did not ask for; leave the
        // browser's native scrolling alone when reduced motion is set.
        if (reducedMotion) return;

        const lenisInstance = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
        });

        setLenis(lenisInstance);

        function raf(time: number) {
            lenisInstance.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenisInstance.destroy();
            setLenis(null);
        };
    }, [reducedMotion]);

    return (
        <LenisContext.Provider value={{ lenis }}>
            {children}
        </LenisContext.Provider>
    );
}
