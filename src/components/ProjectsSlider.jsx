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
        className="absolute top-[44%]  2xl:top-[50%] left-[5px]  z-10 cursor-pointer text-[#0097b2]  2xl:text-white text-[1.5rem] xl:text-red-500 lg:text-purple-500 md:text-yellow-500 2xl:hover:text-[#0097b2]  "
        onClick={prevSlide}
      />
      <FaArrowAltCircleRight
        className="absolute top-[44%] 2xl:top-[50%] right-[5px]  z-10 cursor-pointer  text-[#0097b2]   2xl:text-white text-[1.5rem] 2xl:hover:text-[#0097b2]  "
        onClick={nextSlide}
      />
      <div className="px-10">
        <div className="flex flex-row items-center justify-center px-10">
          <div className="hidden lg:flex ">
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
          <div className="hidden 2xl:flex ">
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
