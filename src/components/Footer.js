import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaTwitter, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <FaGraduationCap className="text-primary-400 text-3xl mr-2" />
              <span className="font-display text-xl font-bold text-white">EduStatic</span>
            </Link>
            <p className="mt-4 text-secondary-300">
              A frontend-only educational platform delivering high-quality learning experiences without the complexity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-secondary-300 hover:text-white">Home</Link></li>
              <li><Link to="/courses" className="text-secondary-300 hover:text-white">Courses</Link></li>
              <li><Link to="/about" className="text-secondary-300 hover:text-white">About Us</Link></li>
              <li><Link to="/faq" className="text-secondary-300 hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/courses?category=web-development" className="text-secondary-300 hover:text-white">Web Development</Link></li>
              <li><Link to="/courses?category=data-science" className="text-secondary-300 hover:text-white">Data Science</Link></li>
              <li><Link to="/courses?category=design" className="text-secondary-300 hover:text-white">Design</Link></li>
              <li><Link to="/courses?category=language" className="text-secondary-300 hover:text-white">Language</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Stay Connected</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-secondary-300 hover:text-white">
                <FaTwitter className="text-xl" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-secondary-300 hover:text-white">
                <FaYoutube className="text-xl" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-secondary-300 hover:text-white">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-secondary-300 hover:text-white">
                <FaGithub className="text-xl" />
              </a>
            </div>

          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-secondary-800 text-center text-secondary-400">
          <p>&copy; {new Date().getFullYear()} EduStatic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;