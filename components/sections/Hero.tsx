"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Mail } from "lucide-react";
import Link from "next/link";

import dynamic from "next/dynamic";

import BlurText from "@/components/ui/BlurText";

// three.js is by far the heaviest thing on the page and the hero is readable
// without it, so it loads after the copy rather than blocking it.
const Antigravity = dynamic(() => import("@/components/ui/Antigravity"), {
  ssr: false,
  loading: () => null,
});



export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Antigravity
          count={300}
          magnetRadius={10}
          ringRadius={10}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1}
          lerpSpeed={0.01}
          color="#ffffff"
          autoAnimate={false}
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />
        {/* Gradient Overlay for blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center lg:text-left flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-3/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-secondary font-mono tracking-widest uppercase text-sm md:text-base mb-4">
              Hello, I'm Divyank Khewale
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
              AI Engineer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Building the Future
              </span>
            </h1>
          </motion.div>

          <BlurText
            text="Designing intelligent systems, automating workflows, and pushing the boundaries of what's possible with Machine Learning and Full-Stack Development."
            delay={50}
            animateBy="words"
            direction="bottom"
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 mx-auto lg:mx-0"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <Link href="#projects" className="group flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-secondary hover:text-secondary-foreground transition-all duration-300">
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link href="/Divyank_Khewale_Resume.pdf" target="_blank" rel="noreferrer" download className="flex items-center gap-2 glass-panel px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:border-primary transition-all duration-300">
              <FileText className="w-4 h-4" />
              Resume
            </Link>

            <Link href="#contact" className="flex items-center gap-2 glass-panel px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:border-secondary transition-all duration-300">
              <Mail className="w-4 h-4" />
              Contact
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
