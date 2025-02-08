import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import img from "../assets/mohit manik.png";

const Home = () => {
  return (
    <div className="h-full overflow-y-hidden">
      <div className="relative bg-gradient-to-r from-black to-violet-800 text-white h-screen flex items-center justify-center overflow-hidden">
        {/* Left Animated SVG */}
        <div className="absolute left-10 top-1/2 transform -translate-y-1/2 animate-spin-slow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-32 h-32 text-violet-500 opacity-50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4m0 4h.01M4.93 4.93l1.414 1.414M1 12h2m3.636 5.657l-1.414 1.414M12 22v-2m5.657-3.636l1.414 1.414M22 12h-2m-3.636-5.657l1.414-1.414"
            />
          </svg>
        </div>

        {/* Right Animated SVG */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-32 h-32 text-violet-300 opacity-50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.428 15.341A8 8 0 116.56 6.56a8.001 8.001 0 0112.868 8.781z"
            />
          </svg>
        </div>

        {/* Image Section */}
        <div className="relative">
          <img
            src={img}
            alt="Mohit Manik"
            className="rounded-full w-40 h-40 mb-6 border-4 border-violet-500 shadow-xl cursor-pointer hover:shadow-2xl"
          />
        </div>

        {/* Intro Section */}
        <div className="absolute bottom-28 text-center">
          <h1 className="text-4xl font-bold mb-4">Hello, I'm Mohit Manik</h1>
          <p className="text-lg max-w-lg mx-auto">
            I’m a passionate developer specializing in building innovative
            projects, solving challenging problems, and continually learning new
            technologies.
          </p>
        </div>

        {/* Social Links Section */}
        <div className="absolute bottom-8 flex space-x-6">
          <a
            href="https://github.com/mohitmanik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-violet-400 transition-transform transform hover:scale-125"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/mohit-manik-778b38251/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-violet-400 transition-transform transform hover:scale-125"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/mohitmaynqv/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-violet-400 transition-transform transform hover:scale-125"
          >
            <SiGeeksforgeeks size={30} />
          </a>
          <a
            href="https://leetcode.com/u/manikmohit/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-violet-400 transition-transform transform hover:scale-125"
          >
            <SiLeetcode size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
