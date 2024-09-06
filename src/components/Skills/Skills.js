import React, { useEffect } from "react";
import "./Skills.css";
import AOS from "aos";
import 'aos/dist/aos.css'


const personalSkillset = ["Communication", "Problem Solving", "Team Work", "Time Management"];

function Skills() {

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

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
            <div className="skills-logo" data-aos='fade-up' >
              <span>HTML</span>
              <img src="./HTML_icon.svg" alt="logo" width={80} />
            </div>
            <div className="skills-logo" data-aos='fade-up' >
              <span>CSS</span>
              <img src="./CSS-icon.svg" alt="logo" width={70} />
            </div>
            <div className="skills-logo" data-aos='fade-up' >
              <span>JavaScript</span>
              <img src="./JAVASCRIPT-icon.svg" alt="logo" width={90} />
            </div>
            <div className="skills-logo" data-aos='fade-up' >
              <span>React</span>
              <img src="./REACT-icon.svg" alt="logo" width={90} />
            </div>
            <div className="skills-logo" data-aos='fade-up' >
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
            {personalSkillset.map((skill) => {
              return (
                <div className="skills-div" data-aos='fade-right' key={skill}>
                  <div className="per-skill-box"></div>
                  <span>{skill}</span>
                </div>)
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
