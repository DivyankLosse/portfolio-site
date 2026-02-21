"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface Project {
    id: string;
    title: string;
    category: string;
    timeframe: string;
    description: string;
    whyIBuiltIt: string;
    coolDetail: string;
    stack: string[];
    link: string;
}

const projects: Project[] = [
    {
        id: "01",
        title: "AgriLO",
        category: "AI & IoT Infrastructure",
        timeframe: "2023 - Present",
        description: "A smart farming assistant combining real-time IoT soil sensors with a predictive AI chat interface.",
        whyIBuiltIt: "I wanted to see if I could build an end-to-end hardware-to-software pipeline that actually provided useful, real-time insights rather than just logging ambient noise.",
        coolDetail: "The backend processes live MQTT sensor streams and feeds them directly into the context window of a local LLM for instant, aware responses.",
        stack: ["Python", "FastAPI", "React", "IoT/MQTT"],
        link: "https://github.com/DivyankLosse/AgriLO",
    },
    {
        id: "02",
        title: "AI Latent Diffusion Interface",
        category: "Machine Learning Engineering",
        timeframe: "2023",
        description: "A clean, async frontend built to interact with a custom image generation model.",
        whyIBuiltIt: "Running heavy generative models locally often freezes everything. I wanted to build a UI that felt smooth even when the GPU was pinned at 100%.",
        coolDetail: "I offloaded the generative workload to a Redis queue, so the frontend stays completely responsive while polling for the generated image.",
        stack: ["Next.js", "PyTorch", "Redis"],
        link: "#",
    }
];

export default function Projects() {
    return (
        <section className="min-h-screen bg-black text-white py-[var(--spacing-fluid-section)] px-[var(--spacing-section-px)] relative z-20" id="work">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-[var(--spacing-fluid-gap)] max-w-2xl"
                >
                    <span className="text-fluid-xs font-mono tracking-widest text-white/50 mb-4 block border-l border-white/20 pl-4 uppercase">
                        ( projects )
                    </span>
                    <h2 className="text-[length:var(--text-fluid-h2)] font-light tracking-tight text-white/90">
                        Things I've built.
                    </h2>
                </motion.div>

                <div className="flex flex-col gap-12 lg:gap-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="group flex flex-col lg:flex-row gap-8 lg:gap-16 border-t border-white/10 pt-12"
                        >
                            {/* Left Column: Title & Metadata */}
                            <div className="lg:w-1/3 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-[length:var(--text-fluid-h3)] font-medium tracking-tight mb-2 text-white">
                                        {project.title}
                                    </h3>
                                    <div className="flex flex-col gap-1 text-[length:var(--text-fluid-sm)] font-mono text-white/40 uppercase tracking-widest">
                                        <span>{project.category}</span>
                                        <span>{project.timeframe}</span>
                                    </div>
                                </div>

                                <Link
                                    href={project.link}
                                    target={project.link.startsWith("http") ? "_blank" : undefined}
                                    rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="hidden lg:inline-flex items-center gap-2 mt-8 text-[length:var(--text-fluid-sm)] text-white/60 hover:text-white transition-colors w-fit border-b border-white/20 hover:border-white pb-1"
                                >
                                    View Repository <ArrowUpRight className="w-4 h-4" />
                                </Link>
                            </div>

                            {/* Right Column: Case Study Data */}
                            <div className="lg:w-2/3 flex flex-col gap-8">
                                <p className="text-[length:var(--text-fluid-body)] leading-[1.6] text-white/90 font-light">
                                    {project.description}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[length:var(--text-fluid-body)] leading-[1.6]">
                                    <div>
                                        <h4 className="text-fluid-xs font-bold font-mono tracking-widest uppercase text-white/40 mb-3 block">Why I built it</h4>
                                        <p className="text-white/70 font-light">{project.whyIBuiltIt}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-fluid-xs font-bold font-mono tracking-widest uppercase text-white/40 mb-3 block">One cool detail</h4>
                                        <p className="text-white/70 font-light">{project.coolDetail}</p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-fluid-xs font-bold font-mono tracking-widest uppercase text-white/40 mb-4 block">Core Stack</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {project.stack.map(tech => (
                                            <span key={tech} className="px-3 py-1 border border-white/10 rounded-sm text-[length:var(--text-fluid-sm)] text-white/60 bg-white/5 font-mono">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <Link
                                    href={project.link}
                                    target={project.link.startsWith("http") ? "_blank" : undefined}
                                    rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="lg:hidden inline-flex items-center gap-2 mt-4 text-[length:var(--text-fluid-sm)] text-white/60 hover:text-white transition-colors w-fit border-b border-white/20 hover:border-white pb-1"
                                >
                                    View Repository <ArrowUpRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
