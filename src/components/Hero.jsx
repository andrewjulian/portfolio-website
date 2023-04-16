import React from "react";
import hero from "../assets/heroimage.png";
import linked from "../assets/linkedinlogo.png";
import github from "../assets/github-mark-white.png";
import medium from "../assets/medium-black-symbol.png";
import Typed from "react-typed";
import "../index.css";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <Fade>
      <div id="hero">
        <img
          src={hero}
          alt="hero"
          className="md:mr-4 sm:w-[50%] pr-4 float-right"
        />
        <div className="px-[5%] py-[14%]">
          <h1 className="text-center text-[#0097b2] font-extrabold text-[9vw] sm:text-[5vw]">
            Andrew Julian
          </h1>

          <div className="flex justify-center text-center mt-3 mb-5">
            <h4 className="text-[15px]">
              Creating functional and reponsive web applications, games, and
              websites with a focus on helping users improve their daily
              experiences.
            </h4>
          </div>

          <center>
            <Typed
              className="font-mono text-[#0097b2] text-[5vw] sm:text-[3vw]"
              strings={[
                "Software Engineer",
                "Full Stack Developer",
                "React Developer",
                "JavaScript Developer",
                "Ruby on Rails Developer",
              ]}
              typeSpeed={40}
              backSpeed={60}
              backDelay={1500}
              loop={true}
            />
          </center>

          <div className="flex justify-center mt-2">
            <a href="https://github.com/Andrewjulian" target="blank">
              <img src={github} alt="github" className="h-10 w-auto m-2" />
            </a>
            <a
              href="https://www.linkedin.com/in/andrewjohnjulian/"
              target="blank"
            >
              <img src={linked} alt="linked" className="h-10 w-auto m-2" />
            </a>
            <a href="https://medium.com/@andrewjjulian" target="blank">
              <img
                src={medium}
                alt="medium"
                className="h-10 w-10 rounded-full bg-white  m-2"
              />
            </a>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Hero;
