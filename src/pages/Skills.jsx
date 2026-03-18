import React from "react";
import SkillRow from "../components/SkillCard";
import { skills } from "../data/skillData";

const SkillsSection = () => {
  return (
    <section className="relative w-full py-32 px-6 transition-colors duration-700 bg-white dark:bg-[#0a0a0a] overflow-hidden selection:bg-[#E6E6FA] selection:text-black">
      
      {/* AMBIENT BACKGROUND GLOW - Flips color in light mode */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100 dark:bg-[#E6E6FA]/5 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <header className="mb-32 flex flex-col md:flex-row md:items-end justify-between border-b border-black/5 dark:border-white/5 pb-12">
          <div className="max-w-2xl">
            <span className="text-indigo-600 dark:text-[#E6E6FA] text-[10px] font-black uppercase tracking-[0.5em] mb-6 block">
              Capabilities // 2026_CORE
            </span>
            <h2 className="text-7xl md:text-9xl font-black text-black dark:text-white tracking-tighter uppercase leading-[0.8]">
              TECH<br /> 
              <span className="text-black/10 dark:text-white/10 tracking-normal italic font-light">Ecosystem</span>
            </h2>
          </div>
          
          <p className="mt-8 md:mt-0 text-gray-500 max-w-xs text-xs md:text-sm font-medium leading-relaxed uppercase tracking-widest">
            Merging <span className="text-black dark:text-white">Generative Intelligence</span> with 
            hardened MERN architectures. Refined for the next web epoch.
          </p>
        </header>

        {/* ASYMMETRIC GRID - Creative staggered feel */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`md:col-span-6 ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              <SkillRow {...skill} />
            </div>
          ))}
        </div>
      </div>

      {/* SIDE DECORATIVE INFO */}
      <div className="hidden xl:block absolute left-8 top-1/2 -rotate-90 origin-left">
        <p className="text-[10px] font-mono text-black/20 dark:text-white/10 tracking-[1.5em] uppercase">
          Autonomous_System_Check // Pass
        </p>
      </div>
    </section>
  );
};

export default SkillsSection;