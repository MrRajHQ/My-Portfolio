import { ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="section-container w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="order-2 md:order-1 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-sm text-muted-foreground mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Available for work
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight mb-4 font-heading">
              Hi, I'm <span className="gradient-text">Raj Gupta</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-medium mb-4">
              Senior Software Developer & Full-Stack Engineer
            </p>

            <p className="text-muted-foreground leading-relaxed max-w-lg mb-8">
              Experienced software developer with over 7 years of experience working with top global technology companies. Specializing in modern web technologies, scalable backend systems, and cloud-based architectures.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors"
              >
                Contact Me
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-12 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold font-heading text-foreground">7+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold font-heading text-foreground">200+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold font-heading text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 flex justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-border shadow-xl">
                <img
                  src={profilePhoto}
                  alt="Raj Gupta - Software Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl border-2 border-accent/20 -z-10" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex justify-center mt-16 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
