import React, { useEffect } from "react";
import "./Skills.css";
import AOS from "aos";
import 'aos/dist/aos.css';
import skillSet from "../../assets/mySkills";

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
            {skillSet.map((skills) => {
              return (
                <div className="skills-box" data-aos='fade-up' key={skills.id} >
                  <img src={skills.image} alt="logo" width={50} />
                  <span>{skills.name}</span>
                </div>)
            })}
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
