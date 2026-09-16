"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download, Briefcase, Github, FolderKanban, Mail } from "lucide-react";

export default function RecruiterMode() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="py-12 border-b border-border/50 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-8">
          <h3 className="text-secondary font-mono tracking-widest uppercase text-sm mb-2">Recruiter Mode</h3>
          <h2 className="text-2xl font-bold">Quick Actions</h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          <motion.a
            variants={itemVariants}
            href="/resume.pdf"
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass-panel hover:glass-panel-hover transition-all group"
          >
            <Download className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-sm tracking-wide">Download Resume</span>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="mailto:chinmaykhewale2005@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass-panel hover:glass-panel-hover transition-all group bg-primary/10 border-primary/30"
          >
            <Briefcase className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-sm tracking-wide text-primary">Hire Me</span>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="https://github.com/DivyankLosse"
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass-panel hover:glass-panel-hover transition-all group"
          >
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-sm tracking-wide">View GitHub</span>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass-panel hover:glass-panel-hover transition-all group"
          >
            <FolderKanban className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-sm tracking-wide">View Projects</span>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass-panel hover:glass-panel-hover transition-all group"
          >
            <Mail className="w-5 h-5 text-violet-400 group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-sm tracking-wide">Contact</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
