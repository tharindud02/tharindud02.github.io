import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-scroll";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-primary font-medium tracking-wide text-lg">HELLO, I'M</h2>
            <h1 className="text-5xl sm:text-7xl font-bold font-display leading-tight">
              Tharindu <br />
              <span className="text-muted-foreground">Damith.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-lg leading-relaxed">
              A passionate <span className="text-foreground font-semibold">Full Stack Engineer</span> crafting exceptional digital experiences with modern technologies.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="group px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold flex items-center gap-2 hover:opacity-90 transition-all cursor-pointer shadow-lg shadow-primary/25"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a 
              href="/Tharindu_Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-border bg-card hover:bg-muted text-foreground font-semibold flex items-center gap-2 transition-all"
            >
              Download CV
              <Download className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <SocialLink href="https://github.com/tharindud02" icon={<Github className="w-5 h-5" />} label="GitHub" />
            <SocialLink href="https://linkedin.com/in/chamathme" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
            <SocialLink href="mailto:tharindud02@gmail.com" icon={<Mail className="w-5 h-5" />} label="Email" />
          </div>
        </motion.div>

        {/* Visual/Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px]">
            {/* Abstract Shapes behind */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-500 rounded-full opacity-20 blur-2xl animate-pulse" />
            
            <div className="absolute inset-4 rounded-full border-2 border-primary/20" />
            <div className="absolute inset-12 rounded-full border-2 border-primary/20 border-dashed animate-[spin_60s_linear_infinite]" />
            
            {/* Avatar Image */}
            <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-background shadow-2xl">
              <img 
                src="/images/avatar.jpg" 
                alt="Tharindu Damith" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  // Fallback to placeholder if local image doesn't exist
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60";
                }}
              />
            </div>

            {/* Floating badges */}
            <FloatingBadge 
              text="5+ Years Exp." 
              className="absolute top-10 right-10 animate-bounce"
              delay={0}
            />
            <FloatingBadge 
              text="Full Stack" 
              className="absolute bottom-20 left-0" 
              delay={1} 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full flex items-center justify-center border border-border bg-background hover:border-primary hover:text-primary transition-all duration-300 group"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

function FloatingBadge({ text, className, delay }: { text: string; className?: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 + delay * 0.2 }}
      className={`bg-card/80 backdrop-blur-md border border-border px-6 py-3 rounded-2xl shadow-xl ${className}`}
    >
      <span className="font-bold text-foreground">{text}</span>
    </motion.div>
  );
}
