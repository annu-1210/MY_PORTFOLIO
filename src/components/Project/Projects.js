import React, { useEffect } from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import { BsRocketTakeoffFill } from "react-icons/bs";
import { ProjectDetails } from "./ProjectDetails";
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
          {
            ProjectDetails.map((content) => {
              return (
                <div className="project-box" key={content.id}
                >
                  <div className="box-leftSection">
                    <div className="project-name">
                      <span>{content.name}</span>
                      <div className="project-links">
                        <a
                          href={content.GithubLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaGithub size={20} />
                        </a>
                        <a
                          href={content.VercelLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <BsRocketTakeoffFill size={20} />
                        </a>
                      </div>
                    </div>
                    <div className="project-description">
                      {content.description}
                    </div>
                  </div>
                </div>
              )
            })
          }


        </div>
      </div>
    </section>
  );
}

export default Projects;
