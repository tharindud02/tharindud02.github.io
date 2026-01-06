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
  { id: 1, name: "HTML5", category: "Front-End", proficiency: "Advance" },
  { id: 2, name: "CSS3", category: "Front-End", proficiency: "Advance" },
  { id: 3, name: "JavaScript", category: "Front-End", proficiency: "Advance" },
  { id: 4, name: "Angular", category: "Front-End", proficiency: "Intermediate" },
  { id: 5, name: "React", category: "Front-End", proficiency: "Intermediate" },
  { id: 6, name: "Java", category: "Back-End", proficiency: "Advance" },
  { id: 7, name: "PHP", category: "Back-End", proficiency: "Advance" },
  { id: 8, name: "Node", category: "Back-End", proficiency: "Intermediate" },
  { id: 9, name: "Python", category: "Back-End", proficiency: "Beginner" },
  { id: 10, name: "MySQL", category: "Database", proficiency: "Advance" },
  { id: 11, name: "Firebase", category: "Database", proficiency: "Advance" },
  { id: 12, name: "MongoDB", category: "Database", proficiency: "Advance" },
  { id: 13, name: "Ionic", category: "Mobile", proficiency: "Advance" },
  { id: 14, name: "Flutter", category: "Mobile", proficiency: "Intermediate" },
  { id: 15, name: "React-Native", category: "Mobile", proficiency: "Intermediate" },
  { id: 16, name: "AWS", category: "Other", proficiency: "Beginner" },
  { id: 17, name: "Git", category: "Other", proficiency: "Advance" },
  { id: 18, name: "Jira", category: "Other", proficiency: "Advance" },
  { id: 19, name: "Solidity", category: "Web3", proficiency: "Intermediate" },
  { id: 20, name: "Ethereum", category: "Web3", proficiency: "Intermediate" },
  { id: 21, name: "Web3.js", category: "Web3", proficiency: "Intermediate" },
  { id: 22, name: "Ethers.js", category: "Web3", proficiency: "Intermediate" },
  { id: 23, name: "Smart Contracts", category: "Web3", proficiency: "Intermediate" },
  { id: 24, name: "Hardhat", category: "Web3", proficiency: "Intermediate" },
  { id: 25, name: "Truffle", category: "Web3", proficiency: "Beginner" },
  { id: 26, name: "IPFS", category: "Web3", proficiency: "Beginner" },
];

export const experience: Experience[] = [
  { id: 1, role: "Senior Software Engineer", company: "CyberStorm Asia(Pvt) Ltd", period: "August 2022 - Present" },
  { id: 2, role: "Software Engineer & Saleforce Developer", company: "Apium Innovation(Pvt) Ltd", period: "July 2018 - August 2022" },
  { id: 3, role: "Front-end Developer", company: "Productive Media", period: "September 2018 - December 2019" },
  { id: 4, role: "IT Teacher", company: "Lak Aruna Foundation", period: "June 2016 - April 2017" },
  { id: 5, role: "Former Web Developer", company: "CodeGen International(Pvt) Ltd", period: "Jan 2013 - May 2013" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Australian Carpentry Service Web",
    description: "Developed an Australian Carpentry Service website using Next.js within a week.",
    technologies: ["Next.js"],
    link: "https://tltcarpentry.com.au/",
    imageUrl: "/images/tlt.png"
  },
  {
    id: 2,
    title: "Sri Lanka and Australia News Web",
    description: "Collaborated on the development of a news website for Sri Lanka and Australia, using React.js and Node.js.",
    technologies: ["React.js", "Node.js"],
    link: "#",
    imageUrl: "/images/newsz.png"
  },
  {
    id: 3,
    title: "Moonstorm Ecommerce WordPress Website",
    description: "Built an ecommerce website using WordPress for selling jewelries.",
    technologies: ["WordPress"],
    link: "https://www.moonstorm.com/",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 4,
    title: "Furgonetka Courier Delivery Service",
    description: "Developed a courier delivery service using PHP, JavaScript, and MySQL.",
    technologies: ["PHP", "JavaScript", "MySQL"],
    link: "#",
    imageUrl: "https://images.unsplash.com/photo-1566576912902-1d6db6e8d695?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 5,
    title: "Apium.io Company Website",
    description: "Built the Apium company website using WordPress within one week.",
    technologies: ["WordPress"],
    link: "https://www.apium.io/",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 6,
    title: "Kamuda Food App",
    description: "Participated in the development of a food delivery application for Sri Lanka, creating web applications using Angular, Node, and MongoDB.",
    technologies: ["Angular", "Node", "MongoDB"],
    link: "#",
    imageUrl: "/images/kamuda.jpg"
  },
  {
    id: 7,
    title: "Essex Aesthetics Website",
    description: "Developed a static website for a skincare treatment business using HTML, CSS, and JavaScript. Completed within three weeks.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "#",
    imageUrl: "/images/essex.jpg"
  },
  {
    id: 8,
    title: "SEO Fulham Web",
    description: "Created a static website for an SEO agency using HTML, CSS, and JavaScript. Completed within one week.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "#",
    imageUrl: "/images/seofulham.jpg"
  }
];
