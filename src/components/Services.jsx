import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  { title: "Nettisivut", description: "Modernit, responsiiviset verkkosivut yrityksellesi tai henkilöbrändillesi – joko täysin räätälöitynä koodattuna ratkaisuna tai WordPress-alustalla." },
  { title: "Integraatiot", description: "Yhdistän järjestelmäsi kuten lomakkeet, API:t ja sähköpostipalvelut." },
  { title: "Ylläpito & Tuki", description: "Tekninen ylläpito, korjaukset ja nopea reagointi tarpeisiisi." },
  { title: "Webhotelli & Domainit", description: "Autan sinua hankkimaan domainin ja webhotellin sekä valitsemaan sopivan hostausratkaisun." },
  { title: "Tekninen Konsultointi", description: "Neuvon ja autan teknisissä ratkaisuissa, palvelinratkaisuissa, päivityksissä ja ongelmatilanteissa asiakaslähtöisesti." },
  { title: "Brändäys & Design", description: "Avustan visuaalisessa suunnittelussa, kuten logojen, värimaailman ja sivuston ulkoasun suunnittelussa." },
];

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="grid md:grid-cols-3 gap-6 text-center dark:text-white text-gray-900">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-[#0f1f0f] via-[#003300] to-[#0f1f0f] dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 p-6 rounded-xl shadow-lg border border-green-500/20 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
            data-aos="fade-up"
            data-aos-delay={i * 100}
            data-aos-duration="800"
          >
            <h3 className="text-xl font-bold text-green-400 mb-2">{s.title}</h3>
            <p className="text-sm text-green-200">{s.description}</p>
          </div>
        ))}
      </div>
      <div
        className="mt-16 bg-gradient-to-br from-black via-[#001f0f] to-black dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 p-8 rounded-xl shadow-lg border border-green-500/20 text-center text-green-200"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <h3 className="text-2xl font-bold text-green-400 mb-4">Miksi valita minut?</h3>
        <p className="text-sm max-w-2xl mx-auto">
          Olen luotettava ja huolellinen tekijä, jolla on aito halu ymmärtää asiakkaan tarpeita.
          En veloita turhasta, vaan pyrin tarjoamaan selkeää arvoa jokaisessa projektissa.
          Palveluni on asiakaslähtöistä ja joustavaa – tavoitteeni on rakentaa pitkäaikaisia yhteistyösuhteita.
        </p>
      </div>
    </>
  );
}

export default Services;