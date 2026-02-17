const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "TypeScript", "Modern Web UI", "Tailwind CSS", "Next.js"],
  },
  {
    title: "Backend",
    skills: ["Python", "Node.js", "SQL Databases", "MongoDB", "REST APIs"],
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["AWS", "Cloud Deployment", "VPS Management", "Docker", "CI/CD"],
  },
  {
    title: "Development Domains",
    skills: ["Web Development", "App Development", "System Design", "API Architecture"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills">
      <div className="section-container">
        <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">Skills</p>
        <h2 className="section-title">Technical Expertise</h2>

        <div className="grid sm:grid-cols-2 gap-6 mt-10">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="card-elevated">
              <h3 className="font-semibold text-foreground font-heading mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
