import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <div className="flex text-center">
        <img src={logo} className="h-10 w-10 mr-4" alt="logo" />
        <h1 className="text-[#0097b2] font-semibold text-2xl mt-1">
          Andrew Julian
        </h1>
      </div>

      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Projects</li>
        <button className="border-2 rounded-xl border-[#0097b2] px-2 my-2  hover:bg-[#0097b2]">
          Contact
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
          <li className="p-4 border-b border-[#0097b2]">Home</li>
          <li className="p-4 border-b border-[#0097b2]">About</li>
          <li className="p-4 border-b border-[#0097b2]">Projects</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
