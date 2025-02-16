// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-16 px-6 bg-sky-800 text-white">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
          {/* Project 1 */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold">Ecommerce</h3>
            <p className="mt-4 text-gray-200">This is a brief description of my first project, featuring React, Redux-toolkit,  Node.js, Express, mongoDB , jwt.</p>
            <div className="flex justify-evenly mt-6">
            <a href="https://ecommerce-main-ej0m.onrender.com/" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300">View Project</a>
            <a href="" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-black-700 transition-all duration-300">github</a>
            </div>
          </div>
          {/* Project 2 */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold">Stock Trading Platform</h3>
            <p className="mt-4 text-gray-400">Developed a real-time stock trading dashboard with an interactive UI using  React.js, Node.js, Express.js, Mongoose, Chart.js</p>
            <div className="flex justify-evenly mt-6">
            <a href="https://zerodha-frontend-sepia.vercel.app/" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300">View Project</a>
            <a href="https://github.com/Girdhari-patel/zerodha-frontend/tree/main" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-black-700 transition-all duration-300">github</a>
            </div>
          </div>
          {/* Project 3 */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold">Chat App</h3>
            <p className="mt-4 text-gray-400">The aim of the Chat App project is to interactive real-time chat application using Node.js , Express.js , Socket.io , MongoDB</p>
            <div className="flex justify-evenly  mt-6">
            <a href="https://chat-app2-final.vercel.app/" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300">View Project</a>
            <a href="https://github.com/Girdhari-patel/chat-app2-final/tree/main/chat%20app2" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-black-700 transition-all duration-300">github</a>
            </div>
          </div>

             {/* Project 4 */}
             <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold">Ecommerce using Redux</h3>
            <p className="mt-4 text-gray-400"> React.js, Firebase Database, react-router-dom, react-toastify, Redux-toolkit</p>
            <div className="flex justify-evenly  mt-6">
            <a href="https://e-comm-react-redux.vercel.app/" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-black-700 transition-all duration-300">View Project</a>

            <a href="https://github.com/Girdhari-patel/E-comm-React-Redux" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300">github</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
