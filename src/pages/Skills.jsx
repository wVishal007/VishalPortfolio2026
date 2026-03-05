import React from "react";
import SkillRow from "../components/SkillCard";
import { skills } from "../data/skillData";

/**
 * COMPONENT: SkillsSection
 * REFACTOR: Goven Morän Editorial Style.
 * THEME: Neon Lavender / Matte Black.
 */
const SkillsSection = () => {
  return (
    <section className="relative w-full py-32 px-6 bg-[#0a0a0a] overflow-hidden selection:bg-[#E6E6FA] selection:text-black">
      
      {/* 1. AMBIENT BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E6E6FA]/5 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* 2. MINIMALIST HEADER */}
        <div className="mb-24 text-left border-l border-white/10 pl-8">
          <span className="text-[#E6E6FA] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">
            Technical Arsenal
          </span>
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-[-0.02em] uppercase leading-none">
            SKILLS <br /> 
            <span className="text-white/20">& EXPERTISE</span>
          </h2>
          <p className="mt-8 text-gray-500 max-w-xl text-sm md:text-base font-medium leading-relaxed tracking-wide">
            Sharpened through autonomous AI research and MERN stack orchestration. 
            Focusing on the intersection of <span className="text-white">LLM intelligence</span> and scalable architecture.
          </p>
        </div>

        {/* 3. SKILL GRID - Refined spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {skills.map((skill, index) => (
            <SkillRow key={index} {...skill} />
          ))}
        </div>
      </div>

      {/* Side Decorative Text */}
      <div className="hidden lg:block absolute right-10 bottom-32 rotate-90 origin-right">
        <span className="text-[9px] font-black uppercase tracking-[1em] text-white/5 whitespace-nowrap">
          VISHAL SINGH // 2026 STACK
        </span>
      </div>
    </section>
  );
};

export default SkillsSection;

