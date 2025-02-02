// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <section className="relative h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-black text-white flex flex-col justify-center items-center px-6">
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('laptop.jpg')" }}></div>
      <div className="relative z-10 text-center  from-indigo-700 via-purple-700 ">
        <h1 className="text-6xl font-bold tracking-tight leading-tight mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Hi, I'm <span className="text-yellow-400">Girdhari Patel</span>
        </h1>
        <p className="text-2xl max-w-xl mx-auto mb-8 animate__animated animate__fadeIn animate__delay-2s">
          A passionate full-stack developer, building the web of tomorrow with modern technologies.
        </p>
        <Link to="/projects">
          <button className="px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 animate__animated animate__fadeIn animate__delay-3s">
            Explore My Work
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
