import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import eCommerce from "../../assets/projects/e-commerce.png";
import portfolio from "../../assets/projects/BootStrap-Portfolio.png";
import yummy from "../../assets/projects/Yummy.png";
import mealify from "../../assets/projects/Mealify.png";
import eats from "../../assets/projects/Eats&Treats.png";
import drum from "../../assets/projects/drum-kit.png";

const projects = [
  {
    id: 1,
    image: eCommerce,
    title: "E-Commerce Website",
    description:
      "A responsive e-commerce site built with React and Tailwind CSS.",
    liveDemo: "https://e-commerce-rho-red-13.vercel.app",
  },
  {
    id: 2,
    image: portfolio,
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with JavaScript and Bootstrap",
    liveDemo: "https://3omda8.github.io/Portfolio-BootStrap-/",
  },
  {
    id: 3,
    image: yummy,
    title: "Yummy Website",
    description:
      "A modern website about food built with JavaScript and Bootstrap",
    liveDemo: "https://3omda8.github.io/Yummy/",
  },
  {
    id: 4,
    image: mealify,
    title: "Mealify Website",
    description:
      "A modern responsive Restaurant website built with html and css",
    liveDemo: "https://3omda8.github.io/Mealify/",
  },
  {
    id: 5,
    image: drum,
    title: "Drum-Kit Website",
    description: "A modern drums game website built with JavaScript ",
    liveDemo: "https://3omda8.github.io/Drum-Kit/",
  },
  {
    id: 6,
    image: eats,
    title: "Eats&Treats Website",
    description: "A modern responsive grocery website built with html and css",
    liveDemo: "https://3omda8.github.io/eats_and_treats/",
  },
];

function Projects() {
  return (
    <main className="secondary-bg py-6">
      <h2 className="text-4xl font-bold py-6 text-center text-orange-900">
        My Projects
      </h2>
      <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}

export default Projects;
