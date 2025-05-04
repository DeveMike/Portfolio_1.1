import React from "react";
import { FaApple, FaGithub } from "react-icons/fa";

const skills = [
  { name: "HTML", icon: "html.png" },
  { name: "CSS", icon: "css.png" },
  { name: "JavaScript", icon: "javascript.png" },
  { name: "Java", icon: "Java.svg.png" },
  { name: "Python", icon: "python-logo.svg" },
  { name: "C++", icon: "c+.png" },
  { name: "MySQL", icon: "Mysql.png" },
  { name: "MariaDB", icon: "Mysql.png" },
  { name: "Node.js", icon: "nodejs.png" },
  { name: "React.js", icon: "atom.png" },
  { name: "WordPress", icon: "WordPress-logotype-wmark-white.png" },
  { name: "PHP", icon: "php.svg" },
  { name: "Git", icon: "git.png" },
  { name: "GitHub Actions", icon: FaGithub },
  { name: "REST API", icon: "api.png" },
  { name: "Linux", icon: "linux.png" },
  { name: "Windows", icon: "windows.png" },
  { name: "macOS", icon: FaApple },
  { name: "Postman", icon: "Postman-logo-vertical-orange-2021.svg" },
  { name: "Figma", icon: "figma.png" },
  { name: "Adobe Premiere", icon: "adobe-premiere-seeklogo.com.svg" },
  { name: "Adobe Illustrator", icon: "adobe-illustrator-seeklogo.com.svg" },
  { name: "DirectAdmin", icon: "directadmin.svg" },
  { name: "cPanel", icon: "CPanel.svg.png" },
  { name: "Virtual Machines", icon: "VMware.svg.png" },
  { name: "Arduino", icon: "Arduino_Logo.svg" },
  { name: "CI/CD", icon: "agile.png" },
  { name: "Microsoft Azure", icon: "Azure-AI.svg" },
  { name: "AWS", icon: "aws.png" },
  { name: "DigitalOcean", icon: "DigitalOcean_logo.svg" }
];

const Skills = () => (
  <div className="px-4 py-8">
    <div className="bg-black/60 dark:bg-gray-800/60 p-6 rounded-xl shadow-lg border border-green-500/20 transition-all duration-300 backdrop-blur-md">
      <div className="overflow-x-auto">
        <div
          className="flex flex-wrap justify-center gap-6 py-8 dark:text-white text-gray-900 px-4
        sm:max-h-none max-h-[240px] overflow-y-auto"
          style={{ scrollbarWidth: "thin" }}
        >
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 w-20">
              {typeof skill.icon === "string" ? (
                <img
                  src={`./pic/${skill.icon}`}
                  alt={skill.name}
                  className="w-14 h-14 object-contain transition-transform hover:scale-110"
                />
              ) : (
                <skill.icon className="w-14 h-14 text-green-400 hover:scale-110 transition-transform" />
              )}
              <span className="text-xs font-medium text-center text-green-400 dark:text-green-400">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
