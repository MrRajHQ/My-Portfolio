const projects = [
  {
    title: "Enterprise SaaS Platform",
    description: "Full-stack SaaS application with real-time analytics, user management, and payment integration.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    title: "Cloud Infrastructure Dashboard",
    description: "Monitoring and management dashboard for cloud resources with automated scaling capabilities.",
    tags: ["TypeScript", "Python", "Docker", "Kubernetes"],
  },
  {
    title: "E-Commerce Platform",
    description: "High-performance e-commerce solution handling thousands of concurrent users with secure payments.",
    tags: ["Next.js", "MongoDB", "Stripe", "Redis"],
  },
  {
    title: "AI-Powered Analytics Tool",
    description: "Machine learning-driven analytics platform for business intelligence and data visualization.",
    tags: ["Python", "TensorFlow", "React", "D3.js"],
  },
  {
    title: "Mobile Banking App",
    description: "Secure banking application with biometric authentication and real-time transaction processing.",
    tags: ["React Native", "Node.js", "PostgreSQL"],
  },
  {
    title: "Healthcare Management System",
    description: "HIPAA-compliant healthcare platform for patient records, scheduling, and telemedicine.",
    tags: ["TypeScript", "AWS", "GraphQL", "MongoDB"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">Projects</p>
            <h2 className="section-title mb-2">Featured Work</h2>
            <p className="section-subtitle">
              200+ projects delivered across multiple industries, showcasing expertise in full-stack development.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="card-elevated group cursor-pointer">
              <div className="w-full h-40 rounded-lg bg-secondary mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold font-heading text-muted-foreground/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-semibold text-foreground font-heading mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded bg-accent/10 text-accent font-medium"
                  >
                    {tag}
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

export default ProjectsSection;
