// src/components/Resume.js
import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="min-h-screen bg-gray-900 py-16 px-6 text-white">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">My Resume</h2>
        <p className="text-lg text-gray-400 mb-6">View my professional experience and education background.</p>
        {/* <a href="/path/to/resume.pdf" download>
          <button className="px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300">
            Download Resume
          </button>
        </a> */}
        <a href="Girdhari_s_resume1.pdf" download>
          <button className="px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300">
            Download Resume
          </button>
        </a>
      </div>
    </section>
  );
};

export default Resume;
