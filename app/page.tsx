import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
      <ScrollyCanvas />

      <div className="relative z-20 bg-black">
        <Projects />
        <About />
        <Services />
      </div>


    </main>
  );
}
