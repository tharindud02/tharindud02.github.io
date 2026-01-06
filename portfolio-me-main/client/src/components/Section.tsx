import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export function Section({ id, children, className = "", title, subtitle }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-32 relative ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-16 md:mb-24 text-center md:text-left">
            {title && (
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-foreground via-primary to-emerald-300 bg-clip-text text-transparent">
                  {title}
                </span>
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-xl text-muted-foreground max-w-3xl leading-relaxed"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
