import React, { useEffect } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import "./Card.css";
import AOS from "aos";
import 'aos/dist/aos.css'

const description = " I am a dedicated individual with experience in React.js, HTML, CSS, " +
  "and JavaScript. I am committed to leveraging my skills to develop " +
  "innovative projects that contribute to user-friendly and efficient " +
  "solutions. I am seeking opportunities to enhance my skills and " +
  "contribute effectively to innovative projects.";

function Card(props) {
  const { gitHub, instagram, linkedIn, firstname, lastname, title } = props;

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <section className="card-wrapper">
      <div className="card-container" data-aos='fade-up' hu>
        <div className="card-left" data-aos="flip-right">
          <div className="img-box">
          </div>
          <div className="name-box">
            <span>{firstname}</span>
            <span>{lastname}</span>
          </div>
          <div className="divider"></div>
          <div className="card-left-links">
            <a
              className="right-link1"
              download="MY_RESUME.pdf"
              href="/Annu_Poonia_Resume.pdf"
            >
              RESUME
            </a>

            <a href="#projects" className="right-link2">
              PROJECTS
            </a>
          </div>
          <div className="description-box">
            <span>{title}</span>
          </div>
          <div className="card-links">
            <a href={`https://www.linkedin.com/in/${linkedIn}`} target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={25} />
            </a>
            <a href={`https://github.com/${gitHub}`} target="_blank" rel="noopener noreferrer">
              <FaGithub size={25} />
            </a>
            <a href={`https://www.instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer">
              <FaInstagram size={25} />
            </a>
          </div>
        </div>
        <div className="card-right" data-aos='fade-right'>
          <span className="right-span1">Hello</span>
          <span className="right-span2">Here's who I am and what I do</span>
          <div className="card-right-links">
            <a
              className="right-link1"
              download="MY_RESUME.pdf"
              href="/MY_RESUME.pdf"
            >
              RESUME
            </a>

            <a href="#projects" className="right-link2">
              PROJECTS
            </a>
          </div>
          <span className="my-intro">
            {description}
          </span>
        </div>
      </div>
    </section>
  );
}

export default Card;
