import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Header from "./Header";
import MyProjects from "./MyProjects";
import Skills from "./Skills";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <nav className="navigation-bar">
        <a href="#header" id="nav-name">
          <h2>Zainab Choudhry</h2>
        </a>
        <a className="nav-links" href="#about-section">
          About
        </a>
        <a className="nav-links" href="#projects-section">
          Projects
        </a>
        <a className="nav-links" href="#skills-section">
          Skills
        </a>
        <a className="nav-links" href="#contact-section">
          Contact
        </a>
      </nav>
      <main>
        <Header />
        <AboutMe />
        <MyProjects />
        <Skills />
        <Contact />
        <footer className="footer-section">
          <p>&copy; Zainab Choudhry 2024. </p>
        </footer>
      </main>
    </div>
  );
}

export default App;