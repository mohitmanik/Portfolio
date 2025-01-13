import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Education = () => {
  const boxRefs = useRef([]); // Create an array of refs

  useEffect(() => {
    boxRefs.current.forEach((box, index) => {
      gsap.to(box, {
        x:'-80%',
        duration: 3,
        repeat: -1,
        yoyo:true,
        ease: "linear",
        delay: index * 0.8, // Add staggered delay for each element
      });
    });
  }, []);

  const educationData = [
    {
      level: "10th Grade",
      institution: "Govt. High School, Jawar",
      year: "2020",
      percentage: "97.75%",
    },
    {
      level: "12th Grade",
      institution: "Govt. Excellence School, Khandwa",
      year: "2022",
      percentage: "93.4%",
    },
    {
      level: "Graduation",
      institution: "VIT Bhopal University",
      year: "2026",
      degree: "B.Tech in Computer Science",
      cgpa: "8.98/10",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-black via-violet-900 to-black text-white min-h-screen flex items-center justify-center py-12 overflow-x-hidden overflow-y-hidden">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-10 text-violet-400">
          My Education Journey
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-r from-violet-800 to-violet-600 p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              {/* Decorative Badge */}
              <div
                className="absolute -top-4 -right-4 bg-violet-500 text-white text-sm font-semibold rounded-full px-4 py-1 shadow-md"
                ref={(el) => (boxRefs.current[index] = el)} // Assign a ref for each badge
              >
                {edu.level}
              </div>
              <h2 className="text-2xl font-bold text-violet-300 mb-3">
                {edu.institution}
              </h2>
              <p className="text-lg mb-2">
                <span className="font-semibold text-violet-100">Year:</span>{" "}
                {edu.year}
              </p>
              {edu.percentage && (
                <p className="text-lg mb-2">
                  <span className="font-semibold text-violet-100">
                    Percentage:
                  </span>{" "}
                  {edu.percentage}
                </p>
              )}
              {edu.degree && (
                <p className="text-lg mb-2">
                  <span className="font-semibold text-violet-100">Degree:</span>{" "}
                  {edu.degree}
                </p>
              )}
              {edu.cgpa && (
                <p className="text-lg">
                  <span className="font-semibold text-violet-100">CGPA:</span>{" "}
                  {edu.cgpa}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
