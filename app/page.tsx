import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <ScrollyCanvas />

      <div className="relative z-20 bg-black">
        <About />
        <Services />
        <Projects />
      </div>

      <footer className="py-24 bg-black text-white/20 text-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <span className="text-[20vw] font-bold tracking-tighter">DIVYANK</span>
        </div>
        <p className="relative z-10 text-sm tracking-widest">
          © {new Date().getFullYear()} DIVYANK KHEWALE.
        </p>
      </footer>
    </main>
  );
}
