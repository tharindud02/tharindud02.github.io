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
  linkLabel?: string;
  category: string;
  platform?: string;
  status?: string;
  featured?: boolean;
}

export const site = {
  name: "Tharindu Damith Hashantha",
  shortName: "Tharindu Damith",
  title: "Senior Full-Stack & AI Software Engineer",
  description:
    "Tharindu Damith is a Senior Full-Stack Software Engineer with 8+ years building production web, mobile, and AI-powered apps in React, Next.js, Node.js, and AWS.",
  url: "https://tharindud02.github.io",
  email: "tharindud02@gmail.com",
  phone: ["+94714669150", "+94723309695"],
  location: "Colombo, Sri Lanka",
  github: "https://github.com/tharindud02",
  linkedin: "https://linkedin.com/in/ztharinduz",
  resume: "/Tharindu_Resume.pdf",
  keywords: [
    "Senior Software Engineer",
    "Full-Stack Developer",
    "AI Systems",
    "LLM Integration",
    "n8n Automation",
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "AWS",
    "DevOps",
    "Solana",
  ],
} as const;

export const stack: string[] = [
  "React & Next.js",
  "React Native / Flutter",
  "Node.js / NestJS",
  "TypeScript",
  "AWS (RDS, Lambda, ECS, Amplify)",
  "Docker / CI/CD",
  "AI & LLM Integration",
  "n8n Automation",
  "Bubble.io",
  "Solana / Web3",
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
    title: "AutoScout: Car Dealership Management Platform",
    description:
      "A multi-app automotive dealership platform built as a Next.js monorepo. It handles real-time inventory management, an AWS Amplify admin dashboard secured with Cognito auth, and a public listings site, so dealers can manage stock from one place.",
    technologies: ["Next.js", "TypeScript", "AWS Cognito", "AWS Amplify", "Docker", "CI/CD"],
    link: "#",
    category: "SaaS Platform",
    platform: "Web",
    status: "Production",
    featured: true,
  },
  {
    id: 2,
    title: "Lendermate: Loan Management SaaS",
    description:
      "Multi-tenant SaaS platform for lenders to manage business and individual loans, with strict per-lender data isolation via row-level security on Amazon RDS PostgreSQL, across a shared web and mobile codebase.",
    technologies: ["Next.js", "TypeScript", "Flutter", "Amazon RDS", "AWS Lambda", "Docker"],
    link: "#",
    category: "SaaS Platform",
    platform: "Web & Mobile",
    status: "Production",
    featured: true,
  },
  {
    id: 3,
    title: "RenterMate: Rental Business Management",
    description:
      "Cross-platform app for rental businesses to manage inventory, bookings, customers, and invoicing in real time, paired with a marketing site and self-serve demo/pricing flow.",
    technologies: ["React Native", "Expo", "Node.js", "AWS EC2", "Amazon S3", "CI/CD"],
    link: "https://play.google.com/store/apps/details?id=com.rentalmate.app",
    linkLabel: "Play Store",
    category: "Mobile App",
    platform: "iOS & Android",
    status: "Live on Play Store",
    featured: true,
  },
  {
    id: 4,
    title: "SnapWeight: AI Weight & Nutrition Tracker",
    description:
      "AI-powered nutrition app that estimates food weight and macros from a photo, with streak tracking, personalized goals, and Stripe-powered subscriptions.",
    technologies: ["React Native", "Expo", "AI Vision", "Stripe"],
    link: "https://play.google.com/store/apps/details?id=com.snapweight.ai",
    linkLabel: "Play Store",
    category: "AI & Automation",
    platform: "iOS & Android",
    status: "Live on Play Store",
    featured: true,
  },
  {
    id: 5,
    title: "Growya Ops: Farm Operations & Finance Platform",
    description:
      "An operations and finance platform built for agricultural businesses. It covers inventory, farm dashboards, and business finance tracking, deployed on AWS with a companion mobile app.",
    technologies: ["Next.js", "TypeScript", "Amazon RDS", "AWS Lambda", "Docker", "CI/CD"],
    link: "https://play.google.com/store/apps/details?id=com.growya.ops",
    linkLabel: "Play Store",
    category: "SaaS Platform",
    platform: "Web & Mobile",
    status: "Live on Play Store",
  },
  {
    id: 6,
    title: "BrainBench: Cognitive Training Games",
    description:
      "A Human Benchmark-style mobile app with 16 offline brain games spanning memory, reaction speed, attention, and logic, with on-device best-score tracking.",
    technologies: ["React Native", "Expo", "TypeScript", "Expo Router"],
    link: "https://play.google.com/store/apps/details?id=com.tharindu.brainbench",
    linkLabel: "Play Store",
    category: "Mobile App",
    platform: "iOS & Android",
    status: "Live on Play Store",
  },
  {
    id: 7,
    title: "AMC PrepPro: Medical Exam Prep",
    description:
      "Full-featured study app for the AMC exam with QBank workflows, timed 150-question mock exams, performance analytics, and an offline-first data layer.",
    technologies: ["React Native", "Expo", "Node.js"],
    link: "https://play.google.com/store/apps/details?id=com.amcexampreparation.amcpreppro",
    linkLabel: "Play Store",
    category: "Mobile App",
    platform: "iOS & Android",
    status: "Live on Play Store",
  },
  {
    id: 8,
    title: "PawStay: Multi-Tenant Pet Boarding SaaS",
    description:
      "SaaS platform for pet boarding facilities with a Next.js staff console, an Expo-based mobile ops app, and an AWS-backed, Docker-deployed API layer on Amazon RDS.",
    technologies: ["Next.js", "Expo", "Amazon RDS", "AWS Lambda", "Docker", "CI/CD"],
    link: "#",
    category: "SaaS Platform",
    platform: "Web & Mobile",
    status: "Production",
  },
  {
    id: 9,
    title: "CosmoSeer: AI Astrology App",
    description:
      "Offline-first astrology app delivering daily horoscopes, natal readings, zodiac compatibility, and an AI chat oracle, with a graceful fallback when the AI backend is unavailable.",
    technologies: ["React Native", "Expo", "TypeScript", "LLM APIs"],
    link: "#",
    category: "AI & Automation",
    platform: "iOS & Android",
    status: "In Development",
  },
  {
    id: 10,
    title: "AI Vehicle Analysis & Valuation System",
    description:
      "AI-driven valuation platform combining LLM analysis with live MMR and KBB/Bluebook data, real-time streaming output, and an interactive insights dashboard.",
    technologies: ["Node.js", "React", "LLM APIs", "Streaming"],
    link: "#",
    category: "AI & Automation",
    platform: "Web",
    status: "Production",
    featured: true,
  },
  {
    id: 11,
    title: "n8n AI Workflow Automations",
    description:
      "Designed and deployed AI-augmented n8n automation workflows connecting CRMs, messaging platforms, and LLM APIs to eliminate manual data entry and trigger real-time business actions.",
    technologies: ["n8n", "LLM APIs", "Webhooks", "REST APIs"],
    link: "#",
    category: "AI & Automation",
    platform: "Workflow",
    status: "Client Projects",
  },
  {
    id: 12,
    title: "Bubble.io AI-Powered Apps",
    description:
      "Built and shipped AI-integrated no-code applications on Bubble.io, wiring LLM APIs and third-party services into visual workflows for rapid client MVP delivery.",
    technologies: ["Bubble.io", "LLM APIs", "No-Code", "API Integrations"],
    link: "#",
    category: "AI & Automation",
    platform: "Web",
    status: "Client Projects",
  },
  {
    id: 13,
    title: "Asia Securities: Client Investment Portal",
    description:
      "Secure investment portal with real-time dashboards, account workflows, and transaction flows using Cognito auth, ECS deployment, and CloudWatch monitoring.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    link: "#",
    category: "SaaS Platform",
    platform: "Web",
    status: "Production",
  },
  {
    id: 14,
    title: "POAP Platform: Solana NFT Minting System",
    description:
      "Event-triggered Solana NFT minting system with multi-wallet support, IPFS metadata pipelines, and a React-based claim experience.",
    technologies: ["Solana", "Anchor", "React", "TypeScript", "IPFS"],
    link: "#",
    category: "Web3",
    platform: "Web",
    status: "Production",
  },
];

