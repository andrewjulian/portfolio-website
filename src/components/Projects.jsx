import React, { useState } from "react";
import ProjectsSlider from "./ProjectsSlider";
import asyncedu from "../assets/asyncedu.png";
import allinai from "../assets/allinai.png";
import digital from "../assets/digital.png";
import readit from "../assets/readit.png";
import NewTechCard from "./NewTechCard";

const projects = [
  {
    title: "AsyncEdu",
    description:
      "AsyncEdu is a full stack chat-based application that can be used for asynchronous instructional support, communication, and collaboration between teachers and students.",
    image: asyncedu,
    repo: "https://github.com/andrewjulian/phase-5-project",
    tags: ["React", "Ruby on Rails", "PostGreSQL"],
  },
  {
    title: "All In AI Website",
    description:
      "This website was created for All in AI, a non-profit organization that aims to increase diversity in the field of AI and provide access to AI education for underrepresented groups.",
    image: allinai,
    repo: "https://github.com/andrewjulian/all-in-ai-website-v3",
    tags: ["Javascript", "Bootstrap"],
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
    title: "Digital: Thoughtful Planning",
    description:
      "This web-application utilizes the MERN (MongoDB, Express, React, NodeJS) stack in order to create a digital version of the Ugmonk Analog Task System.",
    image: digital,
    repo: "https://github.com/andrewjulian/mern-ugmonk-digital",
    tags: ["MERN", "RWD "],
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
    tech: "Digital: Thoughtful Planning",
    description:
      "Utilize React and Node.js to create an digital version of the Ugmonk Analog Task Management System.",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    tech: "Machine Learning",
    description:
      "Create Content regarding Machine Learning and AI for the All In AI non-profit organization.",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
];

const newtechprojects = newtech.map((project, id) => {
  return <NewTechCard key={id} project={project} />;
});

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const [show, setShow] = useState(true);

  const length = projects.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    setShow(false);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    setShow(false);
  };

  return (
    <div id="projects" className="my-10">
      <h1 className="text-center text-[#0097b2] font-extrabold text-[8vw] md:text-[5vw] ">
        Projects
      </h1>
      <div className="px-10">
        <ProjectsSlider
          show={show}
          setShow={setShow}
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
