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
  // Front-End
  { id: 1, name: "HTML5", category: "Front-End", proficiency: "Advance" },
  { id: 2, name: "CSS3", category: "Front-End", proficiency: "Advance" },
  { id: 3, name: "JavaScript", category: "Front-End", proficiency: "Advance" },
  { id: 4, name: "TypeScript", category: "Front-End", proficiency: "Advance" },
  { id: 5, name: "React", category: "Front-End", proficiency: "Advance" },
  { id: 6, name: "Next.js", category: "Front-End", proficiency: "Advance" },
  {
    id: 7,
    name: "Angular",
    category: "Front-End",
    proficiency: "Intermediate",
  },
  { id: 8, name: "Vue.js", category: "Front-End", proficiency: "Intermediate" },
  {
    id: 9,
    name: "Tailwind CSS",
    category: "Front-End",
    proficiency: "Advance",
  },
  { id: 10, name: "SASS/SCSS", category: "Front-End", proficiency: "Advance" },

  // Back-End
  { id: 11, name: "Node.js", category: "Back-End", proficiency: "Advance" },
  { id: 12, name: "Express.js", category: "Back-End", proficiency: "Advance" },
  { id: 13, name: "NestJS", category: "Back-End", proficiency: "Intermediate" },
  { id: 14, name: "Java", category: "Back-End", proficiency: "Advance" },
  {
    id: 15,
    name: "Spring Boot",
    category: "Back-End",
    proficiency: "Intermediate",
  },
  { id: 16, name: "Python", category: "Back-End", proficiency: "Intermediate" },
  {
    id: 17,
    name: "FastAPI",
    category: "Back-End",
    proficiency: "Intermediate",
  },
  { id: 18, name: "PHP", category: "Back-End", proficiency: "Advance" },
  {
    id: 19,
    name: "Laravel",
    category: "Back-End",
    proficiency: "Intermediate",
  },
  { id: 20, name: "Go", category: "Back-End", proficiency: "Beginner" },

  // Database
  { id: 21, name: "PostgreSQL", category: "Database", proficiency: "Advance" },
  { id: 22, name: "MySQL", category: "Database", proficiency: "Advance" },
  { id: 23, name: "MongoDB", category: "Database", proficiency: "Advance" },
  { id: 24, name: "Redis", category: "Database", proficiency: "Intermediate" },
  { id: 25, name: "Firebase", category: "Database", proficiency: "Advance" },
  { id: 26, name: "Prisma", category: "Database", proficiency: "Intermediate" },

  // Mobile
  { id: 27, name: "React Native", category: "Mobile", proficiency: "Advance" },
  { id: 28, name: "Flutter", category: "Mobile", proficiency: "Intermediate" },
  { id: 29, name: "Ionic", category: "Mobile", proficiency: "Advance" },
  { id: 30, name: "Swift", category: "Mobile", proficiency: "Beginner" },
  { id: 31, name: "Kotlin", category: "Mobile", proficiency: "Beginner" },

  // Web3 (Solana)
  { id: 32, name: "Solana", category: "Web3", proficiency: "Intermediate" },
  { id: 33, name: "Rust", category: "Web3", proficiency: "Intermediate" },
  { id: 34, name: "Anchor", category: "Web3", proficiency: "Intermediate" },
  {
    id: 35,
    name: "@solana/web3.js",
    category: "Web3",
    proficiency: "Intermediate",
  },
  {
    id: 36,
    name: "Smart Contracts",
    category: "Web3",
    proficiency: "Intermediate",
  },
  { id: 37, name: "SPL Tokens", category: "Web3", proficiency: "Intermediate" },
  {
    id: 38,
    name: "Phantom Wallet",
    category: "Web3",
    proficiency: "Intermediate",
  },
  { id: 39, name: "Metaplex", category: "Web3", proficiency: "Beginner" },

  // DevOps & Tools
  { id: 40, name: "Git", category: "DevOps & Tools", proficiency: "Advance" },
  {
    id: 41,
    name: "Docker",
    category: "DevOps & Tools",
    proficiency: "Intermediate",
  },
  {
    id: 42,
    name: "Kubernetes",
    category: "DevOps & Tools",
    proficiency: "Beginner",
  },
  {
    id: 43,
    name: "AWS",
    category: "DevOps & Tools",
    proficiency: "Intermediate",
  },
  {
    id: 44,
    name: "CI/CD",
    category: "DevOps & Tools",
    proficiency: "Intermediate",
  },
  { id: 45, name: "Jira", category: "DevOps & Tools", proficiency: "Advance" },
  {
    id: 46,
    name: "Postman",
    category: "DevOps & Tools",
    proficiency: "Advance",
  },
];

export const experience: Experience[] = [
  {
    id: 1,
    role: "Senior Software Engineer & Blockchain Developer",
    company: "Apium Innovation(Pvt) Ltd",
    period: "October 2023 - Present",
  },
  {
    id: 2,
    role: "Senior Software Engineer",
    company: "CyberStorm Asia(Pvt) Ltd",
    period: "August 2022 - August 2023",
  },
  {
    id: 3,
    role: "Software Engineer & Saleforce Developer",
    company: "Apium Innovation(Pvt) Ltd",
    period: "July 2018 - August 2022",
  },
  {
    id: 4,
    role: "Front-end Developer",
    company: "Productive Media",
    period: "September 2018 - December 2019",
  },
  {
    id: 5,
    role: "IT Teacher",
    company: "Lak Aruna Foundation",
    period: "June 2016 - April 2017",
  },
  {
    id: 6,
    role: "Former Web Developer",
    company: "CodeGen International(Pvt) Ltd",
    period: "Jan 2013 - May 2013",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Australian Carpentry Service Web",
    description:
      "Developed an Australian Carpentry Service website using Next.js within a week.",
    technologies: ["Next.js"],
    link: "https://tltcarpentry.com.au/",
    imageUrl: "/images/tlt.png",
  },
  {
    id: 2,
    title: "Sri Lanka and Australia News Web",
    description:
      "Collaborated on the development of a news website for Sri Lanka and Australia, using React.js and Node.js.",
    technologies: ["React.js", "Node.js"],
    link: "#",
    imageUrl: "/images/newsz.png",
  },
  {
    id: 3,
    title: "Moonstorm Ecommerce WordPress Website",
    description:
      "Built an ecommerce website using WordPress for selling jewelries.",
    technologies: ["WordPress"],
    link: "https://www.moonstorm.com/",
    imageUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "Furgonetka Courier Delivery Service",
    description:
      "Developed a courier delivery service using PHP, JavaScript, and MySQL.",
    technologies: ["PHP", "JavaScript", "MySQL"],
    link: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1566576912902-1d6db6e8d695?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    title: "Apium.io Company Website",
    description:
      "Built the Apium company website using WordPress within one week.",
    technologies: ["WordPress"],
    link: "https://www.apium.io/",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    title: "Kamuda Food App",
    description:
      "Participated in the development of a food delivery application for Sri Lanka, creating web applications using Angular, Node, and MongoDB.",
    technologies: ["Angular", "Node", "MongoDB"],
    link: "#",
    imageUrl: "/images/kamuda.jpg",
  },
  {
    id: 7,
    title: "Essex Aesthetics Website",
    description:
      "Developed a static website for a skincare treatment business using HTML, CSS, and JavaScript. Completed within three weeks.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "#",
    imageUrl: "/images/essex.jpg",
  },
  {
    id: 8,
    title: "SEO Fulham Web",
    description:
      "Created a static website for an SEO agency using HTML, CSS, and JavaScript. Completed within one week.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "#",
    imageUrl: "/images/seofulham.jpg",
  },
];
