import React from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ProjectCarousel from "./ProjectCarousel";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const canvas = document.getElementById("matrix-bg");
    const ctx = canvas.getContext("2d");

    const scale = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * scale;
    canvas.height = window.innerHeight * scale;
    const logicalWidth = canvas.width / scale;
    ctx.scale(scale, scale);

    const chars = "アァイィウエカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const fontSize = 8;
    const columns = logicalWidth / fontSize;
    const drops = Array.from({ length: Math.floor(columns) }, () =>
      Math.floor(Math.random() * canvas.height / fontSize)
    );

    const draw = () => {
      ctx.fillStyle = document.documentElement.classList.contains("dark")
        ? "rgba(0, 0, 0, 0.05)"
        : "rgba(255, 255, 255, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0";
      ctx.font = `${fontSize}px 'Courier New', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-10 bg-white text-gray-900 dark:bg-gray-900 dark:text-white font-sans scroll-smooth">
      <canvas
        id="matrix-bg"
        width={window.innerWidth}
        height={window.innerHeight}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />
      <div className="absolute top-0 left-0 w-full h-full -z-10 dark:hidden bg-gray-300/60" />

      <Navbar />
      <Hero />
      <Section
        id="about"
        title={
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Palvelut Asiakkaille
          </h2>
        }
      >
        <Services />
      </Section>
      <Section
        id="projects"
        title={
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Projektit
          </h2>
        }
      >
        <ProjectCarousel />
      </Section>
      <Section
        id="skills"
        title={
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Osaaminen
          </h2>
        }
      >
        <Skills />
      </Section>
      <Section
        id="contact"
        title={
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ota yhteyttä
          </h2>
        }
      >
        <Contact />
      </Section>
      <Footer />

      <div className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded shadow z-50">
        <a href="https://forms.gle/JhtY3dMNpprSZ52f8" target="_blank" rel="noopener noreferrer">Request CV!</a>
      </div>
    </div>
  );
};

export default App;