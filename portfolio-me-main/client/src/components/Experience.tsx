import { Section } from "./Section";
import { useExperience } from "@/hooks/use-portfolio";
import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";

export function Experience() {
  const { data: experience, isLoading } = useExperience();

  return (
    <Section id="experience" title="Work Experience" subtitle="My professional journey">
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 md:translate-x-0 ml-4 md:ml-0" />

        <div className="space-y-12">
          {isLoading ? (
             <div className="text-center text-muted-foreground">Loading experience...</div>
          ) : (
            experience?.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 translate-y-1.5 ml-4 md:ml-0 z-10" />

                {/* Content */}
                <div className="flex-1 ml-12 md:ml-0 md:text-right md:pr-12 group">
                   <div className={`bg-card p-6 rounded-2xl border border-border hover:border-primary transition-colors shadow-lg ${idx % 2 === 0 ? "md:text-left md:pl-6" : "md:text-right"}`}>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{exp.role}</h3>
                      <div className={`flex items-center gap-2 text-muted-foreground mt-2 mb-4 text-sm ${idx % 2 !== 0 ? "md:justify-end" : ""}`}>
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className={`inline-flex items-center gap-2 bg-secondary/50 px-3 py-1 rounded-full text-xs font-medium text-primary ${idx % 2 !== 0 ? "md:ml-auto" : ""}`}>
                        <Calendar className="w-3 h-3" />
                        <span>{exp.period}</span>
                      </div>
                   </div>
                </div>
                
                {/* Spacer for other side */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))
          )}
        </div>
      </div>
    </Section>
  );
}
