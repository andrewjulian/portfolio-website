import React, { useState, useEffect } from "react";
import hero from "../assets/heroimage.png";
import linked from "../assets/linkedinlogo.png";
import github from "../assets/github-mark-white.png";
import medium from "../assets/medium-black-symbol.png";
import "../index.css";

const FADE_INTERVAL_MS = 3000;
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2;
const WORDS_TO_ANIMATE = [
  "Front End Developer",
  "Back End Developer",
  "Full Stack Developer",
  "Web Developer",
  "Software Engineer",
];

let FadeProp = { fade: "fade-in" | "fade-out" };

const Hero = () => {
  const [fadeProp, setFadeProp] = useState({ fade: "fade-in" });
  const [wordOrder, setWordOrder] = useState(0);

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      fadeProp.fade === "fade-in"
        ? setFadeProp({ fade: "fade-out" })
        : setFadeProp({ fade: "fade-in" });
    }, FADE_INTERVAL_MS);

    return () => clearInterval(fadeTimeout);
  }, [fadeProp]);

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      setWordOrder(
        (prevWordOrder) => (prevWordOrder + 1) % WORDS_TO_ANIMATE.length
      );
    }, WORD_CHANGE_INTERVAL_MS);

    return () => clearInterval(wordTimeout);
  }, []);

  return (
    <div>
      <img
        src={hero}
        alt="hero"
        className="md:mr-4 sm:w-[50%] pr-4 float-right"
      />
      <div className="px-[5%] py-[15%]">
        <h1 className="text-center text-[#0097b2] font-extrabold text-[5vw]">
          Andrew Julian
        </h1>
        <h1 className="text-center text-[#0097b2] font-extrabold text-[3vw]">
          <span className={fadeProp.fade}> {WORDS_TO_ANIMATE[wordOrder]} </span>
        </h1>

        <div className="flex justify-center mt-2">
          <a href="https://github.com/Andrewjulian" target="blank">
            <img src={github} alt="github" className="h-[5vw] w-auto m-2" />
          </a>
          <a
            href="https://www.linkedin.com/in/andrewjohnjulian/"
            target="blank"
          >
            <img src={linked} alt="linked" className="h-[5vw] w-auto m-2" />
          </a>
          <a href="https://medium.com/@andrewjjulian" target="blank">
            <img
              src={medium}
              alt="medium"
              className="h-[5vw] w-[5vw] rounded-full bg-white  m-2"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
