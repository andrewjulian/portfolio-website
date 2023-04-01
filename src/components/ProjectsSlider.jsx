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
        className="absolute top-[50%] left-[32px] z-10 cursor-pointer text-white text-[1.5rem] hover:text-[#0097b2] "
        onClick={prevSlide}
      />
      <FaArrowAltCircleRight
        className="absolute top-[50%] right-[32px] z-10 cursor-pointer text-lg  text-white text-[1.5rem] hover:text-[#0097b2] "
        onClick={nextSlide}
      />
      <div>
        <div className="flex flex-col lg:flex-row items-center justify-center px-10">
          <div>
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
          <div>
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
