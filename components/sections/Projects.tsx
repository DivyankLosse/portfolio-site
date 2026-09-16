"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

// Every field below is taken from the project's own README, its repository
// metadata, or the CV. Live links are only listed where the URL was checked and
// returned 200 -- a dead demo is worse than no demo.
type Project = {
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  architecture: string;
  techStack: string[];
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  liveLabel?: string;
  status: string;
};

const projectsData: Project[] = [
  {
    title: "Startup Survival Simulator",
    tagline: "An OpenEnv-compliant environment for long-horizon agent planning",
    problem:
      "Reinforcement learning benchmarks rarely model the compounding, partially observable trade-offs a real founder faces, so agents trained on them transfer poorly to messy sequential decisions.",
    solution:
      "A simulation environment where an agent observes ten startup metrics and picks one of nine actions per turn. Three variables -- market demand, churn rate and technical debt -- are hidden, so the agent has to spend tool actions inferring them.",
    architecture:
      "A standard reset/step/state interface exposed over FastAPI and packaged with Docker, deployed as a Hugging Face Space. Episodes terminate on bankruptcy, on reaching 10,000 users, or at a 50-step timeout.",
    techStack: ["Python", "FastAPI", "Docker", "OpenEnv", "TRL", "Hugging Face Spaces"],
    highlights: [
      "10 observable metrics, 9 actions per turn",
      "3 hidden variables make the world partially observable",
      "Sparse rewards across episodes of up to 50 steps",
      "Colab training notebook included",
    ],
    githubUrl: "https://github.com/DivyankLosse/SSS-Startup-Survival-Simulator",
    liveUrl: "https://huggingface.co/spaces/Loosebag/SSS-Startup-Survival-Simulator",
    liveLabel: "Hugging Face Space",
    status: "Live",
  },
  {
    title: "AgriLO",
    tagline: "AI and IoT smart farming assistant",
    problem:
      "Growers juggle disease checks, soil readings, agronomy advice and record-keeping across separate tools, which slows down decisions that are time-sensitive by nature.",
    solution:
      "One platform combining image-based crop disease detection, live soil intelligence, a multilingual agronomy assistant, and analytics dashboards, plus booking for expert soil testing.",
    architecture:
      "React and Vite frontend against a FastAPI and Python backend with MongoDB persistence, taking NPK, moisture, temperature and pH inputs from soil monitoring.",
    techStack: ["React", "Vite", "FastAPI", "Python", "MongoDB", "Razorpay"],
    highlights: [
      "Plant disease detection from a leaf or root image",
      "Soil monitoring across NPK, moisture, temperature and pH",
      "Multilingual assistant for practical farming guidance",
      "Analytics dashboards and integrated service booking",
    ],
    githubUrl: "https://github.com/DivyankLosse/AgriLO",
    liveUrl: "https://agri-lo-six.vercel.app",
    liveLabel: "Live site",
    status: "Live",
  },
  {
    title: "Sign-Bridge",
    tagline: "ASL-first translation platform",
    problem:
      "Everyday communication between sign language users and non-signers still depends on a human interpreter being present.",
    solution:
      "A two-way translator: live ASL sign-to-text recognition, plus text-to-sign animation playback, with history and per-user activity kept across sessions.",
    architecture:
      "React, Vite and Tailwind frontend talking to a FastAPI backend over Axios, with MongoDB persistence and MediaPipe plus TensorFlow assets driving ASL recognition.",
    techStack: ["React", "Vite", "Tailwind CSS", "FastAPI", "MongoDB", "MediaPipe", "TensorFlow"],
    highlights: [
      "Live sign-to-text translation",
      "Text-to-sign animation playback",
      "Translation history with type filtering",
      "Auth with persistent login and activity dashboard",
    ],
    githubUrl: "https://github.com/DivyankLosse/Sign-Bridge",
    status: "Source available",
  },
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
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <span className="mt-2 inline-block text-[11px] font-mono tracking-widest uppercase px-2 py-1 rounded-full border border-border text-muted-foreground">
                          {project.status}
                        </span>
                      </div>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} on GitHub`}
                        className="shrink-0 text-muted-foreground hover:text-primary transition-colors"
                      >
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
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors"
                        >
                          {project.liveLabel}
                          <ExternalLink className="w-4 h-4" aria-hidden />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className={`order-1 ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative rounded-3xl overflow-hidden glass-panel p-8 group-hover:shadow-[0_0_40px_rgba(79,140,255,0.2)] transition-shadow duration-500">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 pointer-events-none" />
                    <div className="relative">
                      <h4 className="text-xs tracking-widest uppercase text-muted-foreground mb-6">Highlights</h4>
                      <ul className="space-y-4">
                        {project.highlights.map((point) => (
                          <li key={point} className="flex gap-3 text-sm leading-relaxed">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
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
