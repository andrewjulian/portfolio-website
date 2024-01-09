import React from "react";
import webpropic from "../assets/webpropic.png";
import linked from "../assets/linkedinlogo.png";
import github from "../assets/github-mark-white.png";
import medium from "../assets/medium-black-symbol.png";
import Typed from "react-typed";
import "../index.css";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <Fade>
      <div
        id="hero"
        className="flex flex-row justify-between mx-10 mb-[70px] pt-5"
      >
        <div className="w-[50vw] py-[20px]">
          <img
            src={webpropic}
            alt="hero"
            className="rounded-full w-[42vw] h-[42vw] mx-auto"
          />
        </div>
        <div className="flex flex-col w-[50vw] pl-2 my-auto   ">
          <div className="my-auto ">
            <div className="flex flex-col my-auto text-white font-extrabold text-[5vw] ">
              <p>Turning complex problems into elegant solutions.</p>
            </div>

            <div className="flex flex-col my-auto mt-10">
              <h1 className=" text-[#0097b2] font-extrabold text-[2vw]">
                Andrew Julian
              </h1>

              <div className="flex font-mono text-[1vw] ">
                <h4 className="">
                  Software Engineer | Technical Founder | Curriculum Development
                </h4>
              </div>

              <div className="flex  mt-2">
                <a
                  href="https://github.com/Andrewjulian"
                  target="blank"
                >
                  <img
                    src={github}
                    alt="github"
                    className="h-10 w-auto m-2"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/andrewjohnjulian/"
                  target="blank"
                >
                  <img
                    src={linked}
                    alt="linked"
                    className="h-10 w-auto m-2"
                  />
                </a>
                <a
                  href="https://medium.com/@andrewjjulian"
                  target="blank"
                >
                  <img
                    src={medium}
                    alt="medium"
                    className="h-10 w-10 rounded-full bg-white  m-2"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Hero;
