import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import avatar from '../assets/profile/avatar.jpg';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Profile */}
          <div className="flex flex-col items-center justify-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative mb-8"
            >
              <div className="relative z-10">
                <div className="w-64 h-64 md:w-72 md:h-72 mx-auto overflow-hidden rounded-full border-4 border-blue-500 shadow-xl">
                  <img
                    src={avatar}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-24 h-24 border-4 border-blue-500/30 rounded-lg"
                  style={{ transform: 'rotate(45deg)' }}
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 border-4 border-blue-500/30 rounded-full"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                {t('hero.name')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-4">
                {t('hero.role')}
              </p>
              <p className="text-lg text-gray-500">
                {t('hero.description')}
              </p>
            </motion.div>
          </div>

          {/* Right Column - About Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-8 backdrop-blur-sm border border-gray-200"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              {t('about.title')}
            </h2>
            <div className="prose prose-lg">
              {t('about.content', { returnObjects: true }).map((paragraph, index) => (
                <div key={index} className="mb-4">
                  <ReactMarkdown
                    components={{
                      p: ({ children }) => <p className="mb-4 last:mb-0 text-gray-600">{children}</p>,
                      strong: ({ children }) => (
                        <strong className="text-blue-600 font-semibold">{children}</strong>
                      ),
                      a: ({ children, href }) => (
                        <a
                          href={href}
                          className="text-blue-600 hover:text-blue-700 underline"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
