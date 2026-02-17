import { Code2, Cloud, Shield, Zap } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Full-Stack Development" },
  { icon: Cloud, label: "Cloud Architecture" },
  { icon: Shield, label: "Secure Systems" },
  { icon: Zap, label: "High Performance" },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-secondary/50">
      <div className="section-container">
        <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">About Me</p>
        <h2 className="section-title">Crafting Digital Excellence</h2>

        <div className="grid md:grid-cols-2 gap-12 mt-10">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Raj Gupta is a highly skilled software developer proficient in multiple programming languages and modern development frameworks. He has extensive experience building scalable web applications, managing cloud infrastructure, and delivering enterprise-level solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a deep focus on clean code, performance optimization, and security best practices, Raj consistently delivers production-ready applications that exceed client expectations.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label }) => (
              <div key={label} className="card-elevated flex flex-col items-center text-center gap-3 py-8">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Icon className="text-accent" size={22} />
                </div>
                <span className="text-sm font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
