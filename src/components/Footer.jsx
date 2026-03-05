import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

/**
 * COMPONENT: Footer
 * STYLE: Structured Archive / Technical Noir
 */
const Footer = () => {
  return (
    <footer className="relative bg-[#050505] text-gray-500 overflow-hidden border-t border-white/5">
      
      {/* Structural Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#E6E6FA]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-8 py-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          
          {/* Section 1: Identity */}
          <div className="col-span-1 md:col-span-2 space-y-8">
            <h3 className="text-4xl font-black text-white tracking-tighter uppercase">
              <span className="text-[#E6E6FA]">V</span>ISHAL <span className="text-white/10">SINGH</span>
            </h3>
            <p className="text-xs md:text-sm leading-relaxed max-w-sm font-medium tracking-wide uppercase opacity-60">
              Architecting the future through <span className="text-white">Agentic AI</span> and <span className="text-white">Autonomous Web Systems</span>. 
              Engineering solutions that exist at the intersection of logic and luxury.
            </p>
            <div className="flex gap-6">
              {[
                { icon: <Github size={18} />, url: "https://github.com/wVishal007" },
                { icon: <Linkedin size={18} />, url: "https://www.linkedin.com/in/vishal-singh-188013324/" },
                { icon: <Mail size={18} />, url: "mailto:vishalsingh31879@gmail.com" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/20 hover:text-[#E6E6FA] hover:-translate-y-1 transition-all duration-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Section 2: Directory */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.5em] opacity-30">
              Directory
            </h4>
            <ul className="space-y-4">
              {["About", "Skills", "Projects", "Certifications", "Achievements"].map((item) => (
                <li
                  key={item}
                  className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-[#E6E6FA] transition-colors cursor-pointer w-fit"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Status */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.5em] opacity-30">
              Current Status
            </h4>
            <div className="space-y-6">
              <p className="text-[10px] font-black uppercase tracking-widest leading-loose">
                Open for <span className="text-white">Internal Roles</span> <br /> 
                & <span className="text-white">AI Consultations</span>
              </p>
              <div className="inline-flex items-center gap-3 py-2 text-[#E6E6FA]">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E6E6FA] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E6E6FA]"></span>
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.4em]">Active 2026 Archive</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal / Tech Stack */}
        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[9px] font-black uppercase tracking-[0.5em] text-white/10 italic">
            © {new Date().getFullYear()} Vishal Singh // All Rights Reserved
          </p>
          <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.3em] text-white/10">
            <span>Built with</span>
            <span className="text-white/40">React</span>
            <span className="w-1 h-1 bg-[#E6E6FA] rounded-full" />
            <span className="text-white/40">Tailwind</span>
            <span className="w-1 h-1 bg-[#E6E6FA] rounded-full" />
            <span className="text-white/40">Vite</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;