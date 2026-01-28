import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-5xl px-4 text-sm text-zinc-400 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Arman Levanti</p>
          <p className="opacity-80">Built with React + TypeScript + Tailwind</p>
        </div>
      </footer>
    </div>
  );
}
