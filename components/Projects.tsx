"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    link: string;
}

const projects: Project[] = [
    {
        id: "01",
        title: "AI Image Generator",
        category: "Machine Learning",
        description: "Latent diffusion model interface built with Next.js and Python backend.",
        link: "#",
    },
    {
        id: "02",
        title: "Crypto Dashboard",
        category: "FinTech",
        description: "Real-time cryptocurrency analytics platform with D3.js visualizations.",
        link: "#",
    },
    {
        id: "03",
        title: "E-Commerce Headless",
        category: "Web Development",
        description: "High-performance headless Shopify storefront using Hydrogen.",
        link: "#",
    },
];

export default function Projects() {
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);

    return (
        <section className="min-h-screen bg-black text-white py-32 px-6 md:px-12 relative z-20" id="work">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-sm font-bold tracking-widest uppercase text-blue-600 mb-16"
                >
                    ( Selected Works )
                </motion.h2>

                <div className="flex flex-col">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                            className="group border-t border-white/20 py-12 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer transition-colors duration-500 hover:border-blue-600 relative overflow-hidden"
                        >
                            <div className="z-10 transition-transform duration-500 group-hover:translate-x-4">
                                <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50">
                                    {project.title}
                                </h3>
                                <div className="flex items-center gap-4 text-white/50 text-sm font-mono uppercase tracking-widest group-hover:text-blue-500 transition-colors">
                                    <span>{project.category}</span>
                                </div>
                            </div>

                            <div className="z-10 mt-6 md:mt-0 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
                                <span className="text-sm font-light hidden md:block text-white/80 max-w-xs text-right">
                                    {project.description}
                                </span>
                                <div className="p-3 rounded-full border border-white/20 bg-white/5 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors">
                                    <ArrowUpRight className="w-5 h-5 text-white" />
                                </div>
                            </div>

                            {/* Background Glow on Hover */}
                            <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl p-4" />
                        </motion.div>
                    ))}
                    <div className="border-t border-white/20" />
                </div>
            </div>
        </section>
    );
}
