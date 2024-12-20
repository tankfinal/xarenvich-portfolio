import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const projects = [
  {
    id: 'pmis',
    technologies: ["Java", "Spring Boot", "MySQL"]
  },
  {
    id: 'pmisEpa',
    technologies: ["Java", "Spring Boot", "MySQL"]
  },
  {
    id: 'motionSystem',
    technologies: ["Java", "Spring MVC", "Oracle"]
  },
  {
    id: 'cpds',
    technologies: ["Java", "Struts2", "MySQL"]
  },
  {
    id: 'tis',
    technologies: ["Java", "Spring Boot", "PostgreSQL"]
  },
  {
    id: 'kmsapp',
    technologies: ["Java", "Spring Boot", "MySQL"]
  },
  {
    id: 'badgeSystem',
    technologies: ["Java", "Spring MVC", "MySQL"]
  },
  {
    id: 'eportfolio',
    technologies: ["Java", "Spring Boot", "MongoDB"]
  },
  {
    id: 'fwmw',
    technologies: ["Java", "Spring Boot", "Redis"]
  }
];

const ProjectCard = ({ project }) => {
  const { t } = useTranslation();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-tertiary-light dark:bg-tertiary-dark rounded-lg shadow-lg"
    >
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
        {t(`projects.items.${project.id}.title`)}
      </h3>
      <p className="text-secondary-light dark:text-secondary-dark mb-2">
        {t(`projects.items.${project.id}.description`)}
      </p>
      <p className="text-accent-light dark:text-accent-dark mb-4">
        {t(`projects.items.${project.id}.client`)}
      </p>
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
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20 bg-tertiary-light/50 dark:bg-tertiary-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {t('projects.title')}
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
