import React from "react";
import ProjectCard from "./ProjectCard";
import asyncedu from "../assets/asyncedu.png";
import allinai from "../assets/allinai.png";
import portfolioimage from "../assets/portfolioimage.png";
import NewTechCard from "./NewTechCard";

const projects = [
  {
    title: "AsyncEdu",
    description:
      "AsyncEdu is a full stack chat-based application that can be used for asynchronous instructional support, communication, and collaboration between teachers and students.",
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
  {
    title: "Portfolio Website",
    description:
      "This website shows growth in design and development using a different technology stack compared to the other websites created in the past.",
    image: portfolioimage,
    repo: "https://github.com/andrewjulian/portfolio-website",
    tags: ["React", "TailwindCSS", "Vite"],
  },
];

const newtech = [
  {
    tech: "OpenAI API Integration",
    description:
      "Use OpenAI API to score and provide feedback on practice AP exam questions.",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    tech: "Habit Tracker",
    description:
      "Utilize React and Node.js to create a habit tracker that allows users to track their habits and view their progress.",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    tech: "Machine Learning",
    description: "Utilize Python to create a machine learning model.",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
];

const projectCards = projects.map((project) => {
  return <ProjectCard project={project} />;
});

const newtechprojects = newtech.map((project) => {
  return <NewTechCard project={project} />;
});

const Projects = () => {
  return (
    <div className="my-5">
      <h1 className="text-center text-[#0097b2] font-extrabold text-[6vw] sm:text-[5vw] my-3">
        Projects
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center px-10">
        {projectCards}
      </div>
      <h5 className=" mb-2 text-center  sm:text-center text-[#0097b2] font-extrabold text-[4vw] sm:text-[2vw] mt-4">
        In the Works...
      </h5>
      <div className="flex flex-col items-center justify-center">
        {newtechprojects}
      </div>
    </div>
  );
};

export default Projects;
