"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent, AnimatePresence, motion } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 120;
const FRAME_PATH = "/sequence/frame_";
const FRAME_SUFFIX = ".webp";

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const imgArray: HTMLImageElement[] = [];

        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image();
            const paddedIndex = i.toString().padStart(3, "0");
            img.src = `${FRAME_PATH}${paddedIndex}${FRAME_SUFFIX}`;
            img.onload = () => {
                loadedCount++;
                setLoadingProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
                if (loadedCount === FRAME_COUNT) {
                    setIsLoaded(true);
                }
            };
            imgArray.push(img);
        }
        imagesRef.current = imgArray;
    }, []);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        const images = imagesRef.current;
        if (!canvas || !images[index]) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[index];

        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;

        const imgRatio = img.width / img.height;
        const canvasRatio = canvasWidth / canvasHeight;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
            drawWidth = canvasWidth;
            drawHeight = canvasWidth / imgRatio;
            offsetX = 0;
            offsetY = (canvasHeight - drawHeight) / 2;
        } else {
            drawWidth = canvasHeight * imgRatio;
            drawHeight = canvasHeight;
            offsetX = (canvasWidth - drawWidth) / 2;
            offsetY = 0;
        }

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                const dpr = window.devicePixelRatio || 1;
                canvasRef.current.width = window.innerWidth * dpr;
                canvasRef.current.height = window.innerHeight * dpr;

                if (isLoaded) {
                    const progress = scrollYProgress.get();
                    const frameIndex = Math.min(
                        FRAME_COUNT - 1,
                        Math.floor(progress * FRAME_COUNT)
                    );
                    renderFrame(frameIndex);
                }
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [isLoaded, scrollYProgress]);

    // Initial draw
    useEffect(() => {
        if (isLoaded) {
            const dpr = window.devicePixelRatio || 1;
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth * dpr;
                canvasRef.current.height = window.innerHeight * dpr;
            }
            renderFrame(0);
        }
    }, [isLoaded]);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!isLoaded) return;

        const frameIndex = Math.min(
            FRAME_COUNT - 1,
            Math.floor(latest * FRAME_COUNT)
        );

        requestAnimationFrame(() => renderFrame(frameIndex));
    });

    return (
        <div ref={containerRef} className="h-[500vh] relative bg-[#0a0a0a]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <AnimatePresence>
                    {!isLoaded && (
                        <motion.div
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a0a0a] z-50"
                        >
                            <div className="w-48 md:w-64 h-[2px] bg-white/10 overflow-hidden mb-6">
                                <motion.div
                                    className="h-full bg-white/80"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${loadingProgress}%` }}
                                />
                            </div>
                            <span className="text-white/40 font-mono text-fluid-xs tracking-[0.3em]">
                                LOADING EXPERIENCE {loadingProgress}%
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>

                <Overlay scrollYProgress={scrollYProgress} />
                <canvas ref={canvasRef} className="block w-full h-full object-cover" />
            </div>
        </div>
    );
}
