import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { Link } from "react-scroll";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-primary font-medium tracking-wide text-lg uppercase"
            >
              HELLO, I'M
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-6xl sm:text-8xl font-bold font-display leading-tight"
            >
              <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                Tharindu
              </span>
              <br />
              <span className="text-muted-foreground">Damith.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl sm:text-2xl text-muted-foreground max-w-lg leading-relaxed"
            >
              A passionate{" "}
              <span className="text-foreground font-semibold bg-gradient-to-r from-primary to-emerald-300 bg-clip-text text-transparent">
                Full Stack Engineer
              </span>{" "}
              crafting exceptional digital experiences with modern technologies.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="group relative px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold flex items-center gap-2 overflow-hidden cursor-pointer shadow-lg shadow-primary/25 transition-all hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <motion.a
              href="/Tharindu_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full border border-border/50 bg-background/50 backdrop-blur-md hover:border-primary/50 text-foreground font-semibold flex items-center gap-2 transition-all shadow-lg"
            >
              Download CV
              <Download className="w-4 h-4" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-6 pt-4"
          >
            <SocialLink
              href="https://github.com/tharindud02"
              icon={<Github className="w-5 h-5" />}
              label="GitHub"
            />
            <SocialLink
              href="https://linkedin.com/in/chamathme"
              icon={<Linkedin className="w-5 h-5" />}
              label="LinkedIn"
            />
            <SocialLink
              href="mailto:tharindud02@gmail.com"
              icon={<Mail className="w-5 h-5" />}
              label="Email"
            />
          </motion.div>
        </motion.div>

        {/* Avatar Image */}
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

            {/* Avatar Image with grey/color hover effect */}
            <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-background shadow-2xl group">
              <img
                src="/images/avatar.jpg"
                alt="Tharindu Damith"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60";
                }}
              />
            </div>

            {/* Floating badges */}
            <FloatingBadge
              text={`${new Date().getFullYear() - 2018}+ Years`}
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

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="w-14 h-14 rounded-full flex items-center justify-center border border-border/50 bg-background/50 backdrop-blur-md hover:border-primary hover:text-primary transition-all duration-300 group shadow-lg"
      aria-label={label}
    >
      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
        {icon}
      </motion.div>
    </motion.a>
  );
}

function FloatingBadge({
  text,
  className,
  delay,
}: {
  text: string;
  className?: string;
  delay: number;
}) {
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
