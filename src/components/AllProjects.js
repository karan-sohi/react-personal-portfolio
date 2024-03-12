import React from "react";
import { ALL_PROJECTS_DATA } from "../all-projects-data";
import Project from "./Project";

function AllProjects() {
  return (
    <div className="all-projects">
        <h1>All Projects</h1>
        <div className="project-items">
      {ALL_PROJECTS_DATA.map((project) => {
        return <Project key={project.id} projectData={project}></Project>;
      })}
        </div>
    </div>
  );
}

export default AllProjects;
