import React from "react";
import github from "../assets/github-mark-white.png";

const ProjectCard = ({ project }) => {
  const { title, description, image, repo, tags } = project;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt="Sunset in the mountains" />
      <div className="px-6 py-4 bg-white">
        <div className="font-bold text-xl mb-2 text-black">{title}</div>
        <p className="text-[#0097b2] text-base">{description}</p>
      </div>
      <div className="px-6 bg-[#0097b2]">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #{tags[0]}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #{tags[1]}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #{tags[2]}
        </span>
        <a href={repo} className="inline-block px-3 mt-4">
          <img src={github} alt="github" className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
