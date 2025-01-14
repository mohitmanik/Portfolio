import React, { useState } from "react";
import Navbar from "./Navbar";
import img from "../assets/resumephoto.jpg";

const Home = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleHover = () => {
    // Generate wider random positions within a larger range
    const randomX = Math.random() * 400 - 200; // Range: -200 to +200
    const randomY = Math.random() * 400 - 200; // Range: -200 to +200

    setPosition({ x: randomX, y: randomY });
  };

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

        {/* Escaping Image Section */}
        <div
          className="relative"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            transition: "transform 0.1s ease-out", // Fast escape
          }}
          onMouseEnter={handleHover} // Escape on hover
          onClick={handleHover} // Escape on click
        >
          <img
            src={img}
            alt="Mohit Manik"
            className="rounded-full w-40 h-40 mb-6 border-4 border-violet-500 shadow-lg cursor-pointer"
          />
        </div>

        {/* Intro Section */}
        <div className="absolute bottom-10 text-center">
          <h1 className="text-4xl font-bold mb-4">Hello, I'm Mohit Manik</h1>
          <p className="text-lg max-w-lg mx-auto">
            I’m a passionate developer specializing in building innovative
            projects, solving challenging problems, and continually learning new
            technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
