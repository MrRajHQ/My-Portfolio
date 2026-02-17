import { GraduationCap } from "lucide-react";

const educationItems = [
  {
    period: "School",
    title: "DAV Public School — Science Stream (PCMB)",
    detail: "Achieved IIT AIR Rank 1 · Selected by MIT",
  },
  {
    period: "Undergraduate",
    title: "Bachelor's in Software Engineering / Computer Science",
    detail: "Integrated B.Tech + M.Tech in Software Engineering",
  },
  {
    period: "Postgraduate",
    title: "Master's in Software Engineering & Computer Science",
    detail: "Advanced coursework in distributed systems and architecture",
  },
  {
    period: "Specializations",
    title: "Additional Diplomas",
    detail: "AI · Cybersecurity · Cloud Computing · Data Science",
  },
];

const EducationSection = () => {
  return (
    <section id="education">
      <div className="section-container">
        <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">Education</p>
        <h2 className="section-title">Academic Background</h2>

        <div className="mt-10 relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {educationItems.map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="hidden md:flex w-12 h-12 rounded-full bg-secondary border border-border items-center justify-center shrink-0 relative z-10">
                  <GraduationCap size={18} className="text-accent" />
                </div>
                <div className="card-elevated flex-1">
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">{item.period}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1 font-heading">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
