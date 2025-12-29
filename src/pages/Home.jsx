import Navbar from "../components/layout/NavBar.jsx";
import Hero from "../components/sections/Hero.jsx";
import About from "../components/sections/About.jsx";
import Projects from "../components/sections/Projects.jsx";
import TechStack from "../components/sections/TechStack.jsx";
import Footer from "../components/layout/Footer.jsx";
import TechMarquee from "../components/utils/TechMarquee.jsx";

export default function Home() {
  return (
    <>
      <Navbar />

      <header className="relative bg-grid">
        <div className="mx-auto max-w-300">
          <Hero />
        </div>
        <TechMarquee />
      </header>

      <main>
        <div className="mx-auto max-w-300">
          <About />
        </div>

        <Projects />

        <div className="mx-auto max-w-300">
          <TechStack />
        </div>
      </main>

      <footer className="w-full bg-surface">
        <div className="mx-auto max-w-300">
          <Footer />
        </div>
      </footer>
    </>
  );
}
