import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Binance",
    location: "Taipei, Taiwan",
    period: "Nov. 2022 - Nov.2023",
    points: [
      "Developed SpringBoot microservices using Java, XXL Job, Kafka, Redis, HBase, Starrocks, Mybatis, and ElasticSearch.",
      "Developed data pipelines using Python, Scala, Hive, Airflow, Spark, and Flink.",
      "Assumed the role of Scrum Master, effectively leading teams during Sprints.",
      "Dedicated to in-depth research of LLM-based models like Langchain and Langflow.",
    ],
  },
  {
    title: "Software Deputy Manager",
    company: "Cimforce International Limited",
    location: "Taipei, Taiwan",
    period: "Apr. 2020 - Oct. 2022",
    points: [
      "Developed and maintained SpringBoot microservices using Java, Redis, RabbitMQ, Mybatis, and Spring Cloud.",
      "Formulated coding guidelines, git-flow strategies, and issue-tracking processes.",
      "Successfully resolved integration issues within microservices.",
      "Team member management, overseeing recruitment, training, and work assignments.",
    ],
  },
  // Add more experiences...
];

const ExperienceCard = ({ experience }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-lg bg-tertiary-light dark:bg-tertiary-dark shadow-lg"
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.title}</h3>
      <p className="text-accent-light dark:text-accent-dark">{experience.company}</p>
      <p className="text-secondary-light dark:text-secondary-dark">{experience.location}</p>
      <p className="text-sm text-secondary-light dark:text-secondary-dark mb-4">{experience.period}</p>
      <ul className="list-disc list-inside space-y-2">
        {experience.points.map((point, index) => (
          <li key={index} className="text-gray-700 dark:text-gray-300">
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Professional Experience
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
