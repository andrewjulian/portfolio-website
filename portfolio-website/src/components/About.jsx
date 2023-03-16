import React from "react";
import codeone from "../assets/navbarcode.png";

const About = () => {
  return (
    <div className="flex bg-[#0097b2] justify-between w-full p-[5%] sm:mt-10">
      <img
        src={codeone}
        alt="code"
        className="hidden sm:flex w-[40%] mx-[3%] rounded-2xl"
      />
      <div className="block sm:mr-[2%] ">
        <h1 className=" text-black italic text-[4vw] sm:text-[2vw] py-auto">
          Building technology to improve experiences
        </h1>
        <h3 className="text-white">
          I am a full stack developer, with an additional background in
          education, who creates web applications that are used to integrate
          technology for optimizing productivity and efficiency of a variety of
          tasks.
        </h3>
      </div>
    </div>
  );
};

export default About;
