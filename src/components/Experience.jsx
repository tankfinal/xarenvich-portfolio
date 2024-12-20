import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      company: t('experience.positions.fullstack1.company'),
      title: t('experience.positions.fullstack1.title'),
      date: t('experience.positions.fullstack1.date'),
      description: t('experience.positions.fullstack1.points', { returnObjects: true }),
      tech: t('experience.positions.fullstack1.tech', { returnObjects: true }),
    },
    {
      company: t('experience.positions.fullstack2.company'),
      title: t('experience.positions.fullstack2.title'),
      date: t('experience.positions.fullstack2.date'),
      description: t('experience.positions.fullstack2.points', { returnObjects: true }),
      tech: t('experience.positions.fullstack2.tech', { returnObjects: true }),
    },
    {
      company: t('experience.positions.fullstack3.company'),
      title: t('experience.positions.fullstack3.title'),
      date: t('experience.positions.fullstack3.date'),
      description: t('experience.positions.fullstack3.points', { returnObjects: true }),
      tech: t('experience.positions.fullstack3.tech', { returnObjects: true }),
    },
    {
      company: t('experience.positions.backend1.company'),
      title: t('experience.positions.backend1.title'),
      date: t('experience.positions.backend1.date'),
      description: t('experience.positions.backend1.points', { returnObjects: true }),
      tech: t('experience.positions.backend1.tech', { returnObjects: true }),
    },
    {
      company: t('experience.positions.backend2.company'),
      title: t('experience.positions.backend2.title'),
      date: t('experience.positions.backend2.date'),
      description: t('experience.positions.backend2.points', { returnObjects: true }),
      tech: t('experience.positions.backend2.tech', { returnObjects: true }),
    }
  ];

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent-light/70 dark:from-accent-dark dark:to-accent-dark/70">
            {t('experience.title')}
          </h2>
          <div className="mt-2 h-1 w-20 bg-accent-light/30 dark:bg-accent-dark/30 mx-auto rounded-full" />
        </motion.div>

        <div className="mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="glass-effect rounded-lg p-6 border border-white/10 dark:border-black/10 shadow-lg backdrop-blur-sm bg-white/30 dark:bg-black/30">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-accent-light dark:text-accent-dark mt-1">
                    {exp.company}
                  </p>
                  <p className="text-secondary-light dark:text-secondary-dark mt-1">
                    {exp.date}
                  </p>
                </div>

                <div className="mt-6">
                  <ul className="space-y-3 text-left">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-900 dark:text-white flex items-start">
                        <span className="text-accent-light dark:text-accent-dark mr-3">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4 justify-start">
                    {exp.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm rounded-md bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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
