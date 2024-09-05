import React from "react";
import "./About.css";
import Card from "../Card/Card";
import Skills from "../Skills/Skills";

const portfolioProps = {
  firstname: "Annu",
  lastname: "Poonia",
  title: "FRONT-END DEVELOPER",
  email: "annupoonia086@gmail.com",
  gitHub: "annu-1210",
  instagram: "poonia_1210 ",
  linkedIn: "annu-poonia-b761222b7/",
  twitter: "poonia_1210",
}

function About() {
  return (
    <section className="a-wrapper" id="about">
      <div className="about-container">
        <div className="about-left"></div>
        <div className="about-right"></div>
      </div>
      <div className="about-card">
        <Card {...portfolioProps} />
      </div>
      <Skills />
    </section>
  );
}

export default About;
