import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Project One",
      role: "Your role here (optional)",
      description:
        "Short description of what this project does and why it matters. Keep it to 2–3 sentences.",
      tech: ["React", "Node.js", "AWS"],
      // When you have a real screenshot, change this to the image path in /public
      image: null,
    },
    {
      name: "Project Two",
      role: "Another role (optional)",
      description:
        "Another short description for a different project. You can talk about impact or tech.",
      tech: ["Docker", "Kubernetes", "Terraform"],
      image: null,
    },
    // add more projects here
  ];

  return (
    <div className="section-inner">
      <div className="projects-grid">
        {projects.map((project, i) => (
          <article key={i} className="project-card">
            {/* Screenshot / thumbnail */}
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

            {/* Text content */}
            <div className="project-card__body">
              <div className="project-card__header">
                <h3 className="project-card__title">{project.name}</h3>
                {project.role && (
                  <p className="project-card__role">{project.role}</p>
                )}
              </div>

              <p className="project-card__description">
                {project.description}
              </p>

              {project.tech && (
                <ul className="project-card__tech">
                  {project.tech.map((t, index) => (
                    <li key={index}>{t}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
