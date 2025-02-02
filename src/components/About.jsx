// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-black py-16 px-6 text-white">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <p className="text-lg text-gray-400 mb-8">I'm a developer passionate about creating impactful web applications.</p>
        <div className="flex justify-center space-x-8 text-3xl">
          <a href="https://github.com/your-profile" className="text-white hover:text-gray-400 transition-all duration-300">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/your-profile" className="text-white hover:text-gray-400 transition-all duration-300">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/your-profile" className="text-white hover:text-gray-400 transition-all duration-300">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
