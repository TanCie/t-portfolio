import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { TechSkills } from "./components/TechSkills";
import ProjectCard from "./components/ProjectCard";
import proj1 from "./img/proj1.png";
import proj2 from "./img/proj2.jpg";
import cookmom from "./img/cookmom-p.png";
import chat from "./img/chat-proj.png";
import "./index.css";
import { AboutMe } from "./components/AboutMe";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";

const projects = [
  {
    id: 1,
    title: "Muscula",
    desc: "The ultimate fitness app",
    link: "https://muscula.onrender.com",
    gitLink: "https://github.com/TanCie/muscula",
    image: proj1,
  },
  {
    id: 2,
    title: "ChatApp",
    desc: "A chat app using MERN stack",
    link: "https://chatty-3tjb.onrender.com/",
    gitLink: "https://github.com/TanCie/s-chatapp",
    image: chat,
  },
  {
    id: 3,
    title: "CookMom",
    desc: "Monetize your creavtivity and passion",
    link: "https://recipe-finder-navy-nine.vercel.app/",
    gitLink: "https://github.com/TanCie/recipe-finder",
    image: cookmom,
  },

  {
    id: 4,
    title: "Weather Forecast",
    desc: "The ultimate weather app",
    link: "https://tancie.github.io/weather-forecast/",
    gitLink: "https://github.com/TanCie/weather-forecast",
    image: proj2,
  },
];

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-gray-950">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <h2
                  id="project"
                  className="text-white font-bold text-3xl md:text-4xl text-center py-16"
                >
                  PROJECTS
                </h2>
                <div className="flex flex-wrap justify-center gap-10">
                  {projects.map((proj) => (
                    <ProjectCard key={proj.id} project={proj} />
                  ))}
                </div>
                <TechSkills />
                <AboutMe />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
