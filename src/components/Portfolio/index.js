import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'social-network-api',
      description: 'NoSQL',
      link: "https://drive.google.com/file/d/1dgeSYZAumzgV_4neC4EfgloSDrdrEgIy/view",
      repo: "https://github.com/tubataryn/social-network-api"
    },
    {
      name: 'budget-tracker',
      description: 'PWA',
      link: "https://budget-tracker-assignment.herokuapp.com/",
      repo: "https://github.com/tubataryn/budget-tracker"
    },
    {
      name: 'run-buddy',
      description: 'HTML/CSS',
      link: "https://tubataryn.github.io/run-buddy/",
      repo: "https://github.com/tubataryn/run-buddy"
    },
    {
      name: 'find-my-munchies',
      description: 'HTML/CSS/JavaScript',
      link: "https://alirueter.github.io/find-my-munchies/",
      repo: "https://github.com/alirueter/find-my-munchies"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
