import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      id="navbar"
      className=" text-white flex justify-between items-center h-24  mx-auto px-10  bg-black"
    >
      <div className="flex text-center">
        <Link
          to="navbar"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="flex items-center cursor-pointer"
        >
          <img src={logo} className="h-10 w-10 mr-4" alt="logo" />
          <h1 className="text-[#0097b2] font-semibold text-2xl mt-1">
            Andrew Julian
          </h1>
        </Link>
      </div>

      <ul className="hidden md:flex">
        <li className="p-4">
          <Link
            to="navbar"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={handleNav}
            className="cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            onClick={handleNav}
            className="cursor-pointer"
          >
            About
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
            onClick={handleNav}
            className="cursor-pointer"
          >
            Projects
          </Link>
        </li>
        <button className="border-2 rounded-xl border-[#0097b2] px-2 my-2  hover:bg-[#0097b2]">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={handleNav}
            className="cursor-pointer"
          >
            Contact
          </Link>
        </button>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-[80px] w-[50%] h-full bg-black ease-in-out duration-500 md:hidden"
            : "fixed left-[-100%]"
        }
      >
        <ul>
          <li className="p-4 border-b border-[#0097b2]">
            <Link
              to="navbar"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={handleNav}
              className="cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li className="p-4 border-b border-[#0097b2]">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
              onClick={handleNav}
              className="cursor-pointer"
            >
              About
            </Link>
          </li>
          <li className="p-4 border-b border-[#0097b2]">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              onClick={handleNav}
              className="cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li className="p-4">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={handleNav}
              className="cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
