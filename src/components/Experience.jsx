import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title reveal">Experience & Education</h2>

        <div className="timeline-container">
          <div className="timeline-column">
            <h3 className="timeline-title reveal" data-delay="100">Experience</h3>
            <div className="timeline-item reveal-left" data-delay="200">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">Sep 2025 - Apr 2026</span>
                <h4>Data Analyst Intern (with ML)</h4>
                <p className="timeline-company">Kundlichat | Noida</p>
                <ul>
                  <li>Improved user engagement by ~18% and reduced churn by ~12% through user behavior analysis using Python, SQL, and Power BI.</li>
                  <li>Analyzed user-generated text data using Python (NLTK, TextBlob) for preprocessing and polarity-based classification to extract meaningful feedback patterns.</li>
                  <li>Applied text processing techniques (tokenization, stopword removal, frequency analysis) to support data-driven product improvements.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="timeline-column">
            <h3 className="timeline-title reveal" data-delay="100">Education</h3>
            <div className="timeline-item reveal-right" data-delay="250">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">Sep 2020 - May 2024</span>
                <h4>Bachelor of Technology in CSE(AIML)</h4>
                <p className="timeline-company">GLA University</p>
                <p className="timeline-score">Grade: 7.6</p>
                <p className="timeline-desc">Winner in GLA Got Talent | Runner-up in research paper presentation | Volunteered at Music Committee.</p>
              </div>
            </div>

            <div className="timeline-item reveal-right" data-delay="400">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">Apr 2018 - Mar 2020</span>
                <h4>Intermediate (PCM)</h4>
                <p className="timeline-company">Kanha Makhan Public School</p>
                <p className="timeline-score">Grade: 76.2%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
