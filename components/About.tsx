"use client";

import { motion, Variants } from "framer-motion";

export default function About() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section id="about" className="py-[var(--spacing-fluid-section)] px-[var(--spacing-section-px)] bg-black text-white relative z-20 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="flex flex-col md:flex-row gap-[var(--spacing-fluid-gap)]"
                >
                    {/* Left Column - Sticky Title */}
                    <div className="md:w-1/3">
                        <motion.h2
                            variants={itemVariants}
                            className="text-fluid-xs font-mono tracking-widest text-white/50 mb-4 block border-l border-white/20 pl-4"
                        >
                            about me
                        </motion.h2>
                    </div>

                    {/* Right Column - Content */}
                    <div className="md:w-2/3 flex flex-col gap-[var(--spacing-fluid-gap)]">
                        <motion.div variants={itemVariants}>
                            <h3 className="text-[length:var(--text-fluid-h2)] font-light leading-[1.2] tracking-tight mb-6 md:mb-8 text-white/90">
                                Hi, I'm Divyank. I enjoy working on AI projects and polishing them until they feel right.
                            </h3>
                            <p className="text-[length:var(--text-fluid-body)] leading-[1.6] text-white/80 font-light">
                                I like building things and figuring out how they work. Whether that means training a new model, handling data, or piecing together a UI to interact with it, I like being hands-on.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-col gap-6 text-[length:var(--text-fluid-body)] leading-[1.6] text-white/70 font-light">
                            <p>
                                I don't necessarily care about using the latest trendy framework. I just want the tools that get the job done efficiently and cleanly.
                            </p>
                            <p>
                                When I'm not coding, I'm probably experimenting or intentionally breaking something just to understand it better. I believe the best work happens when you stay curious, keep things simple, and are easy to work with.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12 pt-12 border-t border-white/10">
                            <motion.div variants={itemVariants}>
                                <h4 className="text-fluid-xs font-bold font-mono tracking-widest text-white/40 mb-6 uppercase">What I value</h4>
                                <ul className="flex flex-col gap-3 text-[length:var(--text-fluid-sm)] text-white/70 font-light">
                                    <li>Honesty and simplicity over buzzwords</li>
                                    <li>Having a cool, functioning final product</li>
                                    <li>Learning how the black box actually works</li>
                                </ul>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <h4 className="text-fluid-xs font-bold font-mono tracking-widest text-white/40 mb-6 uppercase">Current Focus</h4>
                                <ul className="flex flex-col gap-3 text-[length:var(--text-fluid-sm)] text-white/70 font-light">
                                    <li>Applied LLMs</li>
                                    <li>Data exploration tools</li>
                                    <li>Building side projects</li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
