import React from 'react';
import geminiImg from '../assets/gemini.jpg';
import netflixImg from '../assets/netflix.jpg';
import ttov from '../assets/texttovoice.png';
import vtot from '../assets/speechtotext.jpg';
import Whack from '../assets/Whackgame.jpg';
import task from '../assets/taskmanage.jpg';

const Projects = () => {
  const projects = [
    { title: 'Gemini-Clone', description: 'Simple Gemini Clone', link: '#', imageUrl: geminiImg },
    { title: 'Netflix-Clone', description: 'Simple Netflix Clone', link: 'https://github.com/mohitmanik/Netflix-clone', imageUrl: netflixImg },
    { title: 'Text-To-Speech Converter', description: 'Simple Text to Speech Converter', link: 'https://mohitmanik.github.io/Text_to_speech/', imageUrl: ttov },
    { title: 'Speech-To-Text Converter', description: 'Simple Speech to Speech text', link: 'https://dreamy-mochi-2fdf9e.netlify.app/', imageUrl: vtot },
    { title: 'Whack-A-Mole', description: 'An 2d Game', link: 'https://github.com/mohitmanik/Whack-a-Mole-game-', imageUrl: Whack },
    { title: 'To-Do list App', description: 'Task Management App', link: 'https://github.com/mohitmanik/Task-management-app', imageUrl: task },
  ];

  return (
    <div className="bg-gradient-to-b from-violet-700 via-black to-black text-white min-h-screen pt-24 pb-16">
      <h2 className="text-5xl font-extrabold text-center mb-12 text-white">
        My Projects
      </h2>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-52 object-cover rounded-t-lg"
                onError={(e) => {
                  e.target.onerror = null; // Prevent infinite loop
                  e.target.src = 'https://via.placeholder.com/400';
                }}
              />
              <div
                className="p-6 bg-gradient-to-b from-violet-800 to-black rounded-b-lg text-white"
              >
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-gray-300 mt-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
