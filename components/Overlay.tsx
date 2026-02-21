"use client";

import { MotionValue, motion, useTransform } from "framer-motion";
import Image from "next/image";

interface OverlayProps {
    scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
    // Section 1 Transforms - Refined for elegance
    const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale1 = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -20]);

    // Section 2 Transforms
    const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.5, 0.6], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.25, 0.6], [50, -50]);


    // Section 3 Transforms
    const opacity3 = useTransform(scrollYProgress, [0.6, 0.7, 0.85, 0.95], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.6, 0.95], [50, -50]);


    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1] as const
            }
        }
    };

    return (
        <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center items-center text-white mix-blend-difference">
            {/* Section 1 */}
            <motion.div
                style={{ opacity: opacity1, scale: scale1, y: y1 }}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="absolute flex flex-col items-center text-center"
            >
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-8 mix-blend-difference">
                    <motion.div variants={itemVariants}>
                        <Image
                            src="/Divyank.svg"
                            alt="Divyank"
                            width={400}
                            height={400}
                            className="w-64 md:w-96 h-auto invert translate-y-4"
                            priority
                        />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <Image
                            src="/Khewale.svg"
                            alt="Khewale"
                            width={400}
                            height={400}
                            className="w-64 md:w-96 h-auto invert"
                            priority
                        />
                    </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                    <p style={{ fontFamily: 'var(--font-hammersmith-one)' }} className="text-xl md:text-2xl font-light tracking-[0.2em] opacity-90 mix-blend-difference">
                        AI ENGINEER | DATA SCIENTIST | DATA ANALYST
                    </p>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="absolute top-[180%] text-xs tracking-[0.3em] opacity-60"
                >
                    <span className="animate-pulse">SCROLL TO EXPLORE</span>
                </motion.div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute w-full px-12 md:px-24 flex justify-start"
            >
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] max-w-3xl text-left tracking-tight">
                    I like building things <br className="hidden md:block" /> and figuring out how they work.
                </h2>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute w-full px-12 md:px-24 flex justify-end"
            >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.2] max-w-3xl text-right tracking-tight text-white/90">
                    Bridging curiosity <br /> with code.
                </h2>
            </motion.div>
        </div>
    );
}
