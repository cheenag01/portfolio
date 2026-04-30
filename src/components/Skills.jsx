import React from 'react';
import './Skills.css';

const Skills = () => {
  const categories = [
    {
      title: "Programming & Tools",
      icon: "💻",
      skills: ["Python (Pandas, NLTK)", "SQL", "Excel", "Google Colab"]
    },
    {
      title: "Data & Visualization",
      icon: "📊",
      skills: ["Power BI", "Exploratory Data Analysis (EDA)", "Data Cleaning"]
    },
    {
      title: "Machine Learning",
      icon: "🤖",
      skills: ["K-Means Clustering", "Predictive Modeling", "NLP"]
    },
    {
      title: "Finance & Domain",
      icon: "📈",
      skills: ["Technical Analysis", "Derivatives", "Option Greeks", "Volatility Strategies"]
    }
  ];

  const certifications = [
    { title: "Data Analyst Certification", issuer: "4 Achievers" },
    { title: "Certified Pro Trader", issuer: "ICFM Institute" },
    { title: "NISM Series VIII", issuer: "Equity Derivatives" }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title reveal">Skills & Certifications</h2>

        <div className="skills-grid">
          {categories.map((category, index) => (
            <div className="skill-card reveal" data-delay={index * 120} key={index}>
              <div className="skill-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <ul>
                {category.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
              <div className="card-shimmer"></div>
            </div>
          ))}
        </div>

        <div className="certifications reveal" data-delay="150">
          <h3 className="cert-title">Licenses & Certifications</h3>
          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <div className="cert-card reveal-scale" data-delay={200 + index * 100} key={index}>
                <div className="cert-icon">📜</div>
                <div className="cert-info">
                  <h4>{cert.title}</h4>
                  <p>{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
