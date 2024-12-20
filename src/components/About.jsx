import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent-light/70 dark:from-accent-dark dark:to-accent-dark/70">
            {t('about.title')}
          </h2>
          <div className="mt-2 h-1 w-20 bg-accent-light/30 dark:bg-accent-dark/30 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass-effect rounded-lg p-8 border border-white/10 dark:border-black/10 shadow-lg backdrop-blur-sm bg-white/30 dark:bg-black/30">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="space-y-6 text-gray-900 dark:text-white leading-relaxed">
                {t('about.content', { returnObjects: true }).map((paragraph, index) => (
                  <div key={index} className="indent-8">
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => <p className="mb-6 last:mb-0">{children}</p>,
                        strong: ({ children }) => <strong className="text-accent-light dark:text-accent-dark">{children}</strong>,
                        a: ({ children, href }) => (
                          <a
                            href={href}
                            className="text-accent-light dark:text-accent-dark hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {children}
                          </a>
                        ),
                      }}
                    >
                      {paragraph}
                    </ReactMarkdown>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
