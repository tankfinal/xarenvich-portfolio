import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const ProjectAchievements = () => {
  const { t } = useTranslation();

  const achievements = [
    'projectCount',
    'experience',
    'clients',
    'awards'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('achievements.title')}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement) => (
            <motion.div
              key={achievement}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center p-6 bg-white rounded-lg shadow-lg"
            >
              <div className="text-4xl font-bold text-amber-500 mb-2">
                {t(`achievements.items.${achievement}.number`)}
              </div>
              <div className="text-gray-600 font-medium">
                {t(`achievements.items.${achievement}.label`)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectAchievements;
