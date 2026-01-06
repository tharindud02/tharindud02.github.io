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
            Dedicated professional driven by a deep passion for leveraging Information Technology to drive business success.
          </p>
          <p className="mb-6">
            With a solid foundation of experience and a relentless work ethic, I excel in communication and possess a strong ability to deliver results. Through extensive self-study and practical application, I have developed exceptional skills in harnessing technology to efficiently meet project and team requirements.
          </p>
          <p>
            My portfolio showcases a proven track record of utilizing IT expertise to achieve business objectives effectively.
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
            <InfoRow label="Phone" value="+94 71-4669-150" />
            <InfoRow label="Address" value="Hingurukaduwa, Passara" />
            <InfoRow label="Age" value="29 Years" />
            <InfoRow label="Education" value="B.Sc, Physical Science ICT (University Of Sri Jayewardenenpura)" />
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
