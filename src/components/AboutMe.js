import React from "react";
import BadgeIcon from '@mui/icons-material/Badge';
import { Badge } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';

function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-me-heading">
        <p>Get to Know More</p>
        <h1>About Me</h1>
      </div>
      <div className="about-me-body">
        <img></img>
        <div className="about-text">
          <div className="about-me-labels">
            <div className="about-me-label1">
                <BadgeIcon></BadgeIcon>
                <h1>Experience</h1>
                <p>2+ years</p>
                <p>FrontEnd Development</p>
            </div>
            <div className="about-me-label2">
                <SchoolIcon></SchoolIcon>
                <h1>Education</h1>
                <p>Computer Information Technology</p>
                <p>BCIT, Burnaby</p>
            </div>
          </div>
          <div className="about-me-para">
            <p>           Proficient in writing code in Python, JavaScript, MySQL and shell and 
           demostrated experience of working with cloud computing and containerization
           technologies, automation and developing CI/CD pipelines. </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
