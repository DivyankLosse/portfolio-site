"use client";

import { motion } from "framer-motion";

const timelineData = [
  {
    role: "AI Engineer",
    company: "FutureTech Innovations",
    duration: "2024 - Present",
    description: "Spearheading the development of reinforcement learning agents for dynamic resource allocation. Architecting scalable microservices for ML inference.",
  },
  {
    role: "Machine Learning Researcher",
    company: "University AI Lab",
    duration: "2022 - 2024",
    description: "Conducted research on computer vision models for real-time anomaly detection. Published findings in top-tier conferences.",
  },
  {
    role: "Full Stack Developer",
    company: "Startup Nexus",
    duration: "2021 - 2022",
    description: "Built and maintained the core web application serving 100k+ MAU using React, Node.js, and PostgreSQL.",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-secondary font-mono tracking-widest uppercase text-sm mb-4"
          >
            Journey
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Experience & Learning
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-border -translate-x-1/2" />

          <div className="space-y-12">
            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 z-10 border-4 border-background shadow-[0_0_10px_rgba(79,140,255,0.8)]" />

                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}>
                    <div className="glass-panel p-6 rounded-2xl hover:glass-panel-hover group transition-all duration-300">
                      <span className="text-secondary font-mono text-sm tracking-wider mb-2 block">{item.duration}</span>
                      <h3 className="text-xl font-bold text-foreground mb-1">{item.role}</h3>
                      <h4 className="text-muted-foreground font-medium mb-4">{item.company}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
