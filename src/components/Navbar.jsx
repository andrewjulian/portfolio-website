import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import github from "../assets/github-mark-white.png";
import linked from "../assets/linkedinlogo.png";
import medium from "../assets/medium-black-symbol.png";

import { motion, AnimatePresence } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      id="navbar"
      className=" sticky top-0 z-30 text-[#0097b2] flex justify-between items-center h-[100px] mx-auto px-4 sm:px-10  bg-black  "
    >
      <div className="flex text-center ">
        <Link
          to="navbar"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="flex items-center cursor-pointer "
        >
          <img
            src={logo}
            className="h-[40px] w-auto md:h-[4vw] mr-4 "
            alt="logo"
          />
          <h1 className="text-[#0097b2] font-semibold text-2xl mt-1 ">
            Andrew Julian
          </h1>
        </Link>
      </div>

      <ul className="hidden md:flex text-[20px]">
        <li className="p-4">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
            onClick={handleNav}
            className="cursor-pointer hover:text-[#fabc5e]"
          >
            Home
          </Link>
        </li>

        <li className="p-4">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={handleNav}
            className="cursor-pointer hover:text-[#fabc5e]"
          >
            Experience
          </Link>
        </li>

        <li className="p-4">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={handleNav}
            className="cursor-pointer hover:text-[#fabc5e]"
          >
            Contact
          </Link>
        </li>
      </ul>

      <motion.div
        onClick={handleNav}
        className="block m-2 md:hidden"
      >
        <AnimatePresence mode="wait">
          {nav ? (
            <motion.span
              key="close"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AiOutlineClose size={20} />
            </motion.span>
          ) : (
            <motion.span
              key="menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AiOutlineMenu size={20} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      <div
        className={
          nav
            ? "fixed z-10 text-white left-0 top-[0px] w-[75%] h-full ease-in-out duration-500  bg-black md:hidden"
            : "fixed left-[-100%]"
        }
      >
        <ul>
          <li className="p-4 pt-8 border-b border-[#0097b2] flex">
            <img
              src={logo}
              className="h-10 w-10 mr-4"
              alt="logo"
            />
            <h1 className="text-[#0097b2] font-semibold text-2xl mt-1 ">
              Andrew Julian
            </h1>
          </li>
          <li className="p-4 border-b border-[#0097b2]">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleNav}
              className="cursor-pointer"
            >
              Home
            </Link>
          </li>

          <li className="p-4 border-b border-[#0097b2]">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleNav}
              className="cursor-pointer"
            >
              Experience
            </Link>
          </li>
          <li className="p-4 ">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleNav}
              className="cursor-pointer"
            >
              Contact
            </Link>
          </li>
          <li className="p-4 ">
            <div className="flex jusitfy-center md:mx-4  mt-2">
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
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
