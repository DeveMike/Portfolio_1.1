import React, { useEffect, useState, useRef } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

// Tumma tila oletuksena edelliseen useEffect-->
// const savedTheme = localStorage.getItem("theme");
// const isDark = savedTheme ? savedTheme === "dark" : true; // oletus on aina tumma
// setDarkMode(isDark);
// document.documentElement.classList.toggle("dark", isDark);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleTheme = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 py-4 px-6 flex justify-between items-center z-50 shadow-md transition-colors duration-300 ${
      darkMode ? 'bg-black bg-opacity-80 text-white' : 'bg-white bg-opacity-80 text-gray-900'
    }`}>
      <div className="flex items-center space-x-3">
        <img src="/Portfolio_1.1/pic/DevemikeLogo.jpg" alt="Logo" className="w-14 h-14 rounded-full" />
        <span className="font-bold text-lg bg-[url('/Portfolio_1.1/pic/matrix.jpg')] bg-cover px-3 py-1 rounded text-white">
          Mihail Rulinski
        </span>
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex gap-6 items-center">
        <a href="#hero" className="hover:text-green-400 transition duration-300">Etusivu</a>
        <a href="#about" className="hover:text-green-400 transition duration-300">Palvelut</a>
        <a href="#projects" className="hover:text-green-400 transition duration-300">Projektit</a>
        <a href="#skills" className="hover:text-green-400 transition duration-300">Osaaminen</a>
        <a href="#contact" className="hover:text-green-400 transition duration-300">Yhteys</a>
        <button onClick={toggleTheme} className="ml-4 text-xl hover:text-purple-400">
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>

      {/* Mobile menu toggle */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile menu drawer */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-64 transform transition-transform duration-300 z-50 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}
        style={{ boxShadow: '-2px 0 10px rgba(0,0,0,0.3)' }}
      >
        <div className="p-6">
          <a href="#hero" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-green-400">Etusivu</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-green-400">Palvelut</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-green-400">Projektit</a>
          <a href="#skills" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-green-400">Osaaminen</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-green-400">Yhteys</a>
          <button onClick={toggleTheme} className="block mt-4 text-xl hover:text-purple-400">
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;