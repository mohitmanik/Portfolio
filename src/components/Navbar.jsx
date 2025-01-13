import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-black to-violet-800 text-white shadow-md fixed top-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold md:mr-96 md:w-96">
          <Link to="/">MOHIT MANIK</Link>
        </div>
        {/* Hamburger Menu (Mobile) */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
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
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        {/* Navigation Links */}
        <ul
          className={`lg:flex lg:space-x-8 lg:items-center ${
            isOpen ? "block" : "hidden"
          } absolute lg:static top-16 left-0 w-full bg-gradient-to-r from-black to-violet-800 lg:bg-transparent shadow-lg lg:shadow-none lg:p-0 p-4`}
        >
          <li>
            <Link
              to="/"
              className="block lg:inline-block hover:text-violet-400 transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Intro
            </Link>
          </li>
          <li>
            <Link
              to="/education"
              className="block lg:inline-block hover:text-violet-400 transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className="block lg:inline-block hover:text-violet-400 transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/certificates"
              className="block lg:inline-block hover:text-violet-400 transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Certificates
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="block lg:inline-block hover:text-violet-400 transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block lg:inline-block hover:text-violet-400 transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
