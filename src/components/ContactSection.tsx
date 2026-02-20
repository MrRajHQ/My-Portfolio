import { useState } from "react";
import { Mail, Github, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_e7a0ab7";
const TEMPLATE_ID = "template_ud0177o";
const PUBLIC_KEY = "z906f1yOpwesrP2DY";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      }, PUBLIC_KEY);

      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="bg-secondary/50">
      <div className="section-container">
        <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">Contact</p>
        <h2 className="section-title">Let's Work Together</h2>

        <div className="grid md:grid-cols-2 gap-12 mt-10">
          {/* Info */}
          <div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:raj.user123x@gmail.com"
                className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Mail size={18} className="text-accent" />
                </div>
                <span className="text-sm">raj.user123x@gmail.com</span>
              </a>
              <a
                href="https://github.com/PrimeRaj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Github size={18} className="text-accent" />
                </div>
                <span className="text-sm">github.com/PrimeRaj</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
              required
              maxLength={100}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
              required
              maxLength={255}
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow resize-none"
              required
              maxLength={1000}
            />
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {sent ? (
                <>
                  <CheckCircle size={16} />
                  Message Sent!
                </>
              ) : sending ? (
                "Sending..."
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
