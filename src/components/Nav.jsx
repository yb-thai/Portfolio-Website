import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Nav = () => {
  return (
    <header className="nav">
      {/* Replace with your real name later */}
      <div className="nav__brand">Your Name</div>

      <nav className="nav__links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="nav__socials">
        <a
          href="#"
          aria-label="GitHub"
          className="nav__social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="#"
          aria-label="LinkedIn"
          className="nav__social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </header>
  );
};

export default Nav;
