import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
// import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Events } from "./components/Events";
import { Projects } from "./components/Projects";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import "../styles/tailwind.css";


export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">

      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Skills />
        {/* <Education /> */}
        <Experience />
        <Events />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}
