import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-6 mb-8">
          <a href="https://github.com/tharindud02" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/chamathme" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:tharindud02@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Tharindu Damith. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
