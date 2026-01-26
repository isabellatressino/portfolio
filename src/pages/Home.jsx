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
      <header>
        <Navbar />
        <Hero />
        <TechMarquee />
      </header>

      <main>
        <About />
        <Projects />
        <TechStack />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
