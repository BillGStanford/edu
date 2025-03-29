import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaGraduationCap, FaSearch, FaUser, FaBook, FaInfoCircle, FaHome } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const nav = document.getElementById('mobile-menu');
      if (isOpen && nav && !nav.contains(event.target) && !event.target.closest('button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <FaGraduationCap className="text-primary-600 text-3xl mr-2" />
            <span className="font-display text-xl font-bold text-secondary-900">EduStatic</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className="font-medium text-secondary-800 hover:text-primary-600 transition duration-300">Home</Link>
            <Link to="/courses" className="font-medium text-secondary-800 hover:text-primary-600 transition duration-300">Courses</Link>
            <Link to="/about" className="font-medium text-secondary-800 hover:text-primary-600 transition duration-300">About</Link>
            <Link to="/partner" className="font-medium text-secondary-800 hover:text-primary-600 transition duration-300">Partner</Link>
          
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-secondary-800 hover:text-primary-600 transition duration-300 focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Overlay with slide-in animation */}
        <div 
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={closeMenu}
        ></div>
        
        <div 
          id="mobile-menu"
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Menu Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <div className="flex items-center">
                <FaGraduationCap className="text-primary-600 text-2xl mr-2" />
                <span className="font-display text-lg font-bold text-secondary-900">EduStatic</span>
              </div>
              <button 
                onClick={closeMenu}
                className="text-secondary-800 hover:text-primary-600"
                aria-label="Close menu"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
          
            
            {/* Menu Items */}
            <div className="flex-grow overflow-y-auto py-2">
              <div className="flex flex-col space-y-1">
                <Link 
                  to="/" 
                  className="flex items-center px-4 py-3 font-medium text-secondary-800 hover:bg-gray-100 hover:text-primary-600" 
                  onClick={closeMenu}
                >
                  <FaHome className="mr-3 text-primary-600" />
                  Home
                </Link>
                <Link 
                  to="/courses" 
                  className="flex items-center px-4 py-3 font-medium text-secondary-800 hover:bg-gray-100 hover:text-primary-600" 
                  onClick={closeMenu}
                >
                  <FaBook className="mr-3 text-primary-600" />
                  Courses
                </Link>
                <Link 
                  to="/about" 
                  className="flex items-center px-4 py-3 font-medium text-secondary-800 hover:bg-gray-100 hover:text-primary-600" 
                  onClick={closeMenu}
                >
                  <FaInfoCircle className="mr-3 text-primary-600" />
                  About
                </Link>
              </div>
              
            </div>
        
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;