import React from 'react';
import Project from './Project';
import { PROJECTS_DATA } from '../projects-data';

function Projects() {
  return (
    <section id="my-projects">
        <div className="my-projects-heading">
            <p>Browse My Recent</p>
            <h1>Projects</h1>
        </div>
        <div className="my-projects-body">
        {PROJECTS_DATA.map(project => {
            return <Project key={project.id} projectData = {project}></Project>
        })}
        </div>
    </section>
  )
}

export default Projects