export default function Header() {
    return (
      <header className="header" id="header">
        <section className="title-section">
          <div className="title">
            <h1>Welcome to my Portfolio</h1>
            <p>Explore my latest projects and learn more about me.</p>
            <a href="#about-section">
              <button>Learn More</button>
            </a>
          </div>
        </section>
      </header>
    );
}