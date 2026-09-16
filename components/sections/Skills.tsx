"use client";

import { motion } from "framer-motion";

// Mirrors the Technical Skills section of the CV in
// public/Divyank_Khewale_Resume.pdf, including its "(Basics)" qualifiers --
// those are deliberate and should not be dropped. Next.js and TypeScript are
// the two additions, both evidenced by this repository itself.
const skillsData = [
  {
    category: "AI / ML & GenAI",
    items: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Generative AI",
      "LLM Development",
      "OpenCV",
      "Scikit-Learn",
      "NLP",
      "Computer Vision",
      "Reinforcement Learning",
      "MLOps",
    ],
    color: "border-primary text-primary bg-primary/10",
  },
  {
    category: "Web & App Development",
    items: [
      "React (Basics)",
      "Next.js",
      "TypeScript",
      "MERN Stack (Basics)",
      "FastAPI",
      "REST APIs",
      "MongoDB",
    ],
    color: "border-secondary text-secondary bg-secondary/10",
  },
  {
    category: "Deployment & DevOps",
    items: [
      "Git & GitHub",
      "Docker",
      "CI/CD",
      "Vercel",
      "Render",
      "VPS Deployment",
      "Model Deployment",
    ],
    color: "border-violet-400 text-violet-400 bg-violet-400/10",
  },
  {
    category: "Data & Cloud",
    items: [
      "Data Science",
      "Data Analytics",
      "Data Pipelines",
      "AWS (Basics)",
      "Automation Pipelines",
    ],
    color: "border-amber-400 text-amber-400 bg-amber-400/10",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-secondary font-mono tracking-widest uppercase text-sm mb-4"
          >
            Capabilities
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Technical Arsenal
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {skillsData.map((group, groupIdx) => (
            <motion.div 
              key={groupIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: groupIdx * 0.1 }}
            >
              <h4 className="text-xl font-bold mb-6 text-muted-foreground">{group.category}</h4>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-full border text-sm font-semibold tracking-wide cursor-default transition-shadow hover:shadow-[0_0_15px_inherit] ${group.color}`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
