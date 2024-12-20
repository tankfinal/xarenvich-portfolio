import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Pmis",
    description: "Purchase Manager Information System",
    client: "New Taipei City Government",
    technologies: ["Java", "Spring Boot", "MySQL"]
  },
  {
    title: "PmisEPA",
    description: "Purchase Manager Information System in EPA",
    client: "Environment Protection Administration",
    technologies: ["Java", "Spring Boot", "MySQL"]
  },
  {
    title: "Motion Integration and Query System",
    description: "misq.ly.gov.tw",
    client: "The Legislative Yuan",
    technologies: ["Java", "Spring MVC", "Oracle"]
  },
  {
    title: "CPDS",
    description: "Property Declaration and Checking System",
    client: "The Control Yuan",
    technologies: ["Java", "Struts2", "MySQL"]
  },
  {
    title: "Tis",
    description: "Trace Issue System",
    client: "National Security Bureau",
    technologies: ["Java", "Spring Boot", "PostgreSQL"]
  },
  {
    title: "Kmsapp",
    description: "USB Device Transmission System for Army",
    client: "National Security Bureau",
    technologies: ["Java", "Spring Boot", "MySQL"]
  },
  {
    title: "Badge Application System",
    description: "www.mittw.org.tw/Home",
    client: "Industrial Development Bureau",
    technologies: ["Java", "Spring MVC", "MySQL"]
  },
  {
    title: "E-portfolio",
    description: "Medical Teaching Resources",
    client: "National Taiwan University Hospital",
    technologies: ["Java", "Spring Boot", "MongoDB"]
  },
  {
    title: "Fwmw",
    description: "Firewall Middleware System",
    client: "Zyxel Communications Corp.",
    technologies: ["Java", "Spring Boot", "Redis"]
  }
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-tertiary-light dark:bg-tertiary-dark rounded-lg shadow-lg"
    >
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
      <p className="text-secondary-light dark:text-secondary-dark mb-2">{project.description}</p>
      <p className="text-accent-light dark:text-accent-dark mb-4">{project.client}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-tertiary-light/50 dark:bg-tertiary-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Project Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
