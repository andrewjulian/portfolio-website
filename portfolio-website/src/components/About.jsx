import React from "react";

const About = () => {
  return (
    <div className="sm:pt-4">
      <h1 className="text-center text-[#0097b2] italic text-[4vw]">
        Building technology to improve experiences
      </h1>
      <div className="block sm:flex">
        <div className="w-1/2 border mx-auto my-2 bg-white sm:m-4">
          <img src="" alt="hello" />
          <p className="text-justify"> Topic #1 </p>
        </div>
        <div className="w-1/2 border mx-auto my-2 bg-white sm:m-4">
          <img src="" alt="hello" />
          <p className="text-justify"> Topic #2 </p>
        </div>
        <div className="w-1/2 border mx-auto my-2  bg-white sm:m-4">
          <img src="" alt="hello" />
          <p className="text-justify"> Topic #3 </p>
        </div>
      </div>
    </div>
  );
};

export default About;
