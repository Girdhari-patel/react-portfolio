// // src/components/NavBar.js
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const NavBar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   const handleScroll = () => {
//     if (window.scrollY > 50) {
//       setIsScrolled(true);
//     } else {
//       setIsScrolled(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 py-4 px-8 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'}`}>
//       <div className="max-w-screen-xl mx-auto flex justify-between items-center">
//         <div className="text-3xl font-bold text-white">My Portfolio</div>
//         <div className="hidden md:flex space-x-6">
//           <Link to="/" className="text-white hover:text-yellow-400 transition-all duration-300">Home</Link>
//           <Link to="/projects" className="text-white hover:text-yellow-400 transition-all duration-300">Projects</Link>
//           <Link to="/resume" className="text-white hover:text-yellow-400 transition-all duration-300">Resume</Link>
//           <Link to="/about" className="text-white hover:text-yellow-400 transition-all duration-300">About</Link>
//           <Link to="/contact" className="text-white hover:text-yellow-400 transition-all duration-300">Contact</Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
 
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-4 px-8 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold text-white">My Portfolio</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-yellow-400 transition-all duration-300">Home</Link>
          <Link to="/projects" className="text-white hover:text-yellow-400 transition-all duration-300">Projects</Link>
          <Link to="/resume" className="text-white hover:text-yellow-400 transition-all duration-300">Resume</Link>
          <Link to="/about" className="text-white hover:text-yellow-400 transition-all duration-300">About</Link>
          <Link to="/contact" className="text-white hover:text-yellow-400 transition-all duration-300">Contact</Link>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <button onClick={toggleMenu} className="md:hidden text-white text-2xl focus:outline-none">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button onClick={toggleMenu} className="absolute top-6 right-8 text-white text-3xl">
          <FaTimes />
        </button>
        <Link to="/" className="text-white text-xl hover:text-yellow-400 transition-all duration-300" onClick={toggleMenu}>Home</Link>
        <Link to="/projects" className="text-white text-xl hover:text-yellow-400 transition-all duration-300" onClick={toggleMenu}>Projects</Link>
        <Link to="/resume" className="text-white text-xl hover:text-yellow-400 transition-all duration-300" onClick={toggleMenu}>Resume</Link>
        <Link to="/about" className="text-white text-xl hover:text-yellow-400 transition-all duration-300" onClick={toggleMenu}>About</Link>
        <Link to="/contact" className="text-white text-xl hover:text-yellow-400 transition-all duration-300" onClick={toggleMenu}>Contact</Link>
      </div>
    </nav>
  );
};

export default NavBar;
