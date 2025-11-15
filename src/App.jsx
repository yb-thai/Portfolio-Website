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

  const handleScroll = () => {
    const viewportMiddle = window.innerHeight * 0.; // tweak 0.3–0.5 if needed

    let closestId = sectionIds[0];
    let smallestDistance = Infinity;

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const rect = el.getBoundingClientRect()
      if (rect.bottom < 0 || rect.top > window.innerHeight) {
        return;
      }
      const distance = Math.abs(rect.top - viewportMiddle);

      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestId = id;
      }
    });

    setActiveSection(closestId);
  };

  // run once on load
  handleScroll();

  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleScroll);
  };
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