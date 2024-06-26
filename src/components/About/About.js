import React from "react";
import "./About.css";
import Card from "../Card/Card";
import Skills from "../Skills/Skills";

function About() {
  return (
    <section className="a-wrapper" id="about">
      <div className="about-container">
        <div className="about-left"></div>
        <div className="about-right"></div>
      </div>
      <div className="about-card">
        <Card />
      </div>
      <Skills />
    </section>
  );
}

export default About;
