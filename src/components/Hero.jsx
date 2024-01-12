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
        className="flex flex-col md:flex-row justify-between mt-5  md:mx-10 mb-[70px] "
      >
        <div className="w-full md:w-[50vw] md:py-[10px] mb-8">
          <img
            src={webpropic}
            alt="hero"
            className="rounded-full h-[300px] w-auto md:w-[42vw] md:h-[42vw] mx-auto"
          />
        </div>

        <div className="flex flex-col mx-auto md:w-[50vw] px-auto my-auto py-auto  ">
          <div className="my-auto text-center md:text-left  ">
            <div className="flex flex-col my-auto px-5 text-white font-extrabold text-[36px] md:text-[5vw]  ">
              <p>Turning complex problems into elegant solutions.</p>
            </div>

            <div className="flex text-center md:text-left flex-col my-auto mt-10 ">
              <h1 className=" text-[#0097b2] md:pl-6 md:ml-0 font-extrabold text-[40px] md:text-[2.2vw]">
                Andrew Julian
              </h1>

              <div className="hidden md:flex font-mono mx-0 md:mx-auto text-[20px] md:text-[1.2vw] ">
                <div className="flex flex-col md:flex-row">
                  <p>Software Engineer</p>
                  <p className="mx-3 hidden md:flex">|</p>
                  <p>Technical Founder</p>
                  <p className="mx-3 hidden md:flex">|</p>
                  <p>Curriculum Developer</p>
                </div>
              </div>

              <div className="flex mx-auto md:mx-4  mt-2">
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
