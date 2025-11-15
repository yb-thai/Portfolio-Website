import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Discord Voice Relay System",
      role: "",
      description: `
A multi-bot audio relay system built with Node.js, Discord.js, and custom
WebSocket streaming. The system captures real-time voice from multiple
Discord channels, processes PCM audio, and relays it across bots with minimal
latency. Designed for scalability, multi-user mixing, and low-lag audio pipelines.
      `,
      tech: [
        "Node.js",
        "Discord.js",
        "@discordjs/voice",
        "WebSocket",
        "Audio Streaming",
      ],
      image: null,
      link: "https://github.com/yb-thai/Discord-voice-relay",
    },
    {
      name: "Project Two",
      role: "Another role (optional)",
      description:
        "Another short description for a different project. You can talk about impact or tech.",
      tech: ["Docker", "Kubernetes", "Terraform"],
      image: null,
      link: "https://github.com/yb-thai/Discord-voice-relay",
    },
    {
      name: "Project Two",
      role: "Another role (optional)",
      description:
        "Another short description for a different project. You can talk about impact or tech.",
      tech: ["Docker", "Kubernetes", "Terraform"],
      image: null,
      link: "https://github.com/yb-thai/Discord-voice-relay",
    },
    
  ];

  return (
    <div className="section-inner">
      <div className="projects-grid">
        {projects.map((project, i) => {
          const Wrapper = project.link ? "a" : "div";
          const wrapperProps = project.link
            ? {
                href: project.link,
                target: "_blank",
                rel: "noopener noreferrer",
              }
            : {};

          return (
            <Wrapper
              key={i}
              className="project-card__wrapper"
              {...wrapperProps}
            >
              <article className="project-card">
                {/* Thumbnail */}
                <div className="project-card__thumb-wrapper">
                  <div
                    className="project-card__thumb"
                    style={
                      project.image
                        ? { backgroundImage: `url(${project.image})` }
                        : undefined
                    }
                  />
                </div>

                {/* Text */}
                <div className="project-card__body">
                  <div className="project-card__header">
                    <h3 className="project-card__title">
                      {project.name}
                      {project.link && (
                        <span className="project-card__arrow">↗</span>
                      )}
                    </h3>
                    {project.role && (
                      <p className="project-card__role">{project.role}</p>
                    )}
                  </div>

                  {/* using education style for that faded look */}
                  <p className="education-item__description">
                    {project.description}
                  </p>

                  {project.tech && (
                    <ul className="project-card__tech">
                      {project.tech.map((t, idx) => (
                        <li key={idx}>{t}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </Wrapper>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
