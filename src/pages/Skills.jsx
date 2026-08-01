import React from "react";
import SkillRow from "../components/SkillCard";
import { usePortfolio } from "../context/portfolio";

const SkillsSection = () => {
  const { skills } = usePortfolio();
  return (
    <section className="relative w-full py-24 md:py-32 px-6 bg-[#fdfdfd] dark:bg-[#030712] overflow-hidden transition-colors duration-500">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-[#E6E6FA]/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 dark:bg-indigo-500/5 blur-[100px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-24 md:mb-32">
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.05] dark:border-white/[0.08] mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-[#E6E6FA]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/50 dark:text-white/50">
              Technical Arsenal // 2026 Edition
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-black dark:text-white tracking-tighter uppercase leading-[0.8]">
              CORE<br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black/20 via-black to-black/20 dark:from-white/10 dark:via-white dark:to-white/10 italic font-light tracking-normal">Stack</span>
            </h2>
            
            <div className="max-w-sm">
              <p className="text-sm md:text-base text-black/50 dark:text-white/40 font-medium leading-relaxed uppercase tracking-tight">
                Architecting <span className="text-black dark:text-white">autonomous logic</span> with 
                Next.js orchestration and PyTorch deep learning. Built for scale, designed for humans.
              </p>
            </div>
          </div>
        </header>

        {/* ASYMMETRIC GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-16 lg:gap-x-24">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`md:col-span-6 ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
            >
              <SkillRow {...skill} />
            </div>
          ))}
        </div>
      </div>

      {/* FIXED FLOATING DECO (Mobile Responsive hidden) */}
      <div className="hidden 2xl:block fixed right-12 top-1/2 -rotate-90 origin-right pointer-events-none">
        <p className="text-[9px] font-mono text-black/10 dark:text-white/5 tracking-[2em] uppercase">
          System_Integrity_Optimal // Node_01
        </p>
      </div>
    </section>
  );
};

export default SkillsSection;