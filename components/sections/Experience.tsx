"use client";

import { motion } from "framer-motion";

type TimelineEntry = {
  role: string;
  company: string;
  duration: string;
  description: string;
};

// Sourced from the CV in public/Divyank_Khewale_Resume.pdf. Keep the two in
// step: anything added here must be backed by the CV.
const timelineData: TimelineEntry[] = [
  {
    role: "AI Engineer Intern",
    company: "iGurus, Pune",
    duration: "Jun 2026 - Present",
    description:
      "Building computer vision and LLM systems: an AI posture report generator that analyses patient posture into health reports, a real-time posture monitor with desktop alerts, an LLM-generated long-form astrology report platform, and a yoga pose correction system with live corrective feedback.",
  },
  {
    role: "B.Tech, Computer Science & Engineering",
    company: "GH Raisoni University, Amravati",
    duration: "2023 - 2027",
    description:
      "Undergraduate study in computer science, alongside independent work across generative AI, computer vision, LLM agents, NLP and IoT.",
  },
  {
    role: "Data Science and Machine Learning",
    company: "Binary Brains, Nagpur",
    duration: "Mar 2025 - Aug 2025",
    description:
      "Certification training in data science and machine learning, following an earlier Python and data analytics programme at the same institute (Sep 2024 - Feb 2025).",
  },
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
          {timelineData.length > 0 && (
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-border -translate-x-1/2" />
          )}

          {timelineData.length === 0 && (
            <p className="pl-16 md:pl-0 md:text-center text-muted-foreground">
              Timeline coming soon.
            </p>
          )}

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
