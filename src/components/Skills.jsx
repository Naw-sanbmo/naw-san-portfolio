import { useState } from "react";
import { cn } from "../lib/utils";

import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaSass,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRuby,
  SiRubyonrails,
  SiPostgresql,
  SiMysql,
  SiFigma,
  SiHeroku,
  SiJavascript,
  SiReact,
} from "react-icons/si";

const skills = [
  // Frontend
  {
    name: "React",
    icon: <SiReact color="#61DBFB" size={28} />,
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript color="#F7DF1E" size={28} />,
    category: "frontend",
  },
  {
    name: "HTML",
    icon: <FaHtml5 color="#E34F26" size={28} />,
    category: "frontend",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt color="#CC6699" size={28} />,
    category: "frontend",
  },
  {
    name: "SCSS",
    icon: <FaSass color="#CC6699" size={28} />,
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss color="#06B6D4" size={28} />,
    category: "frontend",
  },
  {
    name: "Bootstrap CSS",
    icon: <FaBootstrap color="#7952B3" size={28} />,
    category: "frontend",
  },

  // Backend
  {
    name: "Ruby on Rails",
    icon: <SiRubyonrails color="#CC0000" size={28} />,
    category: "backend",
  },
  {
    name: "Ruby",
    icon: <SiRuby color="#CC0000" size={28} />,
    category: "backend",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs color="#61DBFB" size={28} />,
    category: "backend",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql color="#336791" size={28} />,
    category: "backend",
  },
  {
    name: "MySQL",
    icon: <SiMysql color="#4479A1" size={28} />,
    category: "backend",
  },

  // Tools
  {
    name: "Git",
    icon: <FaGitAlt color="#F05032" size={28} />,
    category: "tools",
  },
  {
    name: "GitHub",
    icon: <FaGithub color="#FFFFFF" size={28} />,
    category: "tools",
  },
  {
    name: "Figma",
    icon: <SiFigma color="#61DBFB" size={28} />,
    category: "tools",
  },
  {
    name: "Heroku",
    icon: <SiHeroku color="#61DBFB" size={30} />,
    category: "tools",
  },
];

const categories = ["all", "frontend", "backend", "tools"];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-10 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">tech</span> stack
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-5 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg flex items-center gap-4">
                  {skill.icon}
                  <span>{skill.name}</span>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
