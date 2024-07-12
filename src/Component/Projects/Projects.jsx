// src/components/Projects.js

import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "battle-for-supremacy",
      description: "Battle for Supremacy typically refers to a competitive struggle",
      imageUrl: "https://i.ibb.co/TKMx34Q/Screenshot-2024-07-03-224345.png",
      tags: ["JavaScript", "React", "Tailwind CSS", "DaisyUI"],
      live: "https://b9-battle-for-supremacy.web.app/",
      github:"https://github.com/utpolra1/B9-Battle-For-Supremacy",
      server:'https://github.com/utpolra1/B9-Battle-For-Supremacy-Server'
    },
    {
      id: 2,
      title: "crud-and-jwt",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "https://i.ibb.co/hcgr5PM/Screenshot-2024-07-03-230103.png",
      tags: ["JavaScript", "React", "Tailwind CSS", "DaisyUI"],
      live: "https://b9-crud-and-jwt-client.web.app/",
      github:"https://github.com/utpolra1/CRUD-and-JWT-Client",
      server:'https://github.com/utpolra1/CRUD-and-JWT-server'
    },
    {
      id: 3,
      title: "real-estate-99389",
      description:
        "Real estate refers to the property consisting ",
      imageUrl: "https://i.ibb.co/9p0cDvY/Screenshot-2024-07-03-232612.png",
      tags: ["JavaScript", "CSS", "HTML","React","DaisyUI",],
      live: "https://b9a9-real-estate-99389.web.app/",
      github:"https://github.com/utpolra1/assinment-9"
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900 to-purple-900 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-blue-950 rounded-lg shadow-md p-2 text-white"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="mb-4 rounded-md h-80 w-96"
                />
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className=" mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-800 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-2 pt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    Live App
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-accent"
                  >
                    Github Client Code
                  </a>
                  <a
                    href={project.server}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-accent"
                  >
                    Github Server
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;