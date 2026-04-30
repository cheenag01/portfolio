import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Zomato Data Analysis",
      description: "Analyzed restaurant data to uncover pricing and rating trends, optimizing strategies for market positioning.",
      tech: ["Python", "SQL", "Power BI"],
      link: "https://github.com/cheenag01"
    },
    {
      title: "Google Search Analysis",
      description: "Evaluated search query patterns to understand user intent and seasonal search behaviors.",
      tech: ["Python", "Pandas", "EDA"],
      link: "https://github.com/cheenag01"
    },
    {
      title: "Customer Segmentation & Demand Forecasting",
      description: "Applied K-Means clustering on 8K+ users, resulting in a ~15% increase in engagement and optimized resource planning.",
      tech: ["Python", "Power BI"],
      link: "https://github.com/cheenag01"
    },
    {
      title: "Chat Demand Analysis",
      description: "Analyzed daily and hourly usage patterns, provided insights that reduced average wait time by ~10–15%.",
      tech: ["Python", "Excel"],
      link: "https://github.com/cheenag01"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title reveal">Projects Portfolio</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card reveal" data-delay={index * 120} key={index}>
              <div className="project-header">
                <div className="folder-icon">📁</div>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noreferrer" aria-label="GitHub Link">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                </div>
              </div>
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </div>
              <div className="project-footer">
                <ul className="project-tech-list">
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
