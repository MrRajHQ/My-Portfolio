import { Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © 2025 Raj Gupta. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:raj.user123x@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://github.com/PrimeRaj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
