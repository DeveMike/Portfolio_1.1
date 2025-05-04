import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Hero = () => (
  <section id="hero" className="min-h-screen flex items-center justify-center px-4 md:px-16 dark:text-white text-gray-900">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col md:flex-row items-center justify-between gap-8 w-full max-w-6xl"
    >
      <div className="flex-shrink-0">
        <img
          src="/Portfolio_1.1/pic/test.jpg"
          alt="Mihail Rulinski"
          className="w-60 h-60 md:w-[400px] md:h-[400px] object-cover rounded-full shadow-2xl transition-transform duration-500 transform hover:scale-105 hover:-rotate-2"
          style={{ objectPosition: '30% center' }}
        />
      </div>
      <div className="text-center md:text-left space-y-4 bg-black/40 dark:bg-black/40 bg-white/30 p-3 md:p-6 rounded-xl backdrop-blur-sm shadow-lg w-full md:max-w-2xl">
        <h1 className="text-lg md:text-2xl font-extrabold">
          Hei, olen Mikko – tervetuloa portfolio-sivulleni!
        </h1>
        <p className="text-xs md:text-sm dark:text-gray-300 text-gray-800">
          Ennen siirtymistä IT-alalle tein lähes yhdeksän vuoden uran kalatukussa, jossa vastasin monipuolisesti asiakaspalvelusta, kalankäsittelystä, tuotannosta ja logistiikasta. Työ opetti minulle tinkimätöntä tarkkuutta, tehokkuutta ja asiakaslähtöisyyttä käytännön tasolla.
          <br /><br />
          Tämän jälkeen kouluttauduin web-ohjelmistokehittäjäksi ja jatkoin opintojani ICT-insinööriksi, joita suoritan parhaillani toista vuotta. Opintojeni aikana olen ollut mukana muun muassa Arduino-pohjaisen pelin sekä C++/Node/MySQL-pohjaisen pankkiautomaattisovelluksen kehittämisessä. Suoritin myös näyttötöinä WordPress-verkkokaupan sekä täysin koodatun kuntosalisivuston, jossa oli ajanvarausjärjestelmä.
          <br /><br />
          Tällä hetkellä toimin ruokatorivastaavana ja tarjoan sivutoimisesti IT-palveluita yksityishenkilöille, pienyrityksille ja yhdistyksille.
          <br /><br />
          Erityisosaamistani ovat web-kehitys, ohjelmistojen testaus ja tekninen ongelmanratkaisu. Tällä hetkellä keskityn erityisesti Pythoniin, JavaScriptiin, Node.js:ään, tietokantoihin, pilvipalveluihin ja tekoälyn hyödyntämiseen rajapinnoissa.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
          <a
            href="#contact"
            className="inline-block bg-black text-green-400 border border-green-500 hover:bg-green-700 hover:text-white px-6 py-3 rounded font-semibold transition duration-300 shadow-md"
          >
            Ota yhteyttä
          </a>
          <div className="flex gap-6 text-3xl text-green-400 ml-4">
            <a href="https://github.com/DeveMike" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/mihail-rulinski-847917236" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaLinkedin />
            </a>
            <a href="https://www.youtube.com/@DeveMike" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
