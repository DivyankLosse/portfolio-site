"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { label: "Projects Built", value: 15, suffix: "+" },
  { label: "Technologies Mastered", value: 20, suffix: "+" },
  { label: "GitHub Contributions", value: 500, suffix: "+" },
  { label: "Cups of Coffee", value: 1000, suffix: "+" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
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
      {count}{suffix}
    </span>
  );
}

export default function Achievements() {
  return (
    <section className="py-24 border-y border-border/50 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center space-y-2 p-6 rounded-2xl glass-panel hover:glass-panel-hover"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <span className="text-sm tracking-wider uppercase text-muted-foreground font-semibold mt-2">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
