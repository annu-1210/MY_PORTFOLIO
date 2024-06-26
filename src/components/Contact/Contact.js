import React from "react";
import "./Contact.css";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { PiWhatsappLogoBold } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

function Contact() {
  return (
    <section className="contact-wrapper">
      <div className="contact-container">
        <div className="contact-left">
          <img src="./contact-img.png" alt="logo" width={350} height={400} />
        </div>

        <div className="contact-right">
          <div className="contact-head">
            <span>LET's CONNECT</span>
          </div>
          <div className="contact-body">
            <div className="contact-body-left">
              <div className="left-links">
                <div className="left-links-head">
                  <FaLinkedinIn />
                  <span>LinkedIn </span>
                </div>
                <div className="links-text">
                  <a
                    href="https://www.linkedin.com/in/annu-poonia-b761222b7/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    message me
                  </a>
                  <IoIosArrowRoundForward />
                </div>
              </div>
              <div className="divider-box"></div>

              <div className="left-links">
                <div className="left-links-head">
                  <PiWhatsappLogoBold />
                  <span>WhatsApp</span>
                </div>
                <div className="links-text">
                  <a
                    href="https://wa.me/9416928102"
                    target="_blank"
                    rel="noreferrer"
                  >
                    text me
                  </a>
                  <IoIosArrowRoundForward />
                </div>
              </div>
              <div className="divider-box"></div>
              <div className="call-div">
                <a href="tel:9416928102" className="call-button">
                  CALL NOW
                </a>
              </div>
            </div>

            <div className="contact-body-right">
              <div className="right-body-mail">
                <span>E-Mail</span>
                <a
                  href="mailto:annupoonia086@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  annupoonia086@gmail.com
                </a>
              </div>
              <div className="right-location">
                <span className="location-head">Location</span>
                <div className="location-spans">
                  <span>Hisar,</span>
                  <span>Haryana</span>
                </div>
              </div>
              <div className="call-div-2">
                <a href="tel:9416928102" className="call-button">
                  CALL NOW
                </a>
              </div>
              <div className="right-box-links">
                <a href="https://x.com/poonia_annu12">
                  <BsTwitterX size={25} />
                </a>
                <a href="https://github.com/annu-1210">
                  <FaGithub size={25} />
                </a>
                <a href="https://www.instagram.com/poonia_1210/">
                  <FaInstagram size={25} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
