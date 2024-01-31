import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex items-center">
          <a href="#about" className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl">
            Zein Sharif
          </a>
          <button
            className="md:hidden text-white ml-2"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <nav
          className={`md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center ${
            mobileMenuOpen ? "block" : "hidden md:flex"
          }`}
        >
            <a href="#projects" className="mr-5 hover:text-white block md:inline-block md:mr-0 md:ml-5 mx-3 mb-2 md:mb-0">
              Projects
            </a>
            <a href="#skills" className="mr-5 hover:text-white block md:inline-block md:mr-0 md:ml-5 mx-3 mb-2 md:mb-0">
              Skills
            </a>
        </nav>
        <div className={`md:flex ${mobileMenuOpen ? "block" : "hidden"}`}>
          <a
            href="https://twitter.com/zeinsharif_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-500 hover:text-blue-700 block md:inline-block md:mr-0 md:ml-5 mx-3 mb-2 md:mb-0"
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/zeinsharif/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-white-500 hover:text-blue-700 block md:inline-block md:mr-0 md:ml-5 mx-3 mb-2 md:mb-0"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Zein19"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-500 hover:text-blue-700 block md:inline-block md:mr-0 md:ml-5 mx-3 mb-2 md:mb-0"
          >
            GitHub
          </a>
        </div>
        <a
          href="Zein-Sharif-SD-CV.pdf"
          download="ZeinSharif-CV"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 md:mr-5"
        >
          CV
        </a>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
