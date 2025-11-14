import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const App = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sectionIds = ["about", "experience", "projects"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.4, // ~40% of section visible to count as active
      }
    );

    sections.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <div className="layout">
        {/* LEFT SIDE */}
        <aside className="sidebar">
          <div className="sidebar-top">
            <Hero />

            <nav className="sidebar-tabs">
              <a
                href="#about"
                className={
                  "sidebar-tab " +
                  (activeSection === "about" ? "sidebar-tab--active" : "")
                }
              >
                <span className="sidebar-tab__line" />
                <span>About</span>
              </a>

              <a
                href="#experience"
                className={
                  "sidebar-tab " +
                  (activeSection === "experience" ? "sidebar-tab--active" : "")
                }
              >
                <span className="sidebar-tab__line" />
                <span>Experience</span>
              </a>

              <a
                href="#projects"
                className={
                  "sidebar-tab " +
                  (activeSection === "projects" ? "sidebar-tab--active" : "")
                }
              >
                <span className="sidebar-tab__line" />
                <span>Projects</span>
              </a>
            </nav>
          </div>

          {/* Social icons at bottom-left */}
          <div className="sidebar-socials">
            <a
              href="https://github.com/"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/"
              aria-label="Twitter"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </aside>

        {/* RIGHT SIDE */}
        <main className="content">
          <section id="about" className="content-section">
            <About />
          </section>

          <section id="experience" className="content-section">
            <Experience />
          </section>

          <section id="projects" className="content-section">
            <Projects />
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
