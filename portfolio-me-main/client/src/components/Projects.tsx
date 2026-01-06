import { Section } from "./Section";
import { useProjects } from "@/hooks/use-portfolio";
import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";

export function Projects() {
  const { data: projects, isLoading } = useProjects();

  return (
    <Section id="projects" title="Featured Projects" subtitle="A collection of my best work">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.imageUrl || `https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80`} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-6 flex-1 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-emerald-400 transition-colors mt-auto"
                >
                  Visit Website <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </Section>
  );
}
