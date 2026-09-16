"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth follow for the halo
    const springConfig = { damping: 25, stiffness: 150 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16); // Center the 32px cursor
            cursorY.set(e.clientY - 16);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("a") || target.closest("button") || target.classList.contains("cursor-pointer")) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-50 backdrop-blur-[1px] hidden md:block"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    borderColor: "var(--primary)",
                }}
                animate={{
                    scale: isHovering ? 2.5 : 1,
                    backgroundColor: isHovering ? "rgba(79, 140, 255, 0.1)" : "rgba(255, 255, 255, 0)",
                    borderColor: isHovering ? "var(--secondary)" : "var(--primary)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-1 h-1 rounded-full pointer-events-none z-50 hidden md:block" // Dot
                style={{
                    x: cursorX, // Instant follow
                    y: cursorY, // Instant follow
                    translateX: 14, // Center locally within the 32px coordinate space
                    translateY: 14,
                    backgroundColor: "var(--secondary)"
                }}
            />
        </>
    );
}
