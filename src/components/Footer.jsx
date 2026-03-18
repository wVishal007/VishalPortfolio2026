import React from "react";
import { Github, Linkedin, Mail, ArrowUpRight, Globe, Code2 } from "lucide-react";

/**
 * COMPONENT: Footer
 * STYLE: High-End Technical Archive (Fully Adaptive)
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Github", icon: <Github size={16} />, url: "https://github.com/wVishal007" },
    { name: "LinkedIn", icon: <Linkedin size={16} />, url: "https://www.linkedin.com/in/vishal-singh-188013324/" },
    { name: "Email", icon: <Mail size={16} />, url: "mailto:vishalsingh31879@gmail.com" },
  ];

  const directory = [
    { name: "Home", path: "/about-me" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Certifications", path: "/certifications" },
    { name: "Achievements", path: "/Achievements" },
  ];

  return (
    <footer className="relative bg-[#FAFAFA] dark:bg-[#050505] transition-colors duration-700 overflow-hidden border-t border-black/10 dark:border-white/5">
      
      {/* 1. VISUAL ANCHOR: Vertical Line (Adapts to Lavender in Dark / Indigo in Light) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-indigo-500 dark:from-[#E6E6FA] to-transparent opacity-30 dark:opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Section 1: Brand & Philosophy */}
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-4">
               <span className="text-indigo-600 dark:text-[#E6E6FA] text-[10px] font-black uppercase tracking-[0.6em] block">
                 Structural_Identity //
               </span>
               <h3 className="text-5xl md:text-7xl font-black text-black dark:text-white tracking-tighter uppercase leading-[0.8]">
                 V<span className="text-black/5 dark:text-white/10 italic">ISHAL</span><br />
                 SINGH
               </h3>
            </div>
            
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-md font-medium uppercase tracking-tight">
              Architecting the future through <span className="text-black dark:text-white underline decoration-indigo-500/30 dark:decoration-[#E6E6FA]/30 decoration-2 underline-offset-4">Agentic AI</span> and 
              Autonomous Web Systems. Engineering at the intersection of logic and luxury.
            </p>

            {/* Social Matrix: Light mode uses soft gray borders */}
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 px-5 py-3 border border-black/10 dark:border-white/5 bg-white dark:bg-transparent text-black dark:text-white/40 hover:text-indigo-600 dark:hover:text-[#E6E6FA] hover:border-indigo-600 dark:hover:border-[#E6E6FA] transition-all duration-500 group shadow-sm dark:shadow-none"
                >
                  {social.icon}
                  <span className="text-[10px] font-black uppercase tracking-widest hidden sm:block">{social.name}</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Section 2: Directory */}
          <div className="lg:col-span-3 space-y-10">
            <h4 className="text-[10px] font-black text-black/40 dark:text-white/30 uppercase tracking-[0.5em]">
              System_Map
            </h4>
            <ul className="flex flex-col gap-5">
              {directory.map((item) => (
                <li
                  key={item.name}
                  className="group flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-black dark:hover:text-[#E6E6FA] transition-all cursor-pointer w-fit"
                >
                  <span className="w-0 group-hover:w-4 h-px bg-indigo-600 dark:bg-[#E6E6FA] transition-all" />
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Availability */}
          <div className="lg:col-span-3 space-y-10">
            <h4 className="text-[10px] font-black text-black/40 dark:text-white/30 uppercase tracking-[0.5em]">
              Connection_Status
            </h4>
            <div className="p-8 border border-black/10 dark:border-white/5 bg-white dark:bg-white/[0.02] shadow-sm dark:shadow-none space-y-6">
              <div className="space-y-2">
                <p className="text-[10px] font-black uppercase tracking-widest text-black dark:text-white">
                  Available for Partnerships
                </p>
                <p className="text-[9px] text-gray-500 dark:text-gray-400 uppercase tracking-widest leading-loose">
                  Consulting // AI Agent Dev <br /> 
                  Enterprise Solutions
                </p>
              </div>
              
              <div className="flex items-center gap-3 text-indigo-600 dark:text-[#E6E6FA]">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 dark:bg-[#E6E6FA] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500 dark:bg-[#E6E6FA]"></span>
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.5em]">Active_Pulse_2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. LOWER BAR: Technical Metadata */}
        <div className="mt-32 pt-12 border-t border-black/10 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <Globe size={14} className="text-black/30 dark:text-white/10" />
            <p className="text-[9px] font-black uppercase tracking-[0.5em] text-black/30 dark:text-white/10 italic">
              © {currentYear} VISHAL SINGH • IND/DL_SKL
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.4em] text-black/40 dark:text-white/10">
              <Code2 size={14} />
              <span>Stack:</span>
              <span className="text-black/80 dark:text-white/40">React</span>
              <span className="text-black/80 dark:text-white/40">Tailwind</span>
              <span className="text-black/80 dark:text-white/40">Vite</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Watermark (Softened for Light Mode) */}
      <div className="absolute -bottom-10 -right-10 text-[15vw] font-black text-black/[0.03] dark:text-white/[0.02] uppercase pointer-events-none select-none leading-none">
        ARCHIVE
      </div>
    </footer>
  );
};

export default Footer;