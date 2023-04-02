import React from "react";
import ProjectCard from "./ProjectCard";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ProjectsSlider = ({ current, projects, prevSlide, nextSlide }) => {
  const length = projects.length;

  if (!Array.isArray(projects) || projects.length <= 0) {
    return null;
  }

  return (
    <section className="relative h-100vh flex justify-center items-center">
      <FaArrowAltCircleLeft
        className="absolute top-[44%]  xl:top-[50%] left-[5px]  z-10 cursor-pointer text-[#0097b2]  xl:text-white text-[1.5rem] xl:hover:text-[#0097b2]  "
        onClick={prevSlide}
      />
      <FaArrowAltCircleRight
        className="absolute top-[44%] xl:top-[50%] right-[5px]  z-10 cursor-pointer  text-[#0097b2]   xl:text-white text-[1.5rem] "
        onClick={nextSlide}
      />
      <div className="px-10">
        <div className="flex flex-row items-center justify-center px-10">
          <div className="hidden md:flex ">
            {current === 0
              ? projects[length - 1] && (
                  <ProjectCard project={projects[length - 1]} />
                )
              : projects[current - 1] && (
                  <ProjectCard project={projects[current - 1]} />
                )}
          </div>
          <div>
            {projects[current] && <ProjectCard project={projects[current]} />}
          </div>
          <div className="hidden xl:flex ">
            {current === length - 1
              ? projects[0] && <ProjectCard project={projects[0]} />
              : projects[current + 1] && (
                  <ProjectCard project={projects[current + 1]} />
                )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSlider;
