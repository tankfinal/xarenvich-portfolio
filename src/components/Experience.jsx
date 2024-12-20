import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import xrexLogo from '../assets/company-logos/xrex.png'
import binanceLogo from '../assets/company-logos/binance.png'
import cimforceLogo from '../assets/company-logos/cimforce.png'
import aresLogo from '../assets/company-logos/ares.png'

const companyLogos = {
  XREX: xrexLogo,
  Binance: binanceLogo,
  Cimforce: cimforceLogo,
  Ares: aresLogo,
}

const Experience = () => {
  const { t } = useTranslation()
  const [activeExperience, setActiveExperience] = useState(null)

  const experiences = [
    {
      id: 'fullstack1',
      title: t('experience.positions.fullstack1.title'),
      company: t('experience.positions.fullstack1.company'),
      date: t('experience.positions.fullstack1.date'),
      year: '2023 - Present',
      points: t('experience.positions.fullstack1.points', { returnObjects: true }),
      tech: t('experience.positions.fullstack1.tech', { returnObjects: true }),
      logo: 'XREX'
    },
    {
      id: 'fullstack2',
      title: t('experience.positions.fullstack2.title'),
      company: t('experience.positions.fullstack2.company'),
      date: t('experience.positions.fullstack2.date'),
      year: '2022 - 2023',
      points: t('experience.positions.fullstack2.points', { returnObjects: true }),
      tech: t('experience.positions.fullstack2.tech', { returnObjects: true }),
      logo: 'Binance'
    },
    {
      id: 'fullstack3',
      title: t('experience.positions.fullstack3.title'),
      company: t('experience.positions.fullstack3.company'),
      date: t('experience.positions.fullstack3.date'),
      year: '2021 - 2022',
      points: t('experience.positions.fullstack3.points', { returnObjects: true }),
      tech: t('experience.positions.fullstack3.tech', { returnObjects: true }),
      logo: 'Cimforce'
    },
    {
      id: 'fullstack4',
      title: t('experience.positions.fullstack4.title'),
      company: t('experience.positions.fullstack4.company'),
      date: t('experience.positions.fullstack4.date'),
      year: '2020 - 2021',
      points: t('experience.positions.fullstack4.points', { returnObjects: true }),
      tech: t('experience.positions.fullstack4.tech', { returnObjects: true }),
      logo: 'Chiying'
    },
    {
      id: 'backend2',
      title: t('experience.positions.backend2.title'),
      company: t('experience.positions.backend2.company'),
      date: t('experience.positions.backend2.date'),
      year: '2014 - 2017',
      points: t('experience.positions.backend2.points', { returnObjects: true }),
      tech: t('experience.positions.backend2.tech', { returnObjects: true }),
      logo: 'Ares'
    }
  ]

  const timelineVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  const dotVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2 }
  }

  const contentVariants = {
    initial: { opacity: 0.8 },
    hover: { 
      opacity: 1,
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  }

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          {t('experience.title')}
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute h-full" style={{ left: '50%', width: '2px', transform: 'translateX(-50%)', backgroundColor: 'rgb(229, 231, 235)' }}>
          </div>

          {/* Timeline dots and content */}
          <div className="relative">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="mb-16 relative"
                variants={timelineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                onHoverStart={() => setActiveExperience(exp.id)}
                onHoverEnd={() => setActiveExperience(null)}
              >
                {/* Year label */}
                <div 
                  className={`absolute left-1/2 -translate-x-1/2 ${
                    index % 2 === 0 ? '-translate-y-8' : 'translate-y-8'
                  } text-sm font-medium text-gray-500 dark:text-gray-400`}
                >
                  {exp.year}
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 -translate-x-1/2">
                  <motion.div
                    className={`w-4 h-4 rounded-full cursor-pointer z-10 ${
                      activeExperience === exp.id
                        ? 'bg-primary-500 ring-4 ring-primary-200 dark:ring-primary-800'
                        : 'bg-gray-400 dark:bg-gray-600'
                    }`}
                    variants={dotVariants}
                    initial="initial"
                    whileHover="hover"
                  />
                </div>

                {/* Content */}
                <motion.div
                  className={`relative ${
                    index % 2 === 0 ? 'ml-[55%]' : 'mr-[55%]'
                  } bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-200 ${
                    activeExperience === exp.id ? 'ring-2 ring-primary-500/50' : ''
                  }`}
                  variants={contentVariants}
                  initial="initial"
                  animate={activeExperience === exp.id ? "hover" : "initial"}
                >
                  <div className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4">
                    <div className={`w-0 h-0 border-solid ${
                      index % 2 === 0
                        ? 'border-r-[12px] border-r-white dark:border-r-gray-800 -left-4'
                        : 'border-l-[12px] border-l-white dark:border-l-gray-800 -right-4'
                    } border-y-[6px] border-y-transparent absolute`} />
                  </div>
                  <div className={`${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <h3 className="text-xl font-bold mb-2 dark:text-white">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-3 mb-3">
                      {exp.logo && companyLogos[exp.logo] && (
                        <img 
                          src={companyLogos[exp.logo]} 
                          alt={exp.company} 
                          className="w-12 h-12 object-contain rounded-sm dark:bg-white dark:p-1"
                        />
                      )}
                      <p className="text-gray-600 dark:text-gray-300 text-lg">
                        {exp.company}
                      </p>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      {exp.date}
                    </p>
                  </div>
                  <div className="text-left">
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                      {exp.points.map((point, i) => (
                        <li key={i} className="mb-2">{point}</li>
                      ))}
                    </ul>
                    {exp.tech && (
                      <div className="mt-4">
                        <p className="text-sm font-semibold mb-2 dark:text-gray-300">
                          {t('experience.technologies')}:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
