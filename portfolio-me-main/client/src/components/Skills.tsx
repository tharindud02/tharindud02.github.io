import { Section } from "./Section";
import { useSkills } from "@/hooks/use-portfolio";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

export function Skills() {
  const { data: skills, isLoading } = useSkills();

  const groupedSkills = skills?.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <Section
      id="skills"
      title="Professional Skills"
      subtitle="My technical toolkit"
    >
      {isLoading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} className="h-48 w-full rounded-2xl" />
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(groupedSkills || {}).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative bg-background/40 backdrop-blur-xl rounded-3xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-500 group shadow-lg hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" />

              <motion.h3
                className="text-xl font-bold mb-6 text-foreground border-b border-border/50 pb-3 group-hover:text-primary transition-colors relative z-10"
                whileHover={{ x: 5 }}
              >
                <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  {category}
                </span>
              </motion.h3>
              <div className="flex flex-wrap gap-2 relative z-10">
                {items.map((skill, skillIdx) => (
                  <motion.span
                    key={skill.id}
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + skillIdx * 0.03 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-xl text-sm font-medium text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </Section>
  );
}
