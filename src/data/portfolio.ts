// Static portfolio data extracted from server seed data

export interface Skill {
  id: number;
  name: string;
  category: string;
  proficiency: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  highlights?: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  imageUrl: string;
}

export const skills: Skill[] = [
  // AI & LLM
  { id: 1, name: "LLM API Integration", category: "AI & LLM", proficiency: "Advanced" },
  { id: 2, name: "Prompt Engineering", category: "AI & LLM", proficiency: "Advanced" },
  { id: 3, name: "Streaming Outputs", category: "AI & LLM", proficiency: "Advanced" },
  { id: 4, name: "Structured Inference Pipelines", category: "AI & LLM", proficiency: "Advanced" },
  { id: 5, name: "RAG Patterns", category: "AI & LLM", proficiency: "Advanced" },

  // Frontend
  { id: 6, name: "React.js", category: "Frontend", proficiency: "Advanced" },
  { id: 7, name: "Next.js", category: "Frontend", proficiency: "Advanced" },
  { id: 8, name: "Angular", category: "Frontend", proficiency: "Advanced" },
  { id: 9, name: "Vue.js", category: "Frontend", proficiency: "Advanced" },
  { id: 10, name: "TypeScript", category: "Frontend", proficiency: "Advanced" },
  { id: 11, name: "Tailwind CSS", category: "Frontend", proficiency: "Advanced" },
  { id: 12, name: "Redux/Zustand", category: "Frontend", proficiency: "Advanced" },
  { id: 13, name: "Framer Motion", category: "Frontend", proficiency: "Advanced" },
  { id: 14, name: "GraphQL", category: "Frontend", proficiency: "Intermediate" },

  // Backend
  { id: 15, name: "Node.js", category: "Backend", proficiency: "Advanced" },
  { id: 16, name: "NestJS", category: "Backend", proficiency: "Advanced" },
  { id: 17, name: "Express.js", category: "Backend", proficiency: "Advanced" },
  { id: 18, name: "FastAPI", category: "Backend", proficiency: "Advanced" },
  { id: 19, name: "REST APIs", category: "Backend", proficiency: "Advanced" },

  // Mobile
  { id: 20, name: "React Native", category: "Mobile", proficiency: "Advanced" },
  { id: 21, name: "Flutter", category: "Mobile", proficiency: "Advanced" },
  { id: 22, name: "Expo", category: "Mobile", proficiency: "Advanced" },
  { id: 23, name: "Ionic", category: "Mobile", proficiency: "Advanced" },

  // Databases
  { id: 24, name: "PostgreSQL", category: "Databases", proficiency: "Advanced" },
  { id: 25, name: "MongoDB", category: "Databases", proficiency: "Advanced" },
  { id: 26, name: "MySQL", category: "Databases", proficiency: "Advanced" },
  { id: 27, name: "Redis", category: "Databases", proficiency: "Advanced" },

  // Cloud & DevOps
  { id: 28, name: "AWS (ECS/Lambda/RDS/S3/CloudFront/Cognito)", category: "Cloud & DevOps", proficiency: "Advanced" },
  { id: 29, name: "Docker", category: "Cloud & DevOps", proficiency: "Advanced" },
  { id: 30, name: "GitHub Actions", category: "Cloud & DevOps", proficiency: "Advanced" },
  { id: 31, name: "CloudWatch", category: "Cloud & DevOps", proficiency: "Advanced" },
  { id: 32, name: "SQS/SNS/EventBridge", category: "Cloud & DevOps", proficiency: "Advanced" },

  // Blockchain
  { id: 33, name: "Solana", category: "Blockchain", proficiency: "Advanced" },
  { id: 34, name: "Anchor", category: "Blockchain", proficiency: "Advanced" },
  { id: 35, name: "Smart Contracts", category: "Blockchain", proficiency: "Advanced" },
  { id: 36, name: "IPFS", category: "Blockchain", proficiency: "Advanced" },
  { id: 37, name: "Web3 Wallet Integrations", category: "Blockchain", proficiency: "Advanced" },

  // Tools
  { id: 38, name: "Git", category: "Tools", proficiency: "Advanced" },
  { id: 39, name: "Postman", category: "Tools", proficiency: "Advanced" },
  { id: 40, name: "Jira", category: "Tools", proficiency: "Advanced" },
  { id: 41, name: "Figma", category: "Tools", proficiency: "Advanced" },
];

