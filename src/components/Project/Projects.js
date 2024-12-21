import React, { useEffect } from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import { BsRocketTakeoffFill } from "react-icons/bs";
import AOS from "aos";
import 'aos/dist/aos.css'

function Projects() {

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <section className="projects-wrapper">
      <div className="projects-container" id="projects">
        <div className="project-head">
          <div className="bullet-box"></div>
          <span>PROJECTS</span>
        </div>
        <div className="Boxes">
          <div className="project-box"
          >
            <div className="box-leftSection">
              <div className="project-name">
                <span>Real-Estate Website</span>
                <div className="project-links">
                  <a
                    href="https://github.com/annu-1210/Real-Estate-Website/tree/primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href="https://react-project-git-primary-annu-poonias-projects.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsRocketTakeoffFill size={20} />
                  </a>
                </div>
              </div>
              <div className="project-description">
                The Real Estate Website is a comprehensive platform designed for
                users to browse and view property listings. The website offers a
                user-friendly interface with features such as property details
                and user authentication. It is designed to be fully responsive,
                ensuring an optimal viewing experience across various devices,
                including desktops, tablets, and smartphones.
              </div>
            </div>
          </div>
          <div className="project-box"
          >
            <div className="box-leftSection">
              <div className="project-name">
                <span>Feedback Feature</span>
                <div className="project-links">
                  <a
                    href="https://github.com/annu-1210/Feedback-Feature"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a href="/projects">
                    <BsRocketTakeoffFill size={20} />
                  </a>
                </div>
              </div>
              <div className="project-description">
                The Feedback Feature Website is a platform designed to
                facilitate the collection of user feedback, including reporting
                issues, making suggestions, contacting support, and providing
                general feedback. The website caters to both logged-in and
                non-logged-in users, offering a seamless and inclusive
                experience for all visitors. The website is built to be
                responsive, ensuring accessibility across various devices.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
