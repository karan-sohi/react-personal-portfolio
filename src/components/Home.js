import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Home() {
  return (
    <div className="home-container">
      <div id="main-header">
        <h1>Karan.dev</h1>
        <ul id="title-items">
          <li className="title-item">
            <a href="#about">About</a>
          </li>
          <li className="title-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="title-item">
            <a href="#contact">Contact</a>
          </li> 
        </ul>
      </div>
      <div id="home-body">
        <div id="intro-text">
          <p>Hello, I'm</p>
          <p id="myname-home">Karandeep Singh</p>
          <p id="mypos-home">Software Developer</p>
          <div className="contact-buttons">
            <button>Download CV</button>
            <button>Contact Info</button>
          </div>
          <div>
            <LinkedInIcon className="social-media-buttons"/>
            <GitHubIcon className="social-media-buttons"></GitHubIcon>
          </div>
        </div>  
        <div id="my-img">
        <img src="karan.jpg"></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
