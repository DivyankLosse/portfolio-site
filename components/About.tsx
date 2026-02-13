"use client";

import { motion } from "framer-motion";

export default function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as const
            }
        }
    };

    return (
        <section id="about" className="py-32 px-6 md:px-12 bg-black text-white relative z-20 mix-blend-difference">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="flex flex-col md:flex-row gap-16 md:gap-24"
                >
                    {/* Left Column - Sticky Title */}
                    <div className="md:w-1/3">
                        <motion.h2
                            variants={itemVariants}
                            className="text-sm font-bold tracking-widest uppercase text-blue-600 mb-8 "
                        >
                            ( About Me )
                        </motion.h2>
                    </div>

                    {/* Right Column - Content */}
                    <div className="md:w-2/3 flex flex-col gap-12">
                        <motion.div variants={itemVariants}>
                            <h3 className="text-3xl md:text-5xl font-light leading-tight mb-8">
                                Divyank Khewale — <span className="opacity-50">AI Engineer in the making.</span>
                            </h3>
                            <p className="text-xl leading-relaxed text-gray-400">
                                I work with data, models, and code to turn ideas into intelligent systems.
                                My background spans Data Analysis, Data Science, Machine Learning, and Deep Learning,
                                and I enjoy building things that actually work — not just look good in notebooks.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-col gap-6 text-lg leading-relaxed text-gray-400">
                            <p>
                                I’m currently pursuing my B.Tech in Computer Science Engineering from G H Raisoni University, Amravati,
                                where I’m sharpening my skills and occasionally arguing with datasets that don’t want to behave.
                            </p>
                            <p>
                                Right now, my focus is simple: land a role in the AI field where I can build, learn, and ship meaningful work.
                                I like clean logic, well-trained models, and solutions that make sense beyond theory.
                            </p>
                            <p>
                                When I’m not working on AI, I’m probably refining my projects, optimizing pipelines,
                                or thinking about how to make systems smarter (and slightly less dramatic).
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-white/10">
                            <motion.div variants={itemVariants}>
                                <h4 className="text-sm font-bold tracking-widest uppercase mb-6 text-white">What I Work With</h4>
                                <ul className="flex flex-col gap-3 text-gray-400">
                                    <li>Data Analysis & Visualization</li>
                                    <li>Machine Learning & Deep Learning</li>
                                    <li>Model Training & Evaluation</li>
                                    <li>Python-based AI workflows</li>
                                    <li>Problem-solving with real-world datasets</li>
                                </ul>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <h4 className="text-sm font-bold tracking-widest uppercase mb-6 text-white">Currently</h4>
                                <ul className="flex flex-col gap-3 text-gray-400">
                                    <li>🎓 B.Tech CSE student</li>
                                    <li>🤖 Focused on AI / ML roles</li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
