import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent-light/70 dark:from-accent-dark dark:to-accent-dark/70">
            {t('contact.title')}
          </h2>
          <div className="mt-2 h-1 w-20 bg-accent-light/30 dark:bg-accent-dark/30 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-accent-light/10 dark:border-accent-dark/10" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <div className="glass-effect rounded-lg p-8 border border-white/10 dark:border-black/10 shadow-lg backdrop-blur-sm bg-white/30 dark:bg-black/30">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:aaa2003.loveyou@gmail.com"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-md text-white bg-accent-light dark:bg-accent-dark hover:opacity-90 transition-opacity"
              >
                {t('contact.email')}
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+886988227271"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-md border-2 border-accent-light dark:border-accent-dark text-accent-light dark:text-accent-dark hover:bg-accent-light hover:text-white dark:hover:bg-accent-dark dark:hover:text-white transition-colors"
              >
                {t('contact.phone')}
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
