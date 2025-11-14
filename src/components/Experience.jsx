import React from "react";

const Experience = () => {
  const experience = [
    {
      period: "YEAR — YEAR",
      title: "Your Role · Company",
      subtitle: "Job Level (optional)",
      description:
        "Describe what you did in this role. Mention the type of work, impact, and notable responsibilities or achievements.",
      links: [
        // { label: "Case Study", href: "#" },
      ],
      skills: ["Skill A", "Skill B", "Skill C"],
    },
    {
      period: "YEAR — YEAR",
      title: "Another Role · Company",
      subtitle: "Job Level (optional)",
      description:
        "Another short description for a different role. Keep it focused on outcomes and technologies.",
      links: [
        // { label: "Project Link", href: "#" },
      ],
      skills: ["Skill X", "Skill Y", "Skill Z"],
    },
  ];

  const education = [
    {
      period: "YEAR — YEAR",
      school: "Your University / School",
      degree: "Your Degree · Major",
      description: "Optional one-line about focus, honors, or activities.",
    },
    {
      period: "YEAR — YEAR",
      school: "Another Institution",
      degree: "Certificate / Program",
      description: "Optional description.",
    },
  ];

  return (
    <div className="section-inner">
      {/* EXPERIENCE */}
      <ul className="experience-list">
        {experience.map((item, i) => (
          <li key={i} className="experience-item">
            <div className="experience-item__header">
              <span className="experience-item__period">{item.period}</span>

              <div className="experience-item__content">
                <div className="experience-item__titles">
                  <h3 className="experience-item__role">{item.title}</h3>
                  {item.subtitle && (
                    <p className="experience-item__subtitle">
                      {item.subtitle}
                    </p>
                  )}
                </div>

                <p className="experience-item__description">
                  {item.description}
                </p>

                {item.links && item.links.length > 0 && (
                  <div className="experience-item__links">
                    {item.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}

                {item.skills && item.skills.length > 0 && (
                  <ul className="experience-item__skills">
                    {item.skills.map((skill, idx) => (
                      <li key={idx}>{skill}</li>
                    ))}
                  </ul>
                )}  
              </div> 
            </div>
          </li>
        ))}

      </ul>

      {/* EDUCATION */}
      <div className="education-block">
        <h3 className="education-title"></h3>

        <ul className="education-list">
          {education.map((ed, i) => (
            <li key={i} className="education-item">
              <span className="education-item__period">{ed.period}</span>
              <div className="education-item__content">
                <p className="education-item__school">{ed.school}</p>
                <p className="education-item__degree">{ed.degree}</p>
                {ed.description && (
                  <p className="education-item__description">
                    {ed.description}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="resume-block">
  <a
    className="resume-link"
    href={import.meta.env.BASE_URL + "Boonthai Yan - Resume.pdf"} // ← use your actual filename
    target="_blank"
    rel="noreferrer"
  >
    View full résumé →
  </a>
</div>
      </div>
      
    </div>
  );
};

export default Experience;
