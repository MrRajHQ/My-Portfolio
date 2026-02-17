import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Apple",
    role: "Software Developer",
    period: "Current",
    description: "Enterprise application development, cloud system architecture, and high-scale production systems.",
    current: true,
  },
  {
    company: "Google",
    role: "Software Engineer",
    period: "Previous",
    description: "Built scalable backend services and contributed to core infrastructure projects serving millions of users.",
    current: false,
  },
  {
    company: "Microsoft",
    role: "Software Developer",
    period: "Previous",
    description: "Developed enterprise-grade applications and cloud-based solutions for global clients.",
    current: false,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-secondary/50">
      <div className="section-container">
        <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">Experience</p>
        <h2 className="section-title">Professional Journey</h2>
        <p className="section-subtitle mt-2">7+ years of experience at leading global technology organizations.</p>

        <div className="mt-10 space-y-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`card-elevated relative ${exp.current ? "border-accent/30" : ""}`}
            >
              {exp.current && (
                <span className="absolute top-4 right-4 text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                  Current
                </span>
              )}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Briefcase size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground font-heading">{exp.company}</h3>
                  <p className="text-sm text-muted-foreground">{exp.role} · {exp.period}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
