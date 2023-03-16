import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "AsyncEdu",
    description: "This is a description",
    image: "../assets/navbarcode.png",
    repo: "https://github.com/andrewjulian/phase-5-project",
    tags: ["React", "Rails", "PostGreSQL"],
  },
];

const projectCards = projects.map((project) => {
  return <ProjectCard project={project} />;
});

const Projects = () => {
  return <div className="bg-red">{projectCards}</div>;
};

export default Projects;
