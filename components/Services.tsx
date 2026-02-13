"use client";

import { motion } from "framer-motion";

const services = [
    { id: "01", title: "Web Development", description: "High-performance websites built with Next.js and WebGL." },
    { id: "02", title: "AI Integration", description: "Custom AI solutions using Python and LLMs." },
    { id: "03", title: "Motion Design", description: "Interactive animations that bring interfaces to life." },
    { id: "04", title: "Brand Identity", description: "Visual systems that stand out in the digital noise." },
];

export default function Services() {
    return (
        <section className="py-32 px-6 md:px-12 bg-black text-white relative z-20">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-sm font-bold tracking-widest uppercase text-blue-600 mb-16"
                >
                    ( Services )
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group border-t border-white/20 pt-8 hover:border-blue-600 transition-colors duration-500"
                        >
                            <span className="block text-xs font-mono text-white/40 mb-4 group-hover:text-blue-500 transition-colors">
                                {service.id}
                            </span>
                            <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all">
                                {service.title}
                            </h3>
                            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-md">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
