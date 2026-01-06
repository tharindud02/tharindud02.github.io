"use client";

import { Section } from "./Section";
import { useProjects } from "@/hooks/use-portfolio";
import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import { ImageWithFallback } from "./ui/image-with-fallback";

export function Projects() {
  const { data: projects, isLoading } = useProjects();

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="A collection of my best work"
    >
      {isLoading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-96 bg-card rounded-2xl animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, rotateY: 5 }}
              style={{ transformStyle: "preserve-3d" }}
              className="group relative bg-background/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 flex flex-col h-full perspective-1000"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" />

              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <ImageWithFallback
                  src={project.imageUrl || ""}
                  alt={project.title}
                  fallbackSrc="/images/placeholder.jpg"
                  className="w-full h-full object-cover"
                  motionProps={{
                    whileHover: { scale: 1.15 },
                    transition: { duration: 0.6, ease: "easeOut" },
                  }}
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 relative z-10">
                <motion.h3
                  className="text-xl font-bold mb-3 group-hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                </motion.h3>

                <p className="text-muted-foreground text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIdx) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + techIdx * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 text-xs font-medium bg-secondary/50 backdrop-blur-sm text-secondary-foreground rounded-full border border-border/50 group-hover:border-primary/30 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-emerald-300 transition-colors mt-auto group/link"
                >
                  <span>Visit Website</span>
                  <motion.div
                    whileHover={{ x: 3, rotate: -45 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.div>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </Section>
  );
}
