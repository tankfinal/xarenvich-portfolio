import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Cloud",
    skills: ["Eureka", "ALB", "Apollo", "Spring Gateway", "OpenFeign", "Alibaba Seata", "Nacos", "AWS"]
  },
  {
    title: "ORM",
    skills: ["Mybatis Plus", "Hibernate", "JPA", "JDBC"]
  },
  {
    title: "Front-End",
    skills: ["JavaScript", "JQuery", "Bootstrap"]
  },
  {
    title: "Version Control",
    skills: ["Git", "SVN", "Flyway", "Liquibase"]
  },
  {
    title: "Deployment",
    skills: ["Docker", "Gitlab", "Linux", "GitHub", "Kubernetes"]
  },
  {
    title: "Back-End",
    skills: ["RabbitMQ", "Maven", "Gradle", "Swagger", "SFTP", "Crystal Report", "Web Socket", "Multi-Thread", "JWT", "Spring Security", "ElasticSearch", "XXL Job", "Sitemesh"]
  },
  {
    title: "BigData Tools",
    skills: ["Airflow", "Flink", "Spark"]
  },
  {
    title: "Framework",
    skills: ["Struts2", "Struts", "Spring Boot", "Spring MVC"]
  },
  {
    title: "Database",
    skills: ["MySQL", "MSSQL", "MariaDB", "Redis", "Starrocks", "HBase"]
  },
  {
    title: "Others",
    skills: ["Copilot", "CodeLlama", "Mantis", "Redmine", "TFS", "Grafana", "SBA", "Jaeger", "Kibana", "Jira", "Confluence"]
  }
];

const SkillCategory = ({ category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-tertiary-light dark:bg-tertiary-dark rounded-lg shadow-lg"
    >
      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{category.title}</h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Professional Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
