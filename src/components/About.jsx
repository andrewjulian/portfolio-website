import React from "react";
import codeone from "../assets/navbarcode.png";
import Fade from "react-reveal/Fade";
import peerdesk from "../assets/peerdesk.png";

const About = () => {
  return (
    <div
      id="about"
      className="flex bg-gray-300 my-10  flex-col py-10 "
    >
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />

      <h1 className="text-center text-black mb-2 font-extrabold text-[4vw] md:text-[4vw] stroke-black ">
        Current Project
      </h1>
      <div className="flex flex-row gap-10 my-5 mx-[120px]">
        <img
          src={peerdesk}
          alt="PeerDesk"
          className="w-[40vw] h-auto object-cover shadow-2xl font-extrabold"
          height={100}
          width={100}
        />

        <div className="flex flex-col">
          <div className="my-auto ">
            <div className="mb-14">
              <h1 className=" text-[#0568a0] font-semibold text-[3vw] mb-5 ">
                PeerDesk
              </h1>
              <p className=" text-black font-semibold text-[1.5vw] mb-5 ">
                PeerDesk is a peer-to-peer collaboration platform for tech
                professionals seeking to complete projects and build their
                portfolios to become more marketable and competitive in the job
                market.
              </p>
              <a href="https://peerdesk.app">
                <button className="bg-[#0568a0] text-white font-semibold text-[1.5vw] rounded-md px-4 py-2 ">
                  Visit PeerDesk
                </button>
              </a>
            </div>
            <div className="flex flex-row mb-5  gap-5">
              <i className="devicon-nextjs-plain text-[3vw] text-black"></i>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                className="h-[3vw]"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg"
                className="h-[3vw]"
              />
              <i className="devicon-tailwindcss-plain colored text-[3vw]"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
