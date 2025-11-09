import { ArrowRight, Github, X } from "lucide-react";
import { useState } from "react";

const myProjects = [
  {
    id: 1,
    title: "BUKI",
    description: "Multi lingual children's story app BUKI",
    image: "/projects/buki.png",
    tags: ["Ruby on Rails", "Bootstrap", "Javascript", "Postgress"],
    githubUrl: "https://github.com/Naw-sanbmo/BUKI",
  },
  {
    id: 2,
    title: "React Quiz",
    description:
      "An interactive web application that allows users to take multiple-choice quizzes on various topics.",
    image: "/projects/reactquiz.png",
    tags: ["TypeScript", "Create react app", "CSS"],
    githubUrl: "https://github.com/Naw-sanbmo/React-Quiz",
  },
  {
    id: 3,
    title: "UsePopcorn",
    description:
      "A dynamic web application that allows users to search for movies, explore details, and manage their personal watchlist.",
    image: "/projects/popcorn.png",
    tags: ["React", "Node.js", "CSS"],
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Astrofleet",
    description:
      "a futuristic web application that lets users browse, book, and rent spaceships for space travel, similar to how Airbnb works for homes.",
    image: "/projects/astrofleet.png",
    tags: ["Ruby on Rails", "Bootstrap", "Javascript"],
     githubUrl: "https://github.com/Naw-sanbmo/AstroFleet",
  },
  {
    id: 5,
    title: "WorldWise",
    description:
      "Explore the world, keep track of places you’ve visited, and bookmark destinations",
    image: "/projects/worldwise.png",
    tags: ["React", "Node.js", "Vite", "Tailwind CSS"],
    githubUrl: "https://github.com/Naw-sanbmo/WorldWise",
  },
  {
    id: 6,
    title: "Cocktails Paradise",
    description:
      "Let Users explore, create, and enjoy cocktails using available ingredients. Users can mix and match ingredients to discover new drink recipes or follow existing ones",
    image: "/projects/cocktails.png",
    tags: ["Ruby on Rails", "Bootstrap"],
    githubUrl: "#",
  },
];

export const Projects = () => {
  // State for modal
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="projects" className="py-10 px-4 relative">
      <div className="container mx-auto max-w-8xl">
        <h2 className="text-4xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          A showcase of the projects I’ve built to sharpen my programming
          expertise.
        </p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* Image */}
              <div
                className="h-48 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(project.image)} // open modal
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Naw-sanbmo"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/*  Modal for big image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-full max-h-full">
            <button
              className="absolute top-2 right-2 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>

            <img
              src={selectedImage}
              alt="Project Preview"
              className="max-w-[90vw] max-h-[80vh] w-auto h-auto rounded-lg shadow-2xl object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};
