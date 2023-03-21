import React from "react";
import github from "../assets/github-mark-white.png";
import "../index.css";
import Zoom from "react-reveal/Zoom";

const ProjectCard = ({ project }) => {
  const { title, description, image, repo, tags } = project;
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg m-2 hover:scale-110 duration-300">
      <Zoom>
        <div>
          <img className="projectimage" src={image} alt={title} />
          <div className="px-6 py-4 bg-gray-200">
            <div className="font-bold text-xl text-black mb-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
          <div className=" flex px-2 sm:px-6 bg-[#0097b2] justify-center items-center">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-2 ">
              {tags[0]}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 my-2 ">
              {tags[1]}
            </span>
            <span className="flex items-end justify-end px-3 py-1 text-sm font-semibold text-gray-700  my-2">
              <a href={repo} target="blank">
                <img src={github} alt="github" className="w-8 sm:h-8" />
              </a>
            </span>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default ProjectCard;
