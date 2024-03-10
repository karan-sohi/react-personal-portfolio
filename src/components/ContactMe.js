import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function ContactMe() {
  return (
    <div className="contact-me">
      <div className="contact-me-heading">
        <p>Get In Touch</p>
        <h1>Contact Me</h1>
      </div>
      <div className="contact-me-content">
        <div className="contact-mail">
          <MailIcon className="contact-icon"></MailIcon>
          <a href="mailto:<EMAIL>">deepkaran2490@gmail.com</a>
        </div>
        <div className="contact-linkedin">
          <LinkedInIcon className="contact-icon"></LinkedInIcon>
          <a href="https://www.linkedin.com/in/deepkaran-singh-0001/">
            Karandeep Singh
          </a>
        </div>
        <div className="contact-github">
          <GitHubIcon className="contact-icon"></GitHubIcon>
          <a href="https://github.com/deepkaran2490">Karan</a>
        </div>
      </div>
      <div className="bottom-nav">
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
      <div className="footer">
        <p>Copyright © 2024 Karandeep Singh. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default ContactMe;
