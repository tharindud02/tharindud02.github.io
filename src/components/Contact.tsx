"use client";

import { Section } from "./Section";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function Contact() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: ContactFormData) => {
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact: ${data.name}`);
    const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`);
    const mailtoLink = `mailto:tharindud02@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    toast({
      title: "Opening Email Client",
      description: "Your default email client will open with your message. Please send it to contact me.",
    });
    
    form.reset();
  };

  return (
    <Section id="contact" title="Get In Touch" subtitle="Have a project in mind? Let's discuss.">
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        
        {/* Contact Info */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="space-y-8"
        >
          <div className="bg-card p-8 rounded-3xl border border-border shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-muted-foreground mb-8">
              Available for senior full-stack and AI-focused engineering roles.
            </p>
            
            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold text-primary uppercase tracking-wider">Email</label>
                <a href="mailto:tharindud02@gmail.com" className="text-lg font-medium hover:underline block">tharindud02@gmail.com</a>
              </div>
              <div>
                <label className="text-xs font-bold text-primary uppercase tracking-wider">Phone</label>
                <a href="tel:+94714669150" className="text-lg font-medium hover:underline block">+94 71 466 9150</a>
                <a href="tel:+94723309695" className="text-lg font-medium hover:underline block">+94 72 330 9695</a>
           
              </div>
              <div>
                <label className="text-xs font-bold text-primary uppercase tracking-wider">Location</label>
                <p className="text-lg font-medium">Colombo, Sri Lanka</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-card p-8 rounded-3xl border border-border shadow-lg">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                {...form.register("name")}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="John Doe"
              />
              {form.formState.errors.name && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                {...form.register("email")}
                type="email"
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="john@example.com"
              />
              {form.formState.errors.email && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                {...form.register("message")}
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                placeholder="Tell me about your project..."
              />
              {form.formState.errors.message && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              Send Message <Send className="w-5 h-5" />
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
