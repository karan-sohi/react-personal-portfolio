import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function ContactMe() {
  const redirectEmail = () => {
    window.location.href = "mailto:<deepkaran2490@gmail.com>";
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
  return (
    <section id="contact-me">
      <div className="contact-me-heading">
        <p>Get In Touch</p>
        <h1>Contact Me</h1>
      </div>
      <div className="contact-me-content">
        <div className="contact-mail">
          <MailIcon onClick={redirectEmail} className="contact-icon"></MailIcon>
          <a href="mailto:<deepkaran2490@gmail.com>">Email</a>
        </div>
        <div className="contact-linkedin">
          <LinkedInIcon onClick={redirectLinkedIn} className="contact-icon"></LinkedInIcon>
          <a href="https://www.linkedin.com/in/karandeep-singh-3770501b2/" target="_blank">
            Karandeep
          </a>
        </div>
        <div className="contact-github">
          <GitHubIcon onclick={redirectGithub} className="contact-icon"></GitHubIcon>
          <a href="https://github.com/karan-sohi" target="_blank">karan-sohi</a>
        </div>
      </div>
      <div className="bottom-nav">
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
      <div className="footer">
        <p>Copyright © 2024 Karandeep Singh. All Rights Reserved.</p>
      </div>
    </section>
  );
}

export default ContactMe;
