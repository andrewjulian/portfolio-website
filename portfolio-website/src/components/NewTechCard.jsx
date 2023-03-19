import React from "react";

const NewTechCard = ({ project }) => {
  const { tech, description, image } = project;
  return (
    <div className="flex flex-col items-center justify-center text-center mx-10  lg:flex-row m-2">
      <img
        className="sm:h-10 w-10 items-center justify-center mr-2 "
        src={image}
        alt={tech}
      />
      <h1 className="text-[#0097b2] mr-2">{tech}:</h1>
      <p>{description}</p>
    </div>
  );
};

export default NewTechCard;
