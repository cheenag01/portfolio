import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-name hero-anim" style={{ animationDelay: '0.2s' }}>
            Hi, I'm Cheena Garg <span className="wave-emoji">👋</span>
          </h1>
          <h2 className="hero-headline hero-anim" style={{ animationDelay: '0.5s' }}>
            Bridging Data, AI, and Finance to Drive Strategic Decisions.
          </h2>
          <p className="hero-desc hero-anim" style={{ animationDelay: '0.8s' }}>
            A Data Analyst and Computer Science (AIML) graduate specializing in data visualization,
            machine learning, and financial analytics to empower business growth. 🚀
          </p>
          <div className="hero-cta hero-anim" style={{ animationDelay: '1.1s' }}>
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>

          <div className="hero-socials hero-anim" style={{ animationDelay: '1.4s' }}>
            <a href="https://github.com/cheenag01" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-circle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="https://linkedin.com/in/gargcheena" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-circle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="mailto:cheenagargg@gmail.com" aria-label="Email" className="social-circle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
          </div>
        </div>

        <div className="hero-illustration hero-anim" style={{ animationDelay: '0.6s' }}>
          {/* Animated developer/analyst SVG illustration */}
          <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
            {/* Background decorative elements */}
            <circle cx="250" cy="400" rx="180" ry="20" fill="var(--accent-color)" opacity="0.08"/>
            
            {/* Floating clouds */}
            <g className="float-slow">
              <ellipse cx="120" cy="120" rx="40" ry="18" fill="var(--accent-color)" opacity="0.12"/>
              <ellipse cx="100" cy="115" rx="25" ry="14" fill="var(--accent-color)" opacity="0.1"/>
            </g>
            <g className="float-medium">
              <ellipse cx="400" cy="80" rx="35" ry="15" fill="var(--accent-color)" opacity="0.1"/>
              <ellipse cx="385" cy="76" rx="20" ry="12" fill="var(--accent-color)" opacity="0.08"/>
            </g>

            {/* Monitor/Screen */}
            <g className="float-subtle">
              <rect x="160" y="140" width="200" height="140" rx="8" fill="var(--bg-card)" stroke="var(--accent-color)" strokeWidth="3"/>
              <rect x="170" y="150" width="180" height="110" rx="4" fill="var(--accent-color)" opacity="0.06"/>
              
              {/* Code lines on screen */}
              <rect x="185" y="168" width="80" height="4" rx="2" fill="var(--accent-color)" opacity="0.5"/>
              <rect x="185" y="180" width="120" height="4" rx="2" fill="var(--accent-light)" opacity="0.4"/>
              <rect x="185" y="192" width="60" height="4" rx="2" fill="var(--accent-color)" opacity="0.3"/>
              <rect x="185" y="204" width="100" height="4" rx="2" fill="var(--accent-light)" opacity="0.5"/>
              <rect x="185" y="216" width="75" height="4" rx="2" fill="var(--accent-color)" opacity="0.35"/>
              <rect x="185" y="228" width="110" height="4" rx="2" fill="var(--accent-light)" opacity="0.45"/>

              {/* Chart on right side of screen */}
              <rect x="300" y="170" width="8" height="40" rx="2" fill="var(--accent-color)" opacity="0.6"/>
              <rect x="314" y="185" width="8" height="25" rx="2" fill="var(--accent-light)" opacity="0.5"/>
              <rect x="328" y="175" width="8" height="35" rx="2" fill="var(--accent-color)" opacity="0.7"/>
              <rect x="342" y="165" width="8" height="45" rx="2" fill="var(--accent-light)" opacity="0.55"/>

              {/* Monitor stand */}
              <rect x="240" y="280" width="40" height="12" rx="2" fill="var(--accent-color)" opacity="0.3"/>
              <rect x="250" y="278" width="20" height="8" fill="var(--accent-color)" opacity="0.25"/>
            </g>

            {/* Person sitting */}
            <g className="person-group">
              {/* Chair */}
              <rect x="215" y="370" width="90" height="8" rx="4" fill="var(--accent-color)" opacity="0.2"/>
              <rect x="230" y="378" width="4" height="30" fill="var(--accent-color)" opacity="0.15"/>
              <rect x="296" y="378" width="4" height="30" fill="var(--accent-color)" opacity="0.15"/>
              <ellipse cx="232" cy="408" rx="8" ry="4" fill="var(--accent-color)" opacity="0.15"/>
              <ellipse cx="298" cy="408" rx="8" ry="4" fill="var(--accent-color)" opacity="0.15"/>

              {/* Body - torso */}
              <path d="M240 340 Q260 320 280 340 L275 370 L245 370 Z" fill="var(--accent-color)" opacity="0.85"/>
              
              {/* Arms reaching to keyboard */}
              <path d="M245 340 Q220 355 200 350" stroke="var(--accent-color)" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.7"/>
              <path d="M275 340 Q300 355 320 350" stroke="var(--accent-color)" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.7"/>
              
              {/* Head */}
              <circle cx="260" cy="310" r="22" fill="#fdbcb4"/>
              
              {/* Hair */}
              <path d="M238 305 Q240 285 260 282 Q280 285 282 305" fill="var(--primary-color)" opacity="0.8"/>
              
              {/* Face features */}
              <circle cx="252" cy="312" r="2" fill="var(--primary-color)" opacity="0.6"/>
              <circle cx="268" cy="312" r="2" fill="var(--primary-color)" opacity="0.6"/>
              <path d="M255 320 Q260 324 265 320" stroke="var(--primary-color)" strokeWidth="1.5" fill="none" opacity="0.4"/>
            </g>

            {/* Floating data elements */}
            <g className="float-data">
              <circle cx="80" cy="220" r="18" fill="var(--accent-color)" opacity="0.12"/>
              <text x="80" y="225" textAnchor="middle" fill="var(--accent-color)" fontSize="14" fontWeight="bold" opacity="0.6">📊</text>
            </g>
            <g className="float-data-2">
              <circle cx="430" cy="180" r="16" fill="var(--accent-light)" opacity="0.12"/>
              <text x="430" y="185" textAnchor="middle" fill="var(--accent-light)" fontSize="12" fontWeight="bold" opacity="0.6">🤖</text>
            </g>
            <g className="float-data-3">
              <circle cx="400" cy="300" r="14" fill="var(--accent-color)" opacity="0.1"/>
              <text x="400" y="305" textAnchor="middle" fill="var(--accent-color)" fontSize="11" fontWeight="bold" opacity="0.5">📈</text>
            </g>

            {/* Decorative dots */}
            <circle cx="90" cy="350" r="3" fill="var(--accent-color)" opacity="0.3" className="pulse-dot"/>
            <circle cx="420" cy="120" r="3" fill="var(--accent-light)" opacity="0.3" className="pulse-dot-2"/>
            <circle cx="140" cy="400" r="2" fill="var(--accent-color)" opacity="0.2"/>
            <circle cx="380" cy="380" r="2" fill="var(--accent-light)" opacity="0.2"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
