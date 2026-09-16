"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <h3 className="text-secondary font-mono tracking-widest uppercase text-sm mb-4">The Story</h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Architecting <br/><span className="text-primary">Intelligent Solutions</span></h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I am an AI Engineer passionate about blending state-of-the-art Machine Learning with robust Full-Stack development. My journey is defined by a relentless curiosity to understand complex systems and automate them to solve real-world problems.
              </p>
              <p>
                Whether it's building scalable architectures, optimizing deep learning models, or crafting seamless user experiences, I approach every challenge with an engineering mindset: measure, iterate, and refine.
              </p>
              <p>
                I believe that the future belongs to those who can bridge the gap between algorithmic research and production-ready applications.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square w-full max-w-md mx-auto rounded-3xl overflow-hidden glass-panel relative group">
              {/* Placeholder for Profile Image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 mix-blend-overlay z-10" />
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <span className="text-muted-foreground/50 font-mono text-sm tracking-widest uppercase">[ Profile Image Placeholder ]</span>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-20 group-hover:opacity-50 transition-opacity duration-500" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
