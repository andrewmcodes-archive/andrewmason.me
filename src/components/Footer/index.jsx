import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
const Footer = () => (
  <div className="bg-grey-lighter shadow-inner">
    <div className="flex justify-between max-w-xl mx-auto p-4 md:p-8 text-sm">
      <p className="w-3/4 text-indigo-darkest">
        © 2018{" "}
        <a
          href="https://andrewmason.me"
          className="no-underline text-indigo-darkest"
          target="_blank"
          rel="noopener"
        >
          Andrew Mason
        </a>
      </p>
      <ul className="list-reset flex justify-between text-sm h-full">
        <li className="">
          <a
            className="flex flex-col text-center text-indigo-darker no-underline font-semibold"
            href="mailto:masonam96@outlook.com?Subject=Hello!"
            target="_blank"
            rel="noopener"
          >
            <FaEnvelope className="text-center w-full mb-4" />
          </a>
        </li>
        <li className="">
          <a
            className="flex flex-col text-center text-indigo-darker no-underline font-semibold"
            href="https://www.linkedin.com/in/andrew-mason"
            target="_blank"
            rel="noopener"
          >
            <FaLinkedin className="text-center w-full mb-4" />
          </a>
        </li>
        <li className="">
          <a
            className="flex flex-col text-center text-indigo-darker no-underline font-semibold"
            href="https://twitter.com/andrewmcodes"
            target="_blank"
            rel="noopener"
          >
            <FaTwitterSquare className="text-center w-full mb-4" />
          </a>
        </li>
        <li className="">
          <a
            className="flex flex-col text-center text-indigo-darker no-underline font-semibold"
            href="https://github.com/andrewmcodes"
            target="_blank"
            rel="noopener"
          >
            <FaGithub className="text-center w-full mb-4" />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Footer;
