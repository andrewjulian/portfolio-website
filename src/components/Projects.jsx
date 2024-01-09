import asyncedu from "../assets/asyncedu.png";
import allinai from "../assets/allinai.png";
import peerdesk from "../assets/peerdesk.png";

const Projects = () => {
  return (
    <div
      id="projects"
      className="my-10 mx-[120px]"
    >
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />

      <h1 className="text-center text-[#0097b2] font-extrabold text-[4vw] md:text-[4vw] ">
        Products and Projects
      </h1>
      <div className=" flex flex-row gap-10 mt-5">
        <img
          src={peerdesk}
          alt="PeerDesk"
          className="w-[40vw] h-auto object-cover "
          height={100}
          width={100}
        />
        <div className="flex flex-col  ">
          <div className="my-auto">
            <div className="mb-10">
              <h1 className=" text-white font-semibold text-[3vw] mb-5 ">
                PeerDesk
              </h1>
              <p className=" text-white font-semibold text-[1.5vw] mb-5 ">
                PeerDesk is a peer-to-peer collaboration platform for tech
                professionals seeking to complete projects and build their
                portfolios to become more marketable and competitive in the job
                market.
              </p>
              <a href="https://peerdesk.app">
                <button className="bg-[#0097b2] text-white font-semibold text-[1.5vw] rounded-md px-4 py-2 mt-2">
                  Visit PeerDesk
                </button>
              </a>
            </div>
            <div className="flex flex-row  gap-5">
              <i className="devicon-nextjs-plain text-[3vw]"></i>
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

export default Projects;
