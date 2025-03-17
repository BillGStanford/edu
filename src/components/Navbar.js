import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaGraduationCap, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <FaGraduationCap className="text-primary-600 text-3xl mr-2" />
            <span className="font-display text-xl font-bold text-secondary-900">EduStatic</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className="font-medium text-secondary-800 hover:text-primary-600">Home</Link>
            <Link to="/courses" className="font-medium text-secondary-800 hover:text-primary-600">Courses</Link>
            <Link to="/about" className="font-medium text-secondary-800 hover:text-primary-600">About</Link>
          </div>


          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-secondary-800 hover:text-primary-600">
              {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="font-medium text-secondary-800 hover:text-primary-600" onClick={closeMenu}>Home</Link>
              <Link to="/courses" className="font-medium text-secondary-800 hover:text-primary-600" onClick={closeMenu}>Courses</Link>
              <Link to="/about" className="font-medium text-secondary-800 hover:text-primary-600" onClick={closeMenu}>About</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;