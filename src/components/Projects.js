import React from 'react';
import FadeInSection from './FadeInSection';
import '../styles/Projects.css';

const projects = [
  {
    title: "Kain Na!",
    description: [
      "Developed a full-stack Filipino recipe blog using React, Firebase authentication and storage, and search filtering.",
      "Implemented user authentication with sign-up, email verification, and account management using Firebase.",
      "Designed a responsive UI with recipe submission, image uploads, and search functionality."
    ],
    techStack: "React, JavaScript, HTML, CSS, Firebase",
    date: "July 2024 – Present",
    githubLink: "https://github.com/dariusmolina/kain-na",
  },
  {
    title: "Console-Based Blackjack",
    description: [
      "Developed a Blackjack game using C# and .NET, implementing gameplay and user input handling.",
      "Utilized advanced null-checking techniques to ensure robust error handling and smooth user interaction within a console environment."
    ],
    techStack: "C#, .NET, Git",
    date: "Aug. 2024 – Present",
    githubLink: "https://github.com/dariusmolina/blackjack",
  },
  {
    title: "Gitlet",
    description: [
      "Developed a simple version control system in Java that mimics some of the basic features of Git.",
      "Used Java standard library to implement init, add, commit, log, branch, and checkout functions.",
      "Serialized data in .gitlet file to store old versions of files and commit tree using Serializable interface."
    ],
    techStack: "Java, Integration Testing",
    date: null,
    githubLink: null,
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <FadeInSection>
        <h2 className="projects-heading">Projects</h2>
      </FadeInSection>
      {projects.map((project, index) => (
        <FadeInSection key={index}>
          <div className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-date">{project.date}</p>
            <ul className="project-description">
              {project.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
            <p className="project-techStack"><strong>Tech Stack:</strong> {project.techStack}</p>
            {project.githubLink ? (
              <a href={project.githubLink} className="project-link">View on GitHub</a>
            ) : (
              <p className="no-link"></p>
            )}
          </div>
        </FadeInSection>
      ))}
    </div>
  );
};

export default Projects;
