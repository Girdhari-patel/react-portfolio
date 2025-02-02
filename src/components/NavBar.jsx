// src/components/NavBar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-4 px-8 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold text-white">My Portfolio</div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-yellow-400 transition-all duration-300">Home</Link>
          <Link to="/projects" className="text-white hover:text-yellow-400 transition-all duration-300">Projects</Link>
          <Link to="/resume" className="text-white hover:text-yellow-400 transition-all duration-300">Resume</Link>
          <Link to="/about" className="text-white hover:text-yellow-400 transition-all duration-300">About</Link>
          <Link to="/contact" className="text-white hover:text-yellow-400 transition-all duration-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
