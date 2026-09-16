"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const projectsData = [
  {
    title: "SSS Startup Survival Simulator",
    tagline: "Gamified business strategy and startup management",
    problem: "Aspiring entrepreneurs often lack a risk-free environment to understand the complexities of running a startup, leading to costly real-world mistakes.",
    solution: "A comprehensive simulator that models market dynamics, resource management, and strategic decision-making using reinforcement learning principles.",
    architecture: "Microservices architecture deployed on AWS, utilizing a highly concurrent game engine backend.",
    techStack: ["Next.js", "Python", "FastAPI", "PostgreSQL", "Redis", "AWS"],
    githubUrl: "https://github.com/DivyankLosse/SSS-Startup-Survival-Simulator",
    futureScope: "Integration of LLM-based virtual investors and dynamic competitor AI.",
  },
  {
    title: "AgriLO",
    tagline: "Intelligent Agriculture Optimization",
    problem: "Farmers face unpredictable yields and resource inefficiencies due to lack of localized, data-driven crop management.",
    solution: "An AI-powered platform providing predictive analytics for crop disease detection, soil health, and optimal harvesting schedules.",
    architecture: "Edge-to-cloud pipeline where IoT sensors feed data to cloud-based ML inference models.",
    techStack: ["React Native", "TensorFlow", "Django", "IoT Data Pipeline"],
    githubUrl: "https://github.com/DivyankLosse/AgriLO",
    futureScope: "Drone-based visual surveillance integration and automated irrigation triggers.",
  },
  {
    title: "Sign-Bridge",
    tagline: "Real-time Sign Language Translation",
    problem: "Communication barriers exist between sign language users and non-signers in everyday interactions.",
    solution: "A computer vision-based application that translates sign language gestures into text/speech in real-time.",
    architecture: "Optimized on-device CNN models built with MediaPipe for low-latency hand tracking.",
    techStack: ["Python", "MediaPipe", "PyTorch", "React", "WebRTC"],
    githubUrl: "https://github.com/DivyankLosse/Sign-Bridge",
    futureScope: "Support for continuous multi-gesture sentences and localized sign language variations.",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-secondary font-mono tracking-widest uppercase text-sm mb-4"
          >
            Featured Work
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Project Deep Dive
          </motion.h2>
        </div>

        <div className="space-y-32">
          {projectsData.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                
                <div className={`order-2 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="glass-panel p-8 rounded-3xl group-hover:border-primary/50 transition-colors duration-500">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="w-6 h-6" />
                      </a>
                    </div>
                    
                    <p className="text-primary font-medium mb-6">{project.tagline}</p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Problem</h4>
                        <p className="text-sm leading-relaxed">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Solution</h4>
                        <p className="text-sm leading-relaxed">{project.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Architecture</h4>
                        <p className="text-sm leading-relaxed">{project.architecture}</p>
                      </div>
                      <div>
                        <h4 className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-xs font-mono">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Future Scope</h4>
                        <p className="text-sm leading-relaxed text-muted-foreground italic">{project.futureScope}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`order-1 ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-panel group-hover:shadow-[0_0_40px_rgba(79,140,255,0.2)] transition-shadow duration-500">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10" />
                    <div className="w-full h-full flex items-center justify-center bg-muted/30">
                      <span className="text-muted-foreground/40 font-mono tracking-widest uppercase">[ Screenshot Placeholder ]</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
