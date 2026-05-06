"use client";

import { Section } from "./Section";
import { motion } from "framer-motion";

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-lg prose-invert text-muted-foreground"
        >
          <p className="lead text-xl text-foreground font-medium mb-6">
            Senior Software Engineer with 8+ years building production-grade web platforms, mobile applications, and AI-integrated systems.
          </p>
          <p className="mb-6">
            I design and ship LLM-powered products, from real-time streaming interfaces to structured inference pipelines, with strong ownership across architecture, delivery, and reliability.
          </p>
          <p>
            I am strongest when owning end-to-end delivery across cloud infrastructure, backend APIs, and frontend UX for fintech, healthcare, and automotive products.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-3xl p-8 border border-border space-y-6"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">Personal Details</h3>
          
          <div className="space-y-4">
            <InfoRow label="Email" value="tharindud02@gmail.com" />
            <InfoRow label="Location" value="Colombo, Sri Lanka" />
            <InfoRow label="Role" value="Senior Software Engineer" />
            <InfoRow label="Focus" value="Full-Stack Engineering & AI Systems" />
            <InfoRow label="Education" value="B.Sc. in Physical Science (ICT), University of Sri Jayewardenepura" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-border/50 last:border-0">
      <span className="text-muted-foreground font-medium">{label}</span>
      <span className="text-foreground font-semibold mt-1 sm:mt-0 text-right">{value}</span>
    </div>
  );
}
