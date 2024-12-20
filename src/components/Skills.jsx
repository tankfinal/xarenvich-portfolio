import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const skillCategories = [
  {
    id: 'cloud',
    skills: ["Eureka", "ALB", "Apollo", "Spring Gateway", "OpenFeign", "Alibaba Seata", "Nacos", "AWS"]
  },
  {
    id: 'orm',
    skills: ["Mybatis Plus", "Hibernate", "JPA", "JDBC"]
  },
  {
    id: 'frontend',
    skills: ["JavaScript", "JQuery", "Bootstrap"]
  },
  {
    id: 'versionControl',
    skills: ["Git", "SVN", "Flyway", "Liquibase"]
  },
  {
    id: 'deployment',
    skills: ["Docker", "Gitlab", "Linux", "GitHub", "Kubernetes"]
  },
  {
    id: 'backend',
    skills: ["RabbitMQ", "Maven", "Gradle", "Swagger", "SFTP", "Crystal Report", "Web Socket", "Multi-Thread", "JWT", "Spring Security", "ElasticSearch", "XXL Job", "Sitemesh"]
  },
  {
    id: 'bigdata',
    skills: ["Airflow", "Flink", "Spark"]
  },
  {
    id: 'framework',
    skills: ["Struts2", "Struts", "Spring Boot", "Spring MVC"]
  },
  {
    id: 'database',
    skills: ["MySQL", "MSSQL", "MariaDB", "Redis", "Starrocks", "HBase"]
  },
  {
    id: 'others',
    skills: ["Copilot", "CodeLlama", "Mantis", "Redmine", "TFS", "Grafana", "SBA", "Jaeger", "Kibana", "Jira", "Confluence"]
  }
];

const Skills = () => {
  const { t } = useTranslation();
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {t('skills.title')}
        </h2>
        
        <div className="hexagon-grid">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="hexagon-wrapper"
              onMouseEnter={() => setActiveSkill(category)}
              onMouseLeave={() => setActiveSkill(null)}
            >
              <div className="hexagon">
                <div className="hexagon-content">
                  <span className="hexagon-title">{t(`skills.categories.${category.id}`)}</span>
                </div>
              </div>
              
              {activeSkill === category && (
                <div className="skill-popup">
                  <div className="skill-popup-header">
                    <h3 className="text-xl font-bold">{t(`skills.categories.${category.id}`)}</h3>
                  </div>
                  <div className="skill-popup-content">
                    {category.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
