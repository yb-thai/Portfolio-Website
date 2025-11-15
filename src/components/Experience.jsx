import React from "react";

const Experience = () => {
  const experience = [
    {
      period: "2022 — 2025",
      title: "Cloud Engineer · Amazon Web Services",
      subtitle:"",
      description:
        "Provided technical support for enterprise customers operating large-scale EKS, ECS and AWS environments. Troubleshot Kubernetes, networking, IAM, and compute issues across distributed systems and helped customers implement resilient, scalable cloud architectures. Improved CI/CD processes, reduced deployment friction, and guided teams toward AWS best practices for containerized workloads.",
      links: [
        // { label: "Case Study", href: "#" },
      ],
      skills:  [
  "AWS (EKS, ECS, EC2, VPC, IAM)",
  "Kubernetes",
  "Terraform",
  "Docker","Linux", "Cloud Networking",
  "CI/CD (GitHub Actions, GitLab, Jenkins)",
  "Infrastructure as Code",
],
    },
    {
      period: "2021 — 2022",
      title: "Software Engineer · IpserLab",
      subtitle: "Backend / Full-Stack Engineer",
      description:
        "Worked closely with the engineering team to build and modernize server-side applications, contributing to both backend and frontend development. Focused on improving API design, enhancing system performance, and supporting major migration initiatives across the platform.",
      links: [
        // { label: "Project Link", href: "#" },
      ],
      skills: [
    "Node.js",
    "Java",
    "REST API Design",
    "Data Migration",
    "SQL",
    "JavaScript",
    "Backend Development",
    "System Integration",
  ],
    },
  ];

  const education = [
    {
      period: "2019 — 2021",
      school: "Seattle Pacific University",
      degree: "Bachelor's Degree · Computer Science",
      description: "Focused on software development, data structures, algorithms, and distributed systems. Contributed to team-based engineering projects and explored cloud technologies.",
    },
    {
      period: "2016 — 2018",
      school: "Edmonds College",
      degree: "Associate of Science · Computer Science",
      description: "Completed foundational coursework in programming, math, and computer science. Built early projects that sparked my interest in cloud engineering.",
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

                <p className="education-item__description">
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
    View full résumé <span className="resume-link__arrow">↗</span>
  </a>
</div>
      </div>
      
    </div>
  );
};

export default Experience;
