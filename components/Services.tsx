"use client";

import { motion } from "framer-motion";

const capabilities = [
    {
        category: "Machine Learning & AI",
        description: "Training predictive models and working with generative AI. Focused on evaluating models and processing data effectively.",
        tools: ["Predictive Modeling", "Generative AI", "Model Training", "Time-Series"]
    },
    {
        category: "Tools & Libraries",
        description: "The core stack I use to experiment with datasets, build pipelines, and construct models.",
        tools: ["Python", "TensorFlow", "PyTorch", "Pandas", "Scikit-learn"]
    },
    {
        category: "Supporting Skills",
        description: "Everything else needed to actually get a model working in a project instead of just sitting in a notebook.",
        tools: ["Data Analysis", "FastAPI", "MQTT", "React"]
    }
];

export default function Services() {
    return (
        <section id="skills" className="py-[var(--spacing-fluid-section)] px-[var(--spacing-section-px)] bg-black text-white relative z-20 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24"
                >
                    <span className="text-fluid-xs font-mono tracking-widest text-white/50 mb-4 block border-l border-white/20 pl-4">
                        skills
                    </span>
                    <h2 className="text-[length:var(--text-fluid-h2)] font-light tracking-tight text-white/90">
                        What I actually use.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-[var(--spacing-fluid-gap)]">
                    {capabilities.map((capability, index) => (
                        <motion.div
                            key={capability.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col border-t border-white/10 pt-8"
                        >
                            <h3 className="text-[length:var(--text-fluid-h3)] font-medium mb-4 tracking-tight text-white/90">
                                {capability.category}
                            </h3>
                            <p className="text-white/60 text-[length:var(--text-fluid-body)] leading-relaxed mb-6 font-light">
                                {capability.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {capability.tools.map(tool => (
                                    <span key={tool} className="text-[length:var(--text-fluid-sm)] font-mono tracking-wide text-white/40 bg-white/5 px-2.5 py-1 rounded-[4px] border border-white/10">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
