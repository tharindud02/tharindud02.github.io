"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ParticleBackground } from "@/components/ParticleBackground";
import { motion, useScroll, useSpring } from "framer-motion";
import { useSectionScroll } from "@/hooks/use-section-scroll";
import dynamic from "next/dynamic";

// Lazy load below-the-fold components for better initial load performance
const About = dynamic(() => import("@/components/About").then(mod => ({ default: mod.About })), {
  loading: () => <div className="min-h-screen" />,
});
const Skills = dynamic(() => import("@/components/Skills").then(mod => ({ default: mod.Skills })), {
  loading: () => <div className="min-h-screen" />,
});
const Experience = dynamic(() => import("@/components/Experience").then(mod => ({ default: mod.Experience })), {
  loading: () => <div className="min-h-screen" />,
});
const Projects = dynamic(() => import("@/components/Projects").then(mod => ({ default: mod.Projects })), {
  loading: () => <div className="min-h-screen" />,
});
const Contact = dynamic(() => import("@/components/Contact").then(mod => ({ default: mod.Contact })), {
  loading: () => <div className="min-h-screen" />,
});
const Footer = dynamic(() => import("@/components/Footer").then(mod => ({ default: mod.Footer })), {
  loading: () => null,
});

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Enable section-by-section scrolling
  useSectionScroll();

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary/20 relative overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-emerald-400 to-primary z-[100] origin-left shadow-lg shadow-primary/50"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
