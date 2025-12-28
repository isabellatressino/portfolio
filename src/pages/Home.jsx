import Hero from "../components/sections/Hero.jsx"
import About from "../components/sections/About.jsx"
import Projects from "../components/sections/Projects.jsx"
import TechStack from "../components/sections/TechStack.jsx"
import Footer from "../components/layout/Footer.jsx"

export default function Home() {
  return (
    <>
      <header className="w-full bg-grid">
        <div className="mx-auto max-w-300">
          <Hero />
        </div>
      </header>

      <main className="w-full">
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
  )
}
