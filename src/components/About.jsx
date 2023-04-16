import React from "react";
import codeone from "../assets/navbarcode.png";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div
      id="about"
      className="flex bg-gray-300 justify-between w-full p-[5%] sm:mt-10"
    >
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
      <Fade left>
        <img
          src={codeone}
          alt="code"
          className="hidden sm:flex w-[40%] mx-[3%] rounded-2xl"
        />
      </Fade>
      <Fade right>
        <div className="block sm:mr-[2%]">
          <h1 className="text-center text-black sm:text-black  font-bold text-[3vw] sm:text-[1.5vw] mt-2 py-auto">
            Experience Creating With The Following Technologies:
          </h1>
          <div className="grid grid-cols-4 place-items-center gap-5 pt-4">
            <img
              className="text-[15vs] m-5 sm:text-[6vw] cursor-none"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            />
            <i className="text-[15vw] devicon-react-original colored m-5 sm:text-[6vw] devicon-react-original colored cursor-none"></i>
            <i className="text-[15vw] devicon-ruby-plain colored m-5 sm:text-[6vw] devicon-ruby-plain colored cursor-none"></i>
            <i className="text-[15vw] devicon-rails-plain colored m-5 sm:text-[6vw] devicon-rails-plain colored cursor-none"></i>
            <i className="text-[15vw] devicon-nodejs-plain colored m-5 sm:text-[6vw] devicon-nodejs-plain colored cursor-none"></i>
            <i className="text-[15vw] devicon-express-original colored m-5 sm:text-[6vw] devicon-express-original colored cursor-none"></i>
            <i className="text-[15vw] devicon-mongodb-plain colored m-5 sm:text-[6vw] devicon-mongodb-plain colored cursor-none"></i>
            <img
              className="text-[15vs] m-5 sm:text-[6vw] cursor-none"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            />
            <i className="text-[15vw] devicon-html5-plain colored m-5 sm:text-[6vw] devicon-html5-plain colored cursor-none"></i>
            <i className="text-[15vw] devicon-css3-plain colored m-5 sm:text-[6vw] devicon-css3-plain colored cursor-none"></i>
            <i className="text-[15vw] devicon-tailwindcss-plain colored m-5 sm:text-[6vw] devicon-tailwindcss-plain colored cursor-none"></i>
            <i className="text-[15vw] devicon-bootstrap-plain colored m-5 sm:text-[6vw] devicon-bootstrap-plain colored cursor-none"></i>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default About;
