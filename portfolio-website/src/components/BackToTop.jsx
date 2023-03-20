import React from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";

const BackToTop = () => {
  return (
    <div>
      <Link
        to="navbar"
        className="fixed bottom-5 right-10 cursor-pointer text-gray-500 hover:text-[#0097b2]"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <BsArrowUpCircleFill className="w-8 h-8" />
      </Link>
    </div>
  );
};

export default BackToTop;
