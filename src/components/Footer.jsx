import React from "react";
import { DiReact } from "react-icons/di";
import { TbBrandTailwind } from "react-icons/tb";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div>
      <div className="w-[90vw] mx-auto flex flex-col items-center container md:flex-row md:p-6 p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Created By: Andrew Julian @ 2024
        </span>

        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li className="mr-4">Made With:</li>
          <li className="mr-2">
            <a
              href="https://react.dev/"
              target="_blank"
              className="flex justify-center items-center"
            >
              <DiReact className="w-10 h-10" />
            </a>
          </li>
          <li className="mr-2">
            <a
              href="https://tailwindcss.com/"
              target="blank"
              className="flex justify-center items-center"
            >
              <TbBrandTailwind className="w-10 h-10" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
