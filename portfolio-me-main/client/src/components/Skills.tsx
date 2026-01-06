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
    <Section id="skills" title="Professional Skills" subtitle="My technical toolkit and proficiency levels">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors group"
            >
              <h3 className="text-xl font-bold mb-6 text-foreground border-b border-border pb-2 group-hover:text-primary transition-colors">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <motion.span
                    key={skill.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-secondary/50 text-foreground rounded-lg text-sm font-medium border border-border hover:border-primary/50 hover:bg-secondary transition-colors"
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
