import React, { useState } from "react";
import MatrixRain from "./components/MatrixRain";

const projects = [
  {
    title: "WordPress Online Store",
    description: "Suunniteltu ja rakennettu lisäravinneverkkokauppa WordPressillä. Käyttäjäystävällinen ulkoasu ja helppo maksuprosessi.",
    link: "docs/S&H.pdf",
    label: "Katso esite (PDF)",
  },
  {
    title: "Fitness Class Booking System",
    description: "HTML, CSS, JS, PHP ja MySQL-pohjainen ajanvarausjärjestelmä asiakkaille ja ohjaajille.",
    link: "docs/SH_recervation_system.pdf",
    label: "Tutustu dokumentaatioon",
  },
  {
    title: "Adobe Premiere Trailer",
    description: "Trailerin editointi Adobe Premiere Pro:lla. Näyttävä visuaalinen demo.",
    link: "pic/Movien trailer THE END.mp4",
    label: "Katso video",
    isVideo: true,
  },
  {
    title: "WordPress Artist Page",
    description: "Taiteilijasivu toteutettu WordPressillä asiakkaalle.",
    link: "https://sirpa.se/",
    label: "Siirry sivustolle",
  },
  {
    title: "AWS Amplify + Bedrock AI App",
    description: "Serverless React-sovellus AWS Amplifylla. AI reseptigeneraattori Bedrockilla (Claude).",
    link: "https://amplifyapp.com/",
    label: "Katso sovellus",
  },
  {
    title: "Azure DevOps CI/CD Pipeline",
    description: "Automatisoitu CI/CD-putki Azure DevOpsilla, joka mahdollistaa nopean ja luotettavan ohjelmistojulkaisun.",
    link: "docs/azure-devops-pipeline.pdf",
    label: "Lue lisää",
  },
  {
    title: "Google Cloud Functions Microservice",
    description: "Serverless-mikropalvelu toteutettu Google Cloud Functions -alustalla, joka käsittelee reaaliaikaisia tapahtumia.",
    link: "https://console.cloud.google.com/functions",
    label: "Katso demo",
  },
  {
    title: "Dockerized Node.js App on AWS ECS",
    description: "Node.js-sovellus kontitettuna Dockerilla ja ajettuna AWS Elastic Container Servicessä skaalautuvuutta varten.",
    link: "docs/docker-ecs-guide.pdf",
    label: "Tutustu oppaaseen",
  },
  {
    title: "Coming Soon Project 1",
    description: "Tulossa pian – uusi projekti työn alla.",
    link: "#",
    label: "Tulossa"
  },
  {
    title: "Coming Soon Project 2",
    description: "Tulossa pian – uusi projekti työn alla.",
    link: "#",
    label: "Tulossa"
  }
];

const ProjectCarousel = () => {
  const [current] = useState(0);

  return (
    <div className="relative w-full group h-[200px] hover:h-[700px] transition-all duration-700 ease-in-out overflow-hidden mt-10">
      <div
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && document.getElementById('project-box')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute top-0 left-0 w-full h-full z-10 bg-transparent text-green-300 font-semibold tracking-wide pointer-events-auto group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
      >
        <span className="hidden sm:inline">Vie hiiri tähän nähdäksesi projektit</span>
        <span className="inline sm:hidden">Paina nähdäksesi projektit</span>
      </div>

      <div className="absolute top-0 left-0 w-full h-3/5 bg-gradient-to-b from-[#0f1f0f] via-[#001f0f] to-transparent dark:from-gray-800 dark:via-gray-900 dark:to-transparent transition-transform duration-500 ease-in-out origin-bottom group-hover:-translate-y-[120%] z-0 rounded-xl" />
      <div className="absolute bottom-0 left-0 w-full h-3/5 bg-gradient-to-t from-[#0f1f0f] via-[#001f0f] to-transparent dark:from-gray-800 dark:via-gray-900 dark:to-transparent transition-transform duration-500 ease-in-out origin-top group-hover:translate-y-[120%] z-0 rounded-xl" />

      <MatrixRain className="absolute top-0 left-0 w-full h-[700px] opacity-10 z-0 pointer-events-none" />

      <div
        id="project-box"
        className="absolute top-0 left-0 right-0 bottom-0 h-[700px] p-4 flex items-start justify-center opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-700 z-20 overflow-y-auto scrollbar-thin scrollbar-thumb-green-600/40 hover:scrollbar-thumb-green-400/60 relative bg-black/60 backdrop-blur-sm"
      >
        <div className="w-full max-w-6xl bg-gradient-to-br from-black via-[#001f0f] to-black dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 p-6 shadow-2xl border border-green-500/20 backdrop-blur-md rounded-xl">
          <h2 className="text-2xl font-bold text-green-400 mb-4 text-center">Projektit</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#0f1f0f] dark:bg-gray-800 p-4 rounded shadow border border-green-500/10 transform hover:scale-[1.02] hover:-translate-y-1 transition duration-300 shadow-[0_0_10px_#00ff00] hover:shadow-[0_0_20px_#00ff00]"
              >
                <h3 className="text-lg font-semibold text-green-400">{project.title}</h3>
                <p className="text-sm text-green-200 mb-2">{project.description}</p>
                {project.isVideo ? (
                  <video controls className="w-full rounded">
                    <source src={project.link} type="video/mp4" />
                  </video>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 text-sm text-black dark:text-black bg-green-400 hover:bg-green-300 px-3 py-1 rounded transition"
                  >
                    {project.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;