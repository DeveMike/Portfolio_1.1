import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "WordPress Online Store",
    description: "Suunniteltu ja rakennettu lisäravinneverkkokauppa WordPressillä. Käyttäjäystävällinen ulkoasu ja helppo maksuprosessi.",
    link: "./docs/S&H.pdf",
    label: "Katso esite (PDF)",
  },
  {
    title: "Fitness Class Booking System",
    description: "HTML, CSS, JS, PHP ja MySQL-pohjainen ajanvarausjärjestelmä asiakkaille ja ohjaajille.",
    link: "./docs/SH_recervation_system.pdf",
    label: "Tutustu dokumentaatioon",
  },
  {
    title: "Adobe Premiere Trailer",
    description: "Trailerin editointi Adobe Premiere Pro:lla. Näyttävä visuaalinen demo.",
    link: "./pic/Movien trailer THE END.mp4",
    label: "Katso video",
    isVideo: true,
  },
  {
    title: "Logo – Adobe Illustrator",
    description: "Kuvitteellinen logo suunniteltu Adobe Illustratorilla.",
    link: "./docs/artb.pdf",
    label: "Lataa PDF",
  },
  {
    title: "WordPress Artist Page",
    description: "Taiteilijasivu toteutettu WordPressillä asiakkaalle.",
    link: "https://sirpa.se/",
    label: "Siirry sivustolle",
  },
  {
    title: "DigitalOcean VPS Backend",
    description: "Node.js backend-palvelin asennettuna DigitalOcean-pilvipalveluun. SSH-yhteys, npm/express-sovellus.",
    link: null,
    label: "Kuvaus tulossa",
  },
  {
    title: "AWS Amplify + Bedrock AI App",
    description: "Serverless React-sovellus AWS Amplifylla. AI reseptigeneraattori Bedrockilla (Claude).",
    link: "https://amplifyapp.com/",
    label: "Katso sovellus",
  },
  {
    title: "AWS S3 Static Website",
    description: "Stattinen verkkosivusto isännöity Amazon S3:ssa, julkinen pääsy ja bucketin asetukset konfiguroitu.",
    link: null,
    label: "Kuvaus tulossa",
  },
  {
    title: "Azure AI Image Analysis",
    description: "Python-skripti, joka analysoi kuvia käyttäen Azure Computer Vision API:a.",
    link: null,
    label: "Kuvaus tulossa",
  },
  {
    title: "Azure Speech-to-Text",
    description: "Äänestä tekstiksi -sovellus Azure Cognitive Services -palvelulla ja Pythonilla.",
    link: null,
    label: "Kuvaus tulossa",
  },
  {
    title: "RPA Script with Puppeteer",
    description: "Node.js-skripti, joka automatisoi reittihakuja HSL:n sivustolla Puppeteerilla.",
    link: null,
    label: "Kuvaus tulossa",
  },
  {
    title: "GitHub Actions CI Tests",
    description: "CI-putki Jest-testaukselle Node.js-projektissa GitHub Actionseilla.",
    link: null,
    label: "Kuvaus tulossa",
  },
  {
    title: "Render.com Auto Deploy",
    description: "Node.js-sovelluksen jatkuva julkaisu Render.comin ja GitHubin avulla.",
    link: null,
    label: "Kuvaus tulossa",
  },
  {
    title: "API Testing with Robot Framework",
    description: "Sään API-testit Robot Frameworkilla. Tulokset lokiin ja HTML-raporttiin.",
    link: null,
    label: "Kuvaus tulossa",
  }
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen py-20 px-6 max-w-5xl mx-auto text-white">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <img src="/pic/DevemikeLogo.jpg" alt="Mihail Rulinski" className="w-40 h-40 rounded-full shadow-lg" />
        <div>
          <h2 className="text-3xl font-bold mb-2">Moi! Olen Mihail</h2>
          <p className="text-gray-300 max-w-lg">
            Olen ohjelmistokehityksen opiskelija ja teknologian harrastaja. Rakastan yhdistää eri järjestelmiä ja tuottaa toimivia digitaalisia ratkaisuja – katso projektini alta!
          </p>
        </div>
      </div>

      <h2 className="text-4xl font-bold text-center mb-10">Projektit</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg border border-purple-500/20">
            <h3 className="text-xl font-bold text-purple-300 mb-2">{project.title}</h3>
            <p className="text-gray-300 text-sm mb-4">{project.description}</p>
            {project.isVideo ? (
              <video controls className="w-full rounded">
                <source src={project.link} type="video/mp4" />
              </video>
            ) : project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block text-white bg-purple-600 hover:bg-purple-500 px-4 py-1 rounded">
                {project.label}
              </a>
            ) : (
              <span className="inline-block text-gray-500 px-4 py-1 rounded">{project.label}</span>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/" className="inline-block text-sm text-purple-400 underline hover:text-purple-200">
          ← Takaisin etusivulle
        </Link>
      </div>
    </div>
  );
};

export default ProjectsPage;
