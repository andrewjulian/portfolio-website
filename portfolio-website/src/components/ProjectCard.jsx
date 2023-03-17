import React from "react";
import github from "../assets/github-mark-white.png";
import "../index.css";

const ProjectCard = ({ project }) => {
  const { title, description, image, repo, tags } = project;
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg m-2">
      <img className="projectimage" src={image} alt={title} />
      <div className="px-6 py-4 bg-gray-200">
        <div className="font-bold text-xl text-black mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 bg-[#0097b2]">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {tags[0]}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {tags[1]}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {tags[2]}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <a href="repo">
            <img src={github} alt="github" className="w-6 h-6" />{" "}
          </a>
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
