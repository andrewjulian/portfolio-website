import React, { useState } from "react";
import codeone from "../assets/navbarcode.png";
import Fade from "react-reveal/Fade";

const About = () => {
  const [htmlHover, setHtmlHover] = useState(false);
  const [cssHover, setCssHover] = useState(false);
  const [jsHover, setJsHover] = useState(false);
  const [reactHover, setReactHover] = useState(false);
  const [rubyHover, setRubyHover] = useState(false);
  const [railsHover, setRailsHover] = useState(false);

  const htmlMouseOver = () => {
    setHtmlHover(true);
  };
  const htmlMouseOut = () => {
    setHtmlHover(false);
  };
  const cssMouseOver = () => {
    setCssHover(true);
  };
  const cssMouseOut = () => {
    setCssHover(false);
  };
  const jsMouseOver = () => {
    setJsHover(true);
  };
  const jsMouseOut = () => {
    setJsHover(false);
  };
  const reactMouseOver = () => {
    setReactHover(true);
  };
  const reactMouseOut = () => {
    setReactHover(false);
  };
  const rubyMouseOver = () => {
    setRubyHover(true);
  };
  const rubyMouseOut = () => {
    setRubyHover(false);
  };
  const railsMouseOver = () => {
    setRailsHover(true);
  };
  const railsMouseOut = () => {
    setRailsHover(false);
  };

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
          <h1 className="text-center text-black text-[25px] mb-2 sm:text-black italic font-bold sm:text-md py-auto">
            Building Technology For Improving Experiences
          </h1>
          <h3 className="text-center text-md text-[#0097b2] sm:text-[#0097b2] font-bold mb-4 sm:text-lg">
            During more than a decade in education, I saw the impact of new
            technologies on the teaching and learning experience. This inspired
            me to become a full stack software engineer so that I could create
            applications for improving the lives of others.
          </h3>
          <h1 className="text-center text-black sm:text-black  font-bold text-[3vw] sm:text-[1.5vw] mt-2 py-auto">
            Experience Creating With The Following Technologies:
          </h1>
          <div className="grid grid-cols-3 place-items-center gap-5 pt-4">
            <div onMouseOver={htmlMouseOver} onMouseOut={htmlMouseOut}>
              {htmlHover ? (
                <i className="text-[15vw] devicon-html5-plain colored m-5 sm:text-[6vw] devicon-html5-plain colored cursor-none"></i>
              ) : (
                <i className="text-[15vw] devicon-html5-plain m-5 sm:text-[6vw] devicon-html5-plain"></i>
              )}
            </div>
            <div onMouseOver={cssMouseOver} onMouseOut={cssMouseOut}>
              {cssHover ? (
                <i className="text-[15vw] devicon-css3-plain colored m-5 sm:text-[6vw] devicon-css3-plain colored cursor-none"></i>
              ) : (
                <i className="text-[15vw] devicon-css3-plain m-5 sm:text-[6vw] devicon-css3-plain"></i>
              )}
            </div>
            <div onMouseOver={jsMouseOver} onMouseOut={jsMouseOut}>
              {jsHover ? (
                <i className="text-[15vw] devicon-javascript-plain colored m-5 sm:text-[6vw] devicon-javascript-plain colored cursor-none"></i>
              ) : (
                <i className="text-[15vw] devicon-javascript-plain  m-5 sm:text-[6vw] devicon-javascript-plain"></i>
              )}
            </div>
            <div onMouseOver={reactMouseOver} onMouseOut={reactMouseOut}>
              {reactHover ? (
                <i className="text-[15vw] devicon-react-original colored m-5 sm:text-[6vw] devicon-react-original colored cursor-none"></i>
              ) : (
                <i className="text-[15vw] devicon-react-original m-5 sm:text-[6vw] devicon-react-original"></i>
              )}
            </div>
            <div onMouseOver={rubyMouseOver} onMouseOut={rubyMouseOut}>
              {rubyHover ? (
                <i className="text-[15vw] devicon-ruby-plain colored m-5 sm:text-[6vw] devicon-ruby-plain colored cursor-none"></i>
              ) : (
                <i className="text-[15vw] devicon-ruby-plain m-5 sm:text-[6vw] devicon-ruby-plain"></i>
              )}
            </div>
            <div onMouseOver={railsMouseOver} onMouseOut={railsMouseOut}>
              {railsHover ? (
                <i className="text-[15vw] devicon-rails-plain colored m-5 sm:text-[6vw] devicon-rails-plain colored cursor-none"></i>
              ) : (
                <i className="text-[15vw] devicon-rails-plain m-5 sm:text-[6vw] devicon-rails-plain"></i>
              )}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default About;