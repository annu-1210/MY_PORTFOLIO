import React, {useEffect}from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import "./Card.css";
import AOS from "aos";
import 'aos/dist/aos.css' 

function Card() {

  useEffect(()=>{
        AOS.init({duration: 2000})
          },[])
  return (
    <section className="card-wrapper">
      <div className="card-container" data-aos='fade-up' hu>
        <div className="card-left" data-aos="flip-right">
          <div className="img-box">
          </div>
          <div className="name-box">
            <span>Annu</span>
            <span>Poonia</span>
          </div>
          <div className="divider"></div>
          <div className="card-left-links">
            <a
              className="right-link1"
              download="MY_RESUME.pdf"
              href="/MY_RESUME.pdf"
            >
              RESUME
            </a>

            <a href="/projects" className="right-link2">
              PROJECTS
            </a>
          </div>
          <div className="description-box">
            <span>FRONT-END DEVELOPER</span>
          </div>
          <div className="card-links">
            <a href="https://www.linkedin.com/in/annu-poonia-b761222b7/">
              <FaLinkedinIn size={25} />
            </a>
            <a href="https://github.com/annu-1210">
              <FaGithub size={25} />
            </a>
            <a href="https://www.instagram.com/poonia_1210/">
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

            <a href="/projects" className="right-link2">
              PROJECTS
            </a>
          </div>
          <span className="my-intro">
            I am a dedicated individual with experience in React.js, HTML, CSS,
            and JavaScript. I am committed to leveraging my skills to develop
            innovative projects that contribute to user-friendly and efficient
            solutions. I am seeking opportunities to enhance my skills and
            contribute effectively to innovative projects.
          </span>
        </div>
      </div>
    </section>
  );
}

export default Card;
