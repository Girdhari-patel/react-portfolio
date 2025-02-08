// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-16 px-6 bg-sky-800 text-white">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Project 1 */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold">Ecommerce</h3>
            <p className="mt-4 text-gray-200">This is a brief description of my first project, featuring React, Redux-toolkit,  Node.js, Express, mongoDB , jwt.</p>
            <a href="https://ecommerce-main-ej0m.onrender.com/" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300">View Project</a>
            <a href="https://github.com/Girdhari-patel/react-portfolio" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-black-700 transition-all duration-300">github</a>
          </div>
          {/* Project 2 */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold">Project 2</h3>
            <p className="mt-4 text-gray-400">This project is a responsive web app built with HTML, CSS, and JavaScript.</p>
            <a href="#!" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300">View Project</a>
          </div>
          {/* Project 3 */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold">Project 3</h3>
            <p className="mt-4 text-gray-400">A full-stack project with a React front end and Express backend.</p>
            <a href="#!" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300">View Project</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
