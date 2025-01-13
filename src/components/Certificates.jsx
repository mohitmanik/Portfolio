import React from 'react';
import coursera from "../assets/coursera.png";
import cppcert from "../assets/cppcert.png";
import nptel from "../assets/nptel.png";
import simplilearn from "../assets/simplilearn.png";

const Certificates = () => {
  const certificates = [
    { title: "AR/VR Applications", description: "Applications of AR/VR", imageUrl: coursera },
    { title: "Basics of Cpp", description: "Basic knowledge of Cpp programming", imageUrl: cppcert },
    { title: "Nptel Certificate", description: "Foundation of Cyber physical Systems", imageUrl: nptel },
    { title: "Advance Cpp certificate ", description: "Advance Knowledge of Cpp ", imageUrl: simplilearn },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-violet-900 to-black pt-16 pb-16 min-h-screen text-white">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-violet-400 mt-5">
        Certificates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-b from-violet-800 via-black to-black rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 border border-violet-500"
          >
            <img
              className="w-full h-48 object-cover rounded-t-xl"
              src={cert.imageUrl}
              alt={cert.title}
              onError={(e) => {
                e.target.onerror = null; // Prevent infinite loop
                e.target.src = "https://via.placeholder.com/400";
              }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-violet-300">{cert.title}</h3>
              <p className="text-gray-300 mt-2">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
