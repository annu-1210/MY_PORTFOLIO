import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section className="s-wrapper">
      <div className="s-container">
        <div className="top-head">
          <div className="bullet-box"></div>
          <span>KEY SKILLS</span>
        </div>
        <div className="professional">
          <div className="pro-head">
            <div className="skill-box"></div>
            <span>Professional Skills</span>
          </div>
          <div className="pro-skills">
            <div className="skills-logo">
              <span>HTML</span>
              <img src="./HTML_icon.svg" alt="logo" width={80} />
            </div>
            <div className="skills-logo">
              <span>CSS</span>
              <img src="./CSS-icon.svg" alt="logo" width={70} />
            </div>
            <div className="skills-logo">
              <span>JavaScript</span>
              <img src="./JAVASCRIPT-icon.svg" alt="logo" width={90} />
            </div>
            <div className="skills-logo">
              <span>React</span>
              <img src="./REACT-icon.svg" alt="logo" width={90} />
            </div>
            <div className="skills-logo">
              <span>Git</span>
              <img src="./git-logo.png" alt="logo" width={90} />
            </div>
          </div>
        </div>
        <div className="personal">
          <div className="pre-head">
            <div className="skill-box"></div>
            <span>Personal Skills</span>
          </div>
          <div className="per-skills">
            <div className="skills-div">
              <div className="per-skill-box"></div>
              <span>Communication</span>
            </div>
            <div className="skills-div">
              <div className="per-skill-box"></div>
              <span>Problem Solving</span>
            </div>
            <div className="skills-div">
              <div className="per-skill-box"></div>
              <span>Team Work</span>
            </div>
            <div className="skills-div">
              <div className="per-skill-box"></div>
              <span>Time Management</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
