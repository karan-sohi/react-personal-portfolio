import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const redirectLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/karandeep-singh-3770501b2/",
      "_blank"
    );
  };

  const redirectGithub = () => {
    window.open("https://github.com/karan-sohi", "_blank");
  };

  const viewResume = () => {
    window.open("./Karan.pdf", "_blank");
  };

  return (
    <section id="home-container">
      <div id="main-header-desktop">
        <h1>Karan.dev</h1>
        <ul id="title-items">
          <li className="title-item">
            <a href="#about-me">About</a>
          </li>
          <li className="title-item">
            <a href="#my-projects">Projects</a>
          </li>
          <li className="title-item">
            <a href="#contact-me">Contact</a>
          </li>
        </ul>
      </div>
      <nav id="main-header-mobile">
        <h1>Karan.dev</h1>
        <div onClick={toggleNavbar} className="hamburger-menu">
          {!isNavOpen && <MenuIcon />}
          {isNavOpen && <CloseIcon />}
          {isNavOpen && (
            <div className="menu-links">
              <li className="menu-item">
                <a href="#about-me">About</a>
              </li>
              <li className="menu-item">
                <a href="#my-projects">Projects</a>
              </li>
              <li className="menu-item">
                <a href="#contact-me">Contact</a>
              </li>
            </div>
          )}
        </div>
      </nav>
      <div id="home-body">
        <div id="my-img">
          <img src="karan.jpg"></img>
        </div>
        <div id="intro-text">
          <p>Hello, I'm</p>
          <p id="myname-home">Karandeep Singh</p>
          <p id="mypos-home">Software Developer</p>
          <div className="contact-buttons">
            <div className="contact-button1">
              <a src="./Karan.pdf">
                <button onClick={viewResume}>Download CV</button>
              </a>
            </div>
            <div className="contact-button2">
              <a href="#contact-me">
                <button>Contact Info</button>
              </a>
            </div>
          </div>
          <div>
            <LinkedInIcon
              onClick={redirectLinkedIn}
              className="social-media-buttons"
            />
            <GitHubIcon
              onClick={redirectGithub}
              className="social-media-buttons"
            ></GitHubIcon>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
