import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title reveal">About Me</h2>
        <div className="about-content">
          <div className="about-text reveal" data-delay="100">
            <p>
              I am a Data Analyst with a robust foundation in Computer Science, Artificial Intelligence, and Machine Learning.
              With hands-on experience in data cleaning, exploratory data analysis, and building predictive models,
              I transform raw data into actionable insights.
            </p>
            <p>
              My recent foray into the financial markets as a Certified Pro Trader has equipped me with a unique perspective
              on technical and derivatives analysis, allowing me to bridge the gap between complex technical builds and
              high-stakes business requirements.
            </p>
            <div className="education-highlight reveal" data-delay="300">
              <div className="edu-icon">🎓</div>
              <div>
                <h4>B.Tech in CSE (AIML)</h4>
                <p>GLA University | 2020 - 2024</p>
              </div>
            </div>
          </div>
          <div className="about-image reveal-right" data-delay="200">
            <div className="image-wrapper">
              <div className="placeholder-image">CG</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
