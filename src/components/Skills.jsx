import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.jpg";
import jsLogo from "../assets/javascript.png";
import reactLogo from "../assets/react.png";
import nodeLogo from "../assets/node.png";
import pythonLogo from "../assets/python.png";
import javaLogo from "../assets/java.png";
import gitLogo from "../assets/git.png";
import sqlLogo from "../assets/mySql.png";
import cppLogo from "../assets/cpp.png";

const skillsData = [
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "React", logo: reactLogo },
  { name: "Node.js", logo: nodeLogo },
  { name: "Python", logo: pythonLogo },
  { name: "Java", logo: javaLogo },
  { name: "Git", logo: gitLogo },
  { name: "MySQL", logo: sqlLogo },
  { name: "Cpp", logo: cppLogo },
];

const Skills = () => {
  const cardsRef = useRef([]); // Array of refs for each card

  useEffect(() => {
    // Use GSAP to animate the skill cards
    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        scale: 0.8,
        y: 50,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2, // Add delay between animations
      }
    );
  }, []);

  return (
    <div className="bg-gradient-to-r from-black via-violet-900 to-black text-white min-h-screen py-16">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-violet-400 mt-5 mb-10">
          My Technical Skills
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)} // Assign ref for each card
              className="bg-gradient-to-r from-violet-800 to-violet-600 transition-transform hover:scale-105 hover:from-pink-500 hover:to-yellow-500 shadow-lg rounded-xl p-6 flex flex-col items-center justify-center"
            >
              <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mb-4">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <p className="text-lg font-medium text-white">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
