import React from "react";

function Project({ projectData }) {
  return (
    <div className="project">
      <img src='projectpic.avif'></img>
      <h1>{projectData.name}</h1>
      <div className="project-buttons">
        <button>GitHub</button>
        <button>Live Demo</button>
      </div>
    </div>
  );
}

export default Project;
