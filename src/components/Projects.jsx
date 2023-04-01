import React, { useState } from "react";
import ProjectsSlider from "./ProjectsSlider";
import asyncedu from "../assets/asyncedu.png";
import allinai from "../assets/allinai.png";
import portfolioimage from "../assets/portfolioimage.png";
import readit from "../assets/readit.png";
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
    title: "Readit",
    description:
      "This is a forum-style single page application where users can post and remove questions, as well as comment on other users' questions and comments.",
    image: readit,
    repo: "https://github.com/andrewjulian/phase-4-project",
    tags: ["React", "Ruby on Rails"],
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
      "Utilize React and Node.js to create an application for tracking habits and viewing their progress.",
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

const newtechprojects = newtech.map((project, id) => {
  return <NewTechCard key={id} project={project} />;
});

const Projects = () => {
  const [current, setCurrent] = useState(0);

  const length = projects.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div id="projects" className="my-10">
      <h1 className="text-center text-[#0097b2] font-extrabold text-[8vw] md:text-[5vw] ">
        Projects
      </h1>
      <div className="px-10">
        <ProjectsSlider
          projects={projects}
          current={current}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
        />
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
