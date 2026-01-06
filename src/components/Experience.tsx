"use client";

import { Section } from "./Section";
import { useExperience } from "@/hooks/use-portfolio";
import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";

export function Experience() {
  const { data: experience, isLoading } = useExperience();

  return (
    <Section id="experience" title="Work Experience" subtitle="My professional journey">
      <div className="relative max-w-5xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border/50 -translate-x-1/2 md:translate-x-0" />

        <div className="space-y-16">
          {isLoading ? (
             <div className="text-center text-muted-foreground">Loading experience...</div>
          ) : (
            experience?.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot - Perfectly centered with card */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 flex-shrink-0">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.3, type: "spring" }}
                    className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg shadow-primary/50"
                  />
                </div>

                {/* Content Card */}
                <div className={`flex-1 ${idx % 2 === 0 ? "md:pr-12" : "md:pl-12"} ml-16 md:ml-0 group`}>
                   <motion.div 
                     whileHover={{ scale: 1.02, y: -5 }}
                     className={`relative bg-background/40 backdrop-blur-xl p-6 rounded-3xl border border-border/50 hover:border-primary/50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-primary/10 ${idx % 2 === 0 ? "md:text-left" : "md:text-right"}`}
                   >
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" />
                      
                      <motion.h3 
                        className="text-xl font-bold text-foreground group-hover:text-primary transition-colors relative z-10"
                        whileHover={{ x: idx % 2 === 0 ? 5 : -5 }}
                      >
                        {exp.role}
                      </motion.h3>
                      <div className={`flex items-center gap-2 text-muted-foreground mt-2 mb-4 text-sm relative z-10 ${idx % 2 === 0 ? "" : "md:justify-end"}`}>
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className={`inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 px-4 py-2 rounded-full text-xs font-medium text-primary relative z-10 ${idx % 2 === 0 ? "" : "md:ml-auto"}`}
                      >
                        <Calendar className="w-3 h-3" />
                        <span>{exp.period}</span>
                      </motion.div>
                   </motion.div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))
          )}
        </div>
      </div>
    </Section>
  );
}
