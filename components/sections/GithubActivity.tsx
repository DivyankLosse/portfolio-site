"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Star, GitFork, Github as GithubIcon, Circle } from "lucide-react";

type RepoData = {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  url: string;
};

export default function GithubActivity() {
  const [repos, setRepos] = useState<RepoData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch("/api/github");
        const data = await res.json();
        setRepos(data);
      } catch (error) {
        console.error("Failed to load GitHub activity");
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-secondary font-mono tracking-widest uppercase text-sm mb-4"
          >
            Open Source
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-4"
          >
            <GithubIcon className="w-10 h-10 md:w-12 md:h-12" />
            GitHub Activity
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="flex justify-center items-center h-48">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo, idx) => (
                <motion.a
                  key={idx}
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-panel p-6 rounded-2xl flex flex-col h-full hover:border-primary/50 transition-colors group"
                >
                  <h3 className="text-lg font-bold text-primary group-hover:underline mb-2">{repo.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow">
                    {repo.description || "No description provided."}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground mt-auto">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <Circle className="w-3 h-3 fill-secondary text-secondary" />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      {repo.forks}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
