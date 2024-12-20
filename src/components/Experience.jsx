import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPinIcon } from '@heroicons/react/24/outline';

const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      title: t('experience.positions.fullstack1.title'),
      company: t('experience.positions.fullstack1.company'),
      location: t('experience.positions.fullstack1.location'),
      date: t('experience.positions.fullstack1.date'),
      points: t('experience.positions.fullstack1.points', { returnObjects: true }),
      tech: t('experience.positions.fullstack1.tech', { returnObjects: true }),
    },
    {
      title: t('experience.positions.fullstack2.title'),
      company: t('experience.positions.fullstack2.company'),
      location: t('experience.positions.fullstack2.location'),
      date: t('experience.positions.fullstack2.date'),
      points: t('experience.positions.fullstack2.points', { returnObjects: true }),
      tech: t('experience.positions.fullstack2.tech', { returnObjects: true }),
    },
    {
      title: t('experience.positions.fullstack3.title'),
      company: t('experience.positions.fullstack3.company'),
      location: t('experience.positions.fullstack3.location'),
      date: t('experience.positions.fullstack3.date'),
      points: t('experience.positions.fullstack3.points', { returnObjects: true }),
      tech: t('experience.positions.fullstack3.tech', { returnObjects: true }),
    },
    {
      title: t('experience.positions.backend1.title'),
      company: t('experience.positions.backend1.company'),
      location: t('experience.positions.backend1.location'),
      date: t('experience.positions.backend1.date'),
      points: t('experience.positions.backend1.points', { returnObjects: true }),
      tech: t('experience.positions.backend1.tech', { returnObjects: true }),
    },
    {
      title: t('experience.positions.backend2.title'),
      company: t('experience.positions.backend2.company'),
      location: t('experience.positions.backend2.location'),
      date: t('experience.positions.backend2.date'),
      points: t('experience.positions.backend2.points', { returnObjects: true }),
      tech: t('experience.positions.backend2.tech', { returnObjects: true }),
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            {t('experience.title')}
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="relative"
            >
              <div className="glass-effect rounded-lg p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-accent-light dark:text-accent-dark">
                      {exp.company}
                    </p>
                    <div className="flex items-center mt-1 text-secondary-light dark:text-secondary-dark">
                      <MapPinIcon className="w-4 h-4 mr-1" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <p className="text-secondary-light dark:text-secondary-dark mt-2 md:mt-0 md:ml-4 whitespace-nowrap">
                    {exp.date}
                  </p>
                </div>

                <ul className="list-disc space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  {exp.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-left">
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
