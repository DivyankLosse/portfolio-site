"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Cpu, Code2, Database, Bot, Zap } from "lucide-react";

const identityTraits = [
  {
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    title: "AI Engineer",
    description: "Designing and deploying production-ready AI models and intelligent systems.",
  },
  {
    icon: <Bot className="w-8 h-8 text-secondary" />,
    title: "Machine Learning",
    description: "Developing robust algorithms for predictive modeling, NLP, and computer vision.",
  },
  {
    icon: <Zap className="w-8 h-8 text-violet-400" />,
    title: "Reinforcement Learning",
    description: "Training autonomous agents to optimize decisions in complex environments.",
  },
  {
    icon: <Code2 className="w-8 h-8 text-primary" />,
    title: "Full Stack Development",
    description: "Building scalable web applications, from responsive UIs to robust APIs.",
  },
  {
    icon: <Database className="w-8 h-8 text-secondary" />,
    title: "Automation Systems",
    description: "Creating pipelines that reduce manual effort and accelerate workflows.",
  },
  {
    icon: <Cpu className="w-8 h-8 text-violet-400" />,
    title: "Research Interest",
    description: "Exploring the bleeding edge of AI to discover novel solutions for modern problems.",
  },
];

export default function AIIdentity() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-secondary font-mono tracking-widest uppercase text-sm mb-4"
          >
            Core Competencies
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            AI Identity
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {identityTraits.map((trait, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass-panel p-8 rounded-2xl hover:glass-panel-hover group"
            >
              <div className="mb-6 p-4 rounded-xl bg-background/50 inline-block group-hover:scale-110 transition-transform duration-300">
                {trait.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{trait.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {trait.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
