import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Header from "./Header";
import MyProjects from "./MyProjects";
import Skills from "./Skills";

function App() {
  return (
    <div className="container">
      <nav className="navigation-bar">
        <h2>Zainab Choudhry</h2>
        <div></div>
        <a href="">About</a>
        <a href="">Projects</a>
        <a href="">Skills</a>
        <a href="">Contact</a>
      </nav>
      <main>
        <Header />
        <AboutMe />
        <MyProjects />
        <Skills />
        <Contact />
        <footer className="footer-section">Footer</footer>
      </main>
    </div>
  );
}

export default App;