export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Publication {
  title: string;
  platform: "Substack" | "Medium";
  url: string;
  summary: string;
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
  title: "Associate Tech Lead · Full-Stack & AI Engineer",
  seoTitle: "Tharindu Damith | Associate Tech Lead · Full-Stack & AI Engineer",
  description:
    "Associate Tech Lead and Full-Stack Engineer in Colombo, Sri Lanka. 6+ years building Node.js and React/Next.js products across fintech, wealth management, automotive, and healthcare, with AWS infrastructure on Terraform and CI/CD.",
  ogImageAlt: "Tharindu Damith, Associate Tech Lead and Full-Stack Engineer based in Colombo, Sri Lanka",
  url: "https://www.hashantha.com",
  // Paste the `content` value from each webmaster tool's "HTML tag" verification option.
  verification: {
    google: "",
    bing: "",
  },
  email: "tharindud02@gmail.com",
  phone: ["+94714669150", "+94723309695"],
  location: "Colombo, Sri Lanka",
  github: "https://github.com/tharindud02",
  linkedin: "https://linkedin.com/in/ztharinduz",
  keywords: [
    "Associate Tech Lead",
    "Tech Lead",
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
    "Terraform",
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
  "Terraform",
  "AI & LLM Integration",
  "n8n Automation",
  "Bubble.io",
  "Solana / Web3",
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "PHP"] },
  { label: "Frontend", items: ["React", "Next.js (App Router, SSR/ISR)", "Angular", "Tailwind CSS", "Astro"] },
  { label: "Mobile", items: ["React Native", "Expo", "Flutter"] },
  { label: "Backend", items: ["Node.js", "NestJS", "REST APIs", "WebSockets", "Webhooks"] },
  { label: "Databases", items: ["PostgreSQL (Amazon RDS)", "DynamoDB", "MongoDB", "MySQL"] },
  {
    label: "Cloud & DevOps",
    items: [
      "AWS (Lambda, ECS, EC2, S3, Amplify, Cognito, CloudWatch, CloudFormation)",
      "Terraform",
      "Docker",
      "CI/CD",
      "Serverless",
    ],
  },
  {
    label: "AI & Automation",
    items: ["LLM API integration", "Streaming responses", "AI vision", "n8n", "Bubble.io"],
  },
  { label: "Web3", items: ["Solana", "Anchor", "IPFS"] },
  { label: "Platforms", items: ["Salesforce", "Stripe"] },
];

export const experience: Experience[] = [
  {
    id: 1,
    role: "Associate Tech Lead",
    company: "Apium Innovation (Pvt) Ltd",
    period: "2025 - Present",
    description:
      "Lead technical planning, code reviews and delivery of web and mobile platforms, building Next.js and React frontends, NestJS/Node.js backends and React Native apps for fintech and engagement-tracking clients.",
  },
  {
    id: 2,
    role: "Senior Software Engineer",
    company: "Apium Innovation (Pvt) Ltd",
    period: "2023 - 2025",
    description:
      "Built production systems for wealth management, logistics and SaaS clients, covering third-party integrations, Terraform-managed AWS infrastructure and n8n workflow automation.",
  },
  {
    id: 3,
    role: "Software Engineer",
    company: "CyberStorm Asia (Pvt) Ltd",
    period: "2020 - 2023",
    description:
      "Developed full-stack web applications with React, Next.js and Node.js, including real-time messaging, content publishing platforms and SEO-focused business websites.",
  },
  {
    id: 4,
    role: "Engineering Intern",
    company: "CodeGen International",
    period: "2013",
    description:
      "Supported the engineering team on software development tasks, gaining hands-on experience with professional development workflows, version control and team-based delivery.",
  },
];

export const publications: Publication[] = [
  {
    title: "Solana Smart Contracts Tutorial: Build, Deploy, and Test Your First Program with Rust",
    platform: "Substack",
    url: "https://tharindux.substack.com/p/solana-smart-contracts-tutorial-build",
    summary:
      "A step-by-step guide to Solana program architecture and hands-on Rust development: building, deploying and testing a first on-chain program.",
  },
  {
    title: "The Blockchain Multiverse: Layers That Power Web3",
    platform: "Substack",
    url: "https://tharindux.substack.com/p/the-blockchain-multiverse-layers",
    summary:
      "Blockchain architecture from Layer 0 to Layer 2, and how interoperability, base-layer consensus and scaling solutions work together.",
  },
  {
    title: "Web3: Reclaiming Our Digital Selves: A Human Revolution for the Internet",
    platform: "Medium",
    url: "https://medium.com/@tharinduxdev/web3-reclaiming-our-digital-selves-a-human-revolution-for-the-internet-a1fa2b29ca3c",
    summary:
      "How Web3 moves ownership of digital identity, data and creative content from centralized platforms back to users through decentralized architecture and self-custodied accounts.",
  },
];

