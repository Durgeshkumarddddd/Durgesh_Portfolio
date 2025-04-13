import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Contribution from "./components/Contribution";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import Certifications from "./components/Certifications";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => setLoading(false), 2000);}, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    document.documentElement.classList.toggle("dark");
  };

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Preloader key="preloader" />
      ) : (
        <div
          className={`min-h-screen transition-colors duration-300 ${
            theme === "dark" ? "dark bg-gray-900 text-white" : "bg-white text-black"
          }`}
        >
          <CustomCursor />

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
          >
            {theme === "light" ? (
              <FaMoon className="text-gray-800" />
            ) : (
              <FaSun className="text-yellow-400" />
            )}
          </button>

          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="grid grid-cols-1">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            {/* <Testimonials /> */}
            <Certifications />
            <Stats />
            <Contribution />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </AnimatePresence>
  );
};

export default App;
