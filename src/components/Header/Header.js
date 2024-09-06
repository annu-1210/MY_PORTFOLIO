import React, { useState } from "react";
import "./Header.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

function Header() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <section className="head-wrapper">
      <div className="head-container">
        <div className="header-left">
          <div className="bullet-box"></div>
          <span className="name-span">Annu Poonia</span>
          <span className="desc-span">
            <span className="slash">/</span> FRONT-END DEVELOPER</span>
        </div>
        <div className="header-right">
          {isOpened && (
            <div className="menu-icon">
              <RxCross1
                onClick={() => {
                  setIsOpened(false);
                }}
                size={50}
                style={{ color: "white" }}
              />
            </div>
          )}
          <div className={isOpened ? "open" : "navigation-links"}>
            {isOpened && (
              <div className="menuOpened-icon">
                <RxCross1
                  onClick={() => {
                    setIsOpened(false);
                  }}
                  size={50}
                />
              </div>
            )}
            <a href="#about" className="header-links">
              ABOUT ME
            </a>
            <a href="#projects" className="header-links">
              PROJECTS
            </a>
            <a href="#contact" className="header-links">
              CONTACT
            </a>
            <a
              href="/MY_RESUME.pdf"
              className="header-links"
              download="MY_RESUME.pdf"
            >
              RESUME
            </a>
          </div>
        </div>
        {!isOpened && (
          <div className="menu-icon">
            <RxHamburgerMenu
              onClick={() => {
                setIsOpened(true);
              }}
              size={40}
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default Header;
