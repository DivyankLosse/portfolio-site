"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

type Stat = { label: string; value: number };

// From the Achievements section of the CV in
// public/Divyank_Khewale_Resume.pdf.
const CREDENTIAL = {
  title: "Finalist — India's largest AI hackathon",
  detail:
    "Among 56,000+ participants, hosted by Meta, Hugging Face, PyTorch and Scaler School of Technology.",
};

type GithubStats = {
  publicRepos: number | null;
  languages: number | null;
  contributions: number | null;
};

function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      let startTime: number | null = null;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing out function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-5xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
      {count}
    </span>
  );
}

export default function Achievements() {
  const [stats, setStats] = useState<Stat[] | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchStats() {
      try {
        const res = await fetch("/api/github/stats");
        if (!res.ok) return;
        const data: GithubStats = await res.json();
        if (cancelled) return;

        // Only render the numbers that actually came back.
        setStats(
          [
            { label: "Public Repositories", value: data.publicRepos },
            { label: "Languages Used", value: data.languages },
            { label: "Contributions This Year", value: data.contributions },
          ].filter((s): s is Stat => typeof s.value === "number")
        );
      } catch {
        // Leave the section empty rather than showing a made-up figure.
      }
    }

    fetchStats();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="py-24 border-y border-border/50 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-12 flex items-start gap-5 p-6 rounded-2xl glass-panel"
        >
          <div className="shrink-0 p-3 rounded-full bg-primary/10 border border-primary/30">
            <Trophy className="w-6 h-6 text-primary" aria-hidden />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-1">{CREDENTIAL.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{CREDENTIAL.detail}</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 text-center">
          {(stats ?? []).map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center space-y-2 p-6 rounded-2xl glass-panel hover:glass-panel-hover"
            >
              <AnimatedCounter value={stat.value} />
              <span className="text-sm tracking-wider uppercase text-muted-foreground font-semibold mt-2">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
