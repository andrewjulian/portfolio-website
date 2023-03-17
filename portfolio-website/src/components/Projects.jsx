import React from "react";
import ProjectCard from "./ProjectCard";
import asyncedu from "../assets/asyncedu.png";
import allinai from "../assets/allinai.png";

const projects = [
  {
    title: "AsyncEdu",
    description:
      "AsyncEdu is a chat-based application that can be used for remote or asynchronous instructional support, communication, and collaboration between teachers and students.",
    image: asyncedu,
    repo: "https://github.com/andrewjulian/phase-5-project",
    tags: ["React", "Rails", "PostGreSQL"],
  },
  {
    title: "All In AI Website",
    description:
      "This website was created for All in AI, a non-profit organization that aims to increase diversity in the field of AI and provide access to AI education for underrepresented groups.",
    image: allinai,
    repo: "https://github.com/andrewjulian/all-in-ai-website-v3",
    tags: ["HTML5", "CSS3", "Bootstrap"],
  },
];

const projectCards = projects.map((project) => {
  return <ProjectCard project={project} />;
});

const Projects = () => {
  return (
    <div className="flex flex-col items-center md:flex-row p-10">
      {projectCards}
    </div>
  );
};

export default Projects;
