import React from "react";
import ProjectCard from "./ProjectCard";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const ProjectsSlider = ({
  current,
  projects,
  prevSlide,
  nextSlide,
  setShow,
  show,
}) => {
  const length = projects.length;

  if (!Array.isArray(projects) || projects.length <= 0) {
    return null;
  }
  setTimeout(() => {
    setShow(true);
  }, 2000);

  return (
    <section className="relative h-100vh flex justify-center items-center">
      <FaArrowAltCircleLeft
        className="absolute top-[50%] left-[-30px]  sm:left-[5px]  z-10 cursor-pointer text-white text-[1.5rem] md:hover:text-[#0097b2]  "
        onClick={prevSlide}
      />
      <FaArrowAltCircleRight
        className="absolute top-[50%] right-[-30px]  sm:right-[5px]  z-10 cursor-pointer  text-white text-[1.5rem] md:hover:text-[#0097b2]  "
        onClick={nextSlide}
      />
      <Zoom>
        <div className="px-10 ">
          <Fade cascade when={show} duration={2000}>
            <div className="flex flex-row items-center justify-center px-10">
              <div className="hidden lg:flex ease-in-out duration-300 ">
                {current === 0
                  ? projects[length - 1] && (
                      <ProjectCard project={projects[length - 1]} />
                    )
                  : projects[current - 1] && (
                      <ProjectCard project={projects[current - 1]} />
                    )}
              </div>
              <div className="ease-in-out duration-300">
                {projects[current] && (
                  <ProjectCard project={projects[current]} />
                )}
              </div>
              <div className="hidden xl:flex ease-in-out duration-300 ">
                {current === length - 1
                  ? projects[0] && <ProjectCard project={projects[0]} />
                  : projects[current + 1] && (
                      <ProjectCard project={projects[current + 1]} />
                    )}
              </div>
            </div>
          </Fade>
        </div>
      </Zoom>
    </section>
  );
};

export default ProjectsSlider;
