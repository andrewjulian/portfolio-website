import asyncedu from "../assets/asyncedu.png";
import allinai from "../assets/allinai.png";
import peerdesk from "../assets/peerdesk.png";

const Projects = () => {
  return (
    <div
      id="projects"
      className=" bg-gray-300 md:my-10 flex-col md:py-10 "
    >
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />

      <div className="flex flex-col md:flex-row gap-x-[60px] gap-y-2 my-5 py-2 md:py-0 md:mx-[120px] ">
        <h1 className="md:hidden text-[40px] text-center text-[#0568a0] font-semibold   ">
          PeerDesk
        </h1>

        <img
          src={peerdesk}
          alt="PeerDesk"
          className="w-[350px] rounded-md md:rounded-2xl mx-auto md:w-[40vw] shadow-2xl font-extrabold  "
          height={100}
          width={100}
        />

        <div className="flex flex-col ">
          <div className="my-0 md:my-auto  ">
            <div className="mb-10">
              <h1 className="hidden md:flex text-[#0568a0] font-semibold text-[3vw]  ">
                PeerDesk
              </h1>
              <p className=" text-black font-semibold text-center mt-2 md:mt-0 md:text-left text-[18px] md:text-[1.5vw]  ">
                Technical Founder and Lead Developer
              </p>
              <hr className="bg-[#0568a0] h-[1px] my-2" />
              <p className=" text-black font-semibold text-[16px] mx-8 md:mx-0 md:text-[1.5vw] mb-8 ">
                PeerDesk is a peer-to-peer collaboration platform for tech
                professionals seeking to complete projects and build their
                portfolios to become more marketable and competitive in the job
                market.
              </p>

              <a
                href="https://peerdesk.app"
                className="flex justify-center md:justify-start"
              >
                <button className="bg-[#0568a0]  text-white font-normals text-[18px] md:text-[1.3vw] rounded-md px-4 py-2 ">
                  Visit PeerDesk's Main Page
                </button>
              </a>
            </div>
            <div className="flex justify-center md:justify-start">
              <div className="flex flex-row mb-5 gap-5">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                  className="h-[40px] md:h-[3vw]"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  className="h-[40px] md:h-[3vw]"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg"
                  className="h-[40px] md:h-[3vw]"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  className="h-[40px] md:h-[3vw]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