export const additionalProjects: Project[] = [
  {
    id: 15,
    title: "Car Rental Service",
    description: "Booking platform for a car rental business with payment integration and admin fleet management.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "#",
    category: "Web Project",
    platform: "Web",
    status: "Completed",
  },
  {
    id: 16,
    title: "ChattyBunny",
    description: "Real-time chat application with a modern UI/UX, built on WebSocket for instant messaging.",
    technologies: ["React", "Node.js", "WebSocket"],
    link: "#",
    category: "Web Project",
    platform: "Web",
    status: "Completed",
  },
  {
    id: 17,
    title: "Kamuda Food App",
    description: "Food delivery web application for the Sri Lankan market, covering ordering, tracking, and payments.",
    technologies: ["Angular", "Node.js", "MongoDB"],
    link: "#",
    category: "Web Project",
    platform: "Web",
    status: "Completed",
  },
  {
    id: 18,
    title: "Furgonetka Courier Delivery",
    description: "Courier delivery service platform handling shipment booking, tracking, and dispatch operations.",
    technologies: ["PHP", "JavaScript", "MySQL"],
    link: "#",
    category: "Web Project",
    platform: "Web",
    status: "Completed",
  },
  {
    id: 19,
    title: "Sri Lanka & Australia News Web",
    description: "News platform serving readers across Sri Lanka and Australia with categorized, real-time articles.",
    technologies: ["React", "Node.js"],
    link: "#",
    category: "Web Project",
    platform: "Web",
    status: "Completed",
  },
  {
    id: 20,
    title: "Australian Carpentry Service",
    description: "Marketing website for an Australian carpentry business, designed and delivered within one week.",
    technologies: ["Next.js"],
    link: "#",
    category: "Web Project",
    platform: "Web",
    status: "Completed",
  },
  {
    id: 21,
    title: "Apium.io Company Website",
    description:
      "Designed and delivered Apium Innovation’s corporate website with a clean, conversion-focused structure built with React and Tailwind CSS, reviewed, and launched.",
    technologies: ["React"],
    link: "https://apium.io/",
    category: "Web Project",
    platform: "Web",
    status: "Completed",
  },
  {
    id: 22,
    title: "Moonstorm Ecommerce",
    description: "Ecommerce storefront for a jewelry business with catalog, cart, and checkout flows.",
    technologies: ["WordPress", "WooCommerce"],
    link: "#",
    category: "Web Project",
    platform: "Web",
    status: "Completed",
  },
  {
    id: 23,
    title: "Essex Aesthetics",
    description: "Static marketing site for a skincare treatment business, delivered within three weeks.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "#",
    category: "Web Project",
    platform: "Web",
    status: "Completed",
  },
  {
    id: 24,
    title: "SEO Fulham",
    description: "Static marketing site for an SEO agency, designed and delivered within one week.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "#",
    category: "Web Project",
    platform: "Web",
    status: "Completed",
  },
];
