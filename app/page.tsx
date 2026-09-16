import Hero from "@/components/sections/Hero";
import RecruiterMode from "@/components/sections/RecruiterMode";
import About from "@/components/sections/About";
import AIIdentity from "@/components/sections/AIIdentity";
import Achievements from "@/components/sections/Achievements";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import GithubActivity from "@/components/sections/GithubActivity";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative bg-background min-h-screen">
      <Hero />

      <div className="relative z-20 bg-background">
        <RecruiterMode />
        <About />
        <AIIdentity />
        <Achievements />
        <Projects />
        <Skills />
        <Experience />
        <GithubActivity />
        <Contact />
      </div>
    </main>
  );
}
