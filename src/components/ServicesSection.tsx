import { Monitor, Server, Globe } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "UI Development",
    description: "Pixel-perfect, responsive user interfaces built with modern frameworks. Focused on performance and accessibility.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Scalable, secure backend systems with robust APIs, database design, and cloud infrastructure management.",
  },
  {
    icon: Globe,
    title: "Full Website Solutions",
    description: "End-to-end web development from concept to deployment. Complete solutions with performance, security, and scalability.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-secondary/50">
      <div className="section-container">
        <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">Services</p>
        <h2 className="section-title">What I Offer</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {services.map((service) => (
            <div key={service.title} className="card-elevated text-center py-10 px-6">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <service.icon className="text-accent" size={24} />
              </div>
              <h3 className="font-semibold text-foreground font-heading mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
