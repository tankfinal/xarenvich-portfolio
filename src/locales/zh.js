export default {
  translation: {
    nav: {
      about: "關於",
      experience: "經驗",
      projects: "專案",
      contact: "聯繫",
      skills: "技能",
      education: "學歷"
    },
    hero: {
      greeting: "",
      name: "楊幀羽",
      role: "全棧開發工程師",
      description: "一位專注於雲計算、微服務和現代網絡技術的全棧開發工程師。"
    },
    about: {
      title: "關於我",
      content: "在超過10年的工作經驗中，我持續運用各種技能解決問題。透過處理眾多挑戰和錯誤，培養了精準的問題解決能力。此外，我對研究和採用新技術以優化系統性能充滿熱情。"
    },
    experience: {
      title: "工作經驗",
      current: "至今",
      years: "年",
      positions: {
        fullstack1: {
          title: "資深軟體工程師",
          company: "幣安 Binance",
          location: "台北, 台灣",
          date: "2022年11月 - 2023年11月",
          points: [
            "使用 Java、XXL Job、Kafka、Redis、HBase、Starrocks、Mybatis 和 ElasticSearch 開發 SpringBoot 微服務",
            "使用 Python、Scala、Hive、Airflow、Spark 和 Flink 開發數據管道",
            "擔任 Scrum Master 角色，有效帶領團隊完成衝刺任務，促進協作並達成項目目標",
            "致力於新興技術的深入研究和實際應用，特別專注於 Langchain 和 Langflow 等 LLM 模型",
            "參與系統設計，為複雜挑戰提供創新解決方案"
          ],
          tech: ["Java", "Python", "Scala", "SpringBoot", "Kafka", "Redis", "HBase", "ElasticSearch", "Spark", "Flink", "XXL Job", "Starrocks", "Mybatis", "Hive", "Airflow", "Langchain", "Langflow"]
        },
        fullstack2: {
          title: "軟體副理",
          company: "上博科技 Cimforce",
          location: "台北, 台灣",
          date: "2020年4月 - 2022年10月",
          points: [
            "開發和維護使用 Java、Redis、RabbitMQ、Mybatis 和 Spring Cloud 的 SpringBoot 微服務",
            "制定並執行編碼規範、git-flow 策略和問題追蹤流程",
            "編寫系統設計文檔，執行系統建設計劃，促進跨部門溝通",
            "成功解決微服務中的複雜整合問題，包括事務管理、並發控制和數據鎖定",
            "團隊成員管理，負責招聘、培訓和工作分配協調"
          ],
          tech: ["Java", "SpringBoot", "Redis", "RabbitMQ", "Mybatis", "Spring Cloud", "Git"]
        },
        fullstack3: {
          title: "資深 Java 工程師",
          company: "持盈資訊",
          location: "台北, 台灣",
          date: "2019年8月 - 2020年3月",
          points: [
            "開發和維護使用 Java、Redis 和 Mybatis 的 SpringBoot 微服務",
            "通過實施鎖定機制、RabbitMQ 和 Redis 緩存策略等高級技術，成功解決高並發挑戰",
            "設計和實現 GameBox 和支付工具，運用設計模式無縫整合各種遊戲供應商",
            "使用 WebSocket 技術成功開發強大的網路聊天系統，提升即時通訊能力"
          ],
          tech: ["Java", "SpringBoot", "Redis", "Mybatis", "RabbitMQ", "WebSocket", "Design Patterns"]
        },
        backend1: {
          title: "Java 工程師",
          company: "合勤科技 Zyxel",
          location: "台北, 台灣",
          date: "2017年8月 - 2019年7月",
          points: [
            "使用 Java 和 Mybatis 開發和維護 Spring MVC 服務",
            "積極參與與終端用戶的會議，分析需求並撰寫系統分析（SA）和系統設計（SD）文檔",
            "主導政府專案執行，負責 5 個系統的開發和 2 個現有系統的維護"
          ],
          tech: ["Java", "Spring MVC", "Mybatis", "System Analysis", "System Design"]
        },
        backend2: {
          title: "資深軟體工程師",
          company: "華義國際 Ares",
          location: "台北, 台灣",
          date: "2014年3月 - 2017年7月",
          points: [
            "負責多個系統的維護，包括編碼、除錯和進行全面的漏洞評估",
            "管理政府專案，成功建立一個新系統並維護三個現有系統",
            "使用 Struts2 和 JDBC 主導開發後端系統，並使用 jQuery 精心打造前端介面"
          ],
          tech: ["Java", "Struts2", "JDBC", "jQuery", "System Maintenance", "Vulnerability Assessment"]
        }
      }
    },
    skills: {
      title: "技能",
      categories: {
        cloud: {
          title: "雲端技術",
          items: ["AWS", "GCP", "Azure", "Docker", "Kubernetes"]
        },
        orm: {
          title: "ORM 框架",
          items: ["Hibernate", "Mybatis", "Sequelize", "Prisma"]
        },
        frontend: {
          title: "前端技術",
          items: ["React", "Vue", "Angular", "Next.js", "Tailwind CSS"]
        },
        backend: {
          title: "後端技術",
          items: ["Node.js", "Spring Boot", "Express", "Django"]
        },
        database: {
          title: "資料庫",
          items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"]
        },
        deployment: {
          title: "部署工具",
          items: ["Jenkins", "GitLab CI", "GitHub Actions", "ArgoCD"]
        },
        bigdata: {
          title: "大數據工具",
          items: ["Hadoop", "Spark", "Flink", "Kafka"]
        },
        framework: {
          title: "框架",
          items: ["Spring Cloud", "NestJS", "FastAPI"]
        },
        versionControl: {
          title: "版本控制",
          items: ["Git", "SVN"]
        },
        other: {
          title: "其他",
          items: ["Linux", "Bash", "Python", "Java", "Scala"]
        }
      }
    },
    projects: {
      title: "專案",
      items: [
        {
          title: "電商平台",
          description: "具有即時庫存管理功能的全棧電商平台",
          tech: ["React", "Node.js", "MongoDB", "Redis", "Docker"],
          link: "https://github.com/username/project"
        },
        {
          title: "任務管理系統",
          description: "具有基於角色的訪問控制的企業任務管理系統",
          tech: ["Vue.js", "Spring Boot", "PostgreSQL", "Kubernetes"],
          link: "https://github.com/username/project"
        }
      ]
    },
    contact: {
      email: "聯繫我",
      phone: "+886-988-227-271",
      location: "台灣"
    },
    theme: {
      light: '淺色',
      dark: '深色'
    },
    language: {
      en: 'English',
      zh: '中文'
    }
  }
}
