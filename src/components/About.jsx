import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            {t('about.title')}
          </h2>
        </motion.div>

        <div className="space-y-6">
          {t('about.content', { returnObjects: true }).map((paragraph, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="prose dark:prose-invert max-w-none">
                <ReactMarkdown>{paragraph}</ReactMarkdown>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
