import { About } from "../components/About";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* theme toggle */}
      <ThemeToggle />

      {/* background effect */}
      <StarBackground />

      {/* navbar */}
      <Navbar />

      {/* maincontent */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* footer  */}
      <Footer />
    </div>
  );
};
