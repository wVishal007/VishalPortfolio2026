import React from "react";
import { Github, Linkedin, Mail, TerminalSquare, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "github", icon: <Github size={14} />, url: "https://github.com/wVishal007" },
    { name: "linkedin", icon: <Linkedin size={14} />, url: "https://www.linkedin.com/in/vishal-singh-188013324/" },
    { name: "mail", icon: <Mail size={14} />, url: "mailto:vishalsingh31879@gmail.com" },
  ];

  const directory = [
    { name: "home", path: "/about-me", num: "01" },
    { name: "skills", path: "/skills", num: "02" },
    { name: "projects", path: "/projects", num: "03" },
    { name: "certifications", path: "/certifications", num: "04" },
    { name: "achievements", path: "/Achievements", num: "05" },
    { name: "hobbies", path: "/Hobbies", num: "06" },
  ];

  return (
    <footer className="relative px-4 md:px-6 pb-8 text-void dark:text-paper">
      <div className="max-w-6xl mx-auto">
        {/* CTA — aurora bloom */}
        <div className="aurora-card hud-corners reveal relative overflow-hidden rounded-xl p-10 md:p-16 text-center">
          <div className="hero-bloom absolute inset-0" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest text-primary">
              <TerminalSquare size={12} /> open to partnerships &amp; consulting
            </span>
            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-void/50 dark:text-paper/50">
              $ contact_vishal --email
            </p>
            <h2 className="mt-4 font-display font-bold tracking-tight leading-[0.95] text-[clamp(2.5rem,8vw,6rem)] text-void dark:text-paper">
              Let's build something
              <br />
              <span className="serif-accent text-glow-magenta">worth shipping.</span>
            </h2>
            <a
              href="mailto:vishalsingh31879@gmail.com"
              className="btn-aurora group mt-10 inline-flex items-center gap-3 rounded-full px-8 py-4 font-mono text-[11px] font-bold uppercase tracking-widest text-void dark:text-paper"
            >
              &gt; send_transmission
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mt-14">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="gradient-bg flex h-7 w-7 items-center justify-center rounded-md text-white glow-shadow">
                <TerminalSquare size={14} />
              </span>
              <span className="font-mono text-sm font-bold">
                ~/vishal<span className="terminal-cursor ml-1.5" />
              </span>
            </div>
            <p className="max-w-xs font-body text-sm text-void/55 dark:text-paper/55 leading-relaxed">
              Full-stack AI architect engineering autonomous systems and
              premium digital experiences.
            </p>
          </div>

          <div className="md:col-span-4 space-y-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-void/40 dark:text-paper/40">
              $ index
            </p>
            <ul className="flex flex-col gap-1">
              {directory.map((item) => (
                <li key={item.num} className="flex items-center gap-3 py-1">
                  <span className="index-num text-[10px] text-primary">{item.num}</span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-void/60 dark:text-paper/60">
                    &gt; {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-void/40 dark:text-paper/40">
              $ link
            </p>
            <div className="flex flex-col gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-void/60 dark:text-paper/60 hover:text-primary transition-colors w-fit"
                >
                  {social.icon} {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* LOWER BAR */}
        <div className="mt-14 pt-6 border-t border-void/10 dark:border-paper/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-void/40 dark:text-paper/40">
            © {currentYear} vishal_singh
          </p>
          <p className="index-num font-mono text-[9px] uppercase tracking-[0.25em] text-void/40 dark:text-paper/40 flex items-center gap-1.5">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
            system:online // IND/DL_SKL
          </p>
          <p className="index-num font-mono text-[9px] uppercase tracking-[0.25em] text-primary">
            01—06 / end_of_file
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