export const projects: Project[] = [
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
    status: "Live on Google Play & App Store",
    featured: true,
  },
  {
    id: 25,
    title: "PlayNet: Game Engagement Tracking Platform",
    description:
      "Engagement tracking platform used by brands like Unilever and the Singapore Tourism Board. I built the Next.js web frontend and an analytics dashboard for player engagement across Roblox and Minecraft, with React Query and ISR caching to cut repeat API calls and page load times.",
    technologies: ["Next.js", "TypeScript", "React Query", "Node.js"],
    link: "https://www.playnet.xyz/",
    linkLabel: "Live Site",
    category: "SaaS Platform",
    platform: "Web",
    status: "Production",
    featured: true,
  },
  {
    id: 26,
    title: "ThirdPay: Global Digital Dollar Business Accounts",
    description:
      "Cross-border payments platform that lets businesses collect money locally, hold treasury in USD-pegged digital dollars (USDC on Solana), and send payouts globally. I built the business marketing website plus the ThirdPay web and mobile apps: a NestJS backend, a React web app, and a React Native mobile app.",
    technologies: ["NestJS", "React", "React Native", "TypeScript", "REST APIs", "Solana"],
    link: "https://thirdpay.io/",
    linkLabel: "Live Site",
    category: "Fintech",
    platform: "Web & Mobile",
    status: "Production",
    featured: true,
  },
  {
    id: 27,
    title: "Purple: WiFi Platform Workflow Automation",
    description:
      "Purple is a guest, staff, and multi-tenant WiFi platform live across 80,000+ venues worldwide. I built the n8n workflow automation layer, connecting internal systems and third-party services through webhooks and REST APIs, with scheduled workflows that automate operational processes and replace manual steps.",
    technologies: ["n8n", "Workflow Automation", "Webhooks", "REST APIs"],
    link: "https://www.purple.ai/en-gb",
    linkLabel: "Live Site",
    category: "AI & Automation",
    platform: "Web",
    status: "Production",
  },
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
    title: "Asia Securities: IPO & Unit Trust Platforms",
    description:
      "Secure IPO and unit trust investment platforms with real-time dashboards, account workflows, and transaction flows. Integrated third-party authentication and data providers, with Terraform-managed AWS infrastructure (Cognito, ECS, CloudWatch) in production.",
    technologies: ["React", "Node.js", "DynamoDB", "AWS", "Terraform"],
    link: "https://www.asiasecurities.lk/",
    linkLabel: "Live Site",
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
    description:
      "Social discovery platform with real-time Socket.IO messaging (presence, typing indicators, read receipts), a MongoDB data model with cursor-based chat pagination, and JWT-secured APIs.",
    technologies: ["React", "Node.js", "Socket.IO", "MongoDB", "JWT"],
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
    title: "Packbook: Courier Delivery Platform",
    description:
      "Courier delivery platform covering shipment booking, real-time tracking, and dispatch operations, backed by MySQL structures for shipments, routes, and dispatch records.",
    technologies: ["PHP", "JavaScript", "MySQL"],
    link: "https://packbook.pl",
    linkLabel: "Live Site",
    category: "Web Project",
    platform: "Web",
    status: "Completed",
  },
  {
    id: 19,
    title: "Newsz.lk: News Platform",
    description:
      "News platform for Sri Lanka and Australia with a Node.js/Express API for region and category feeds, an admin publishing and scheduling workflow, and caching and SEO improvements.",
    technologies: ["React", "Node.js", "Express"],
    link: "#",
    category: "Web Project",
    platform: "Web",
    status: "Completed",
  },
  {
    id: 20,
    title: "Australian Carpentry Service",
    description:
      "Statically generated Next.js marketing site with LocalBusiness structured data, a sitemap, optimized images, and a validated quote request form. Delivered within one week.",
    technologies: ["Next.js", "SSG", "SEO"],
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
