import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setClick(!click);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setClick(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div
            className="text-white font-bold text-xl cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            MyPortfolio
          </div>

          <div className="md:hidden">
            <button
              onClick={handleClick}
              className="text-white hover:text-gray-200 transition-colors"
            >
              {click ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          <ul
            className={`${
              click
                ? 'absolute top-16 left-0 w-full bg-gradient-to-r from-purple-600 to-blue-500'
                : 'hidden'
            } md:flex md:items-center md:static md:w-auto md:bg-transparent`}
          >
            {[
              'home',
              'about',
              'resume',
              'skills',
              'projects',
              'contact',
              'contribution',
            ].map((item) => (
              <li key={item} className="md:ml-8">
                <div
                  onClick={() => scrollToSection(item)}
                  className="text-white hover:text-gray-200 cursor-pointer py-4 md:py-0 px-4 md:px-0 capitalize transition-colors"
                >
                  {item}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;