export const experience: Experience[] = [
  {
    id: 1,
    role: "Senior Software Engineer & Blockchain Developer",
    company: "Apium Innovation (Pvt) Ltd",
    period: "2023 - Present",
    highlights: [
      "Architect and deliver full-stack web, mobile, and AI-powered systems in production.",
      "Build LLM-integrated platforms with real-time streaming responses and structured pipelines.",
      "Design and operate AWS cloud-native infrastructure with Docker-based CI/CD.",
      "Lead technical planning and mentor junior engineers across fintech, healthcare, and automotive domains.",
    ],
  },
  {
    id: 2,
    role: "Senior Software Engineer",
    company: "CyberStorm Asia (Pvt) Ltd",
    period: "2022 - 2023",
    highlights: [
      "Engineered scalable backend APIs and responsive frontend systems for enterprise clients.",
      "Contributed to architecture reviews and technical roadmap planning across concurrent projects.",
    ],
  },
  {
    id: 3,
    role: "Software Engineer & Salesforce Developer",
    company: "Apium Innovation (Pvt) Ltd",
    period: "2018 - 2022",
    highlights: [
      "Delivered full-stack web platforms and Salesforce CRM customizations.",
      "Built client systems for fintech, logistics, and enterprise workflows.",
    ],
  },
  {
    id: 4,
    role: "Front-End Developer",
    company: "Productive Media",
    period: "2018 - 2019",
  },
  {
    id: 5,
    role: "Engineering Intern",
    company: "CodeGen International",
    period: "2013",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Vehicle Analysis & Valuation System",
    description:
      "Architected an AI-driven valuation platform combining LLM analysis with live MMR and KBB/Bluebook data, real-time streaming output, and an interactive insights dashboard.",
    technologies: ["Node.js", "React", "LLM APIs", "Streaming"],
    link: "#",
    imageUrl: "/images/reference-image-1.jpg",
  },
  {
    id: 2,
    title: "AMC PrepPro - Medical Exam App",
    description:
      "Built a full-featured iOS/Android study app with QBank workflows, timed 150-question mock exams, performance analytics, and an offline-first data layer.",
    technologies: ["React Native", "Expo", "Node.js"],
    link: "#",
    imageUrl: "/images/reference-image-1.jpg",
  },
  {
    id: 3,
    title: "Asia Securities - Client Investment Portal",
    description:
      "Delivered a secure investment portal with real-time dashboards, account workflows, and transaction flows using Cognito auth, ECS deployment, and CloudWatch monitoring.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    link: "#",
    imageUrl: "/images/reference-image-1.jpg",
  },
  {
    id: 4,
    title: "POAP Platform - Solana NFT Minting System",
    description:
      "Engineered event-triggered Solana NFT minting with multi-wallet support, IPFS metadata pipelines, and a React-based claim experience.",
    technologies: ["Solana", "Anchor", "React", "TypeScript", "IPFS"],
    link: "#",
    imageUrl: "/images/59355f751c1e3698cc6360b1a7390094.jpg",
  },
  {
    id: 5,
    title: "Australian Carpentry Service Web",
    description:
      "Developed an Australian Carpentry Service website using Next.js within a week.",
    technologies: ["Next.js"],
    link: "https://tltcarpentry.com.au/",
    imageUrl: "/images/tlt.png",
  },
  {
    id: 6,
    title: "Sri Lanka and Australia News Web",
    description:
      "Collaborated on the development of a news website for Sri Lanka and Australia, using React.js and Node.js.",
    technologies: ["React.js", "Node.js"],
    link: "#",
    imageUrl: "/images/newsz.png",
  },
  {
    id: 7,
    title: "Moonstorm Ecommerce WordPress Website",
    description:
      "Built an ecommerce website using WordPress for selling jewelries.",
    technologies: ["WordPress"],
    link: "https://www.moonstorm.com/",
    imageUrl: "/images/moonstorm.png",
  },
  {
    id: 8,
    title: "Furgonetka Courier Delivery Service",
    description:
      "Developed a courier delivery service using PHP, JavaScript, and MySQL.",
    technologies: ["PHP", "JavaScript", "MySQL"],
    link: "https://furgonetka.pl/",
    imageUrl: "/images/furgonetka.png",
  },
  {
    id: 9,
    title: "Apium.io Company Website",
    description:
      "Built the Apium company website using WordPress within one week.",
    technologies: ["WordPress"],
    link: "https://www.apium.io/",
    imageUrl: "/images/59355f751c1e3698cc6360b1a7390094.jpg",
  },
  {
    id: 10,
    title: "Kamuda Food App",
    description:
      "Participated in the development of a food delivery application for Sri Lanka, creating web applications using Angular, Node, and MongoDB.",
    technologies: ["Angular", "Node", "MongoDB"],
    link: "#",
    imageUrl: "/images/kamuda.jpg",
  },
  {
    id: 11,
    title: "Essex Aesthetics Website",
    description:
      "Developed a static website for a skincare treatment business using HTML, CSS, and JavaScript. Completed within three weeks.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "#",
    imageUrl: "/images/essex.jpg",
  },
  {
    id: 12,
    title: "SEO Fulham Web",
    description:
      "Created a static website for an SEO agency using HTML, CSS, and JavaScript. Completed within one week.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "#",
    imageUrl: "/images/seofulham.jpg",
  },
  {
    id: 13,
    title: "ChattyBunny Application",
    description:
      "Developed a real-time chat application with modern UI/UX using React and Node.js.",
    technologies: ["React", "Node.js", "WebSocket"],
    link: "#",
    imageUrl: "/images/chattybunny.png",
  },
  {
    id: 14,
    title: "Car Rental Service",
    description:
      "Built a car rental booking platform with payment integration using modern web technologies.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "#",
    imageUrl: "/images/chcarrental.png",
  },
];
