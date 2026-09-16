"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingProps {
  percent: number;
}

export default function Loading({ percent }: LoadingProps) {
  const [text, setText] = useState("");
  const fullText = "INITIALIZING AI ENGINEER PORTFOLIO...";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6">
        <div className="h-8 mb-8 text-primary font-mono tracking-[0.2em] text-sm text-center">
          {text}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
          >
            _
          </motion.span>
        </div>

        <div className="w-full h-1 bg-border rounded-full overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_10px_rgba(79,140,255,0.8)]"
            initial={{ width: "0%" }}
            animate={{ width: `${percent}%` }}
            transition={{ ease: "easeOut", duration: 0.2 }}
          />
        </div>

        <div className="mt-4 text-muted-foreground font-mono text-xs flex justify-between w-full">
          <span>SYSTEM_BOOT</span>
          <span>{Math.round(percent)}%</span>
        </div>
      </div>
    </motion.div>
  );
}
