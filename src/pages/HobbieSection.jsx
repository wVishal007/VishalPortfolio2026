import React from "react";
import HobbyCard from "../components/personal/HobbyCard";
import { hobbies } from "../data/hobbyData";

/**
 * COMPONENT: HobbiesSection
 * STYLE: Editorial Lifestyle Layout
 */
const HobbiesSection = () => {
  return (
    <section className="relative w-full py-32 px-6 bg-[#0a0a0a] overflow-hidden selection:bg-[#E6E6FA] selection:text-black">
      
      {/* 1. SECTION HEADER (Editorial Style) */}
      <div className="max-w-7xl mx-auto mb-24">
        <div className="flex flex-col md:flex-row items-baseline gap-6 border-b border-white/10 pb-12">
          <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.85]">
            BEYOND <br /> 
            <span className="text-white/20">THE CODE</span>
          </h2>
          <div className="flex-1" />
          <span className="text-[#E6E6FA] text-[10px] font-black uppercase tracking-[0.6em] md:mb-4">
            Personal // Pursuits
          </span>
        </div>
        
        <p className="mt-12 text-gray-500 max-w-xl text-sm md:text-base font-medium leading-relaxed tracking-wide">
          Intelligence is fueled by curiosity. These are the external disciplines that refine my perspective and 
          <span className="text-white"> energize my architecture</span>.
        </p>
      </div>

      {/* 2. RESPONSIVE GRID / HORIZONTAL FLOW */}
      <div
        className="
          max-w-7xl mx-auto
          flex gap-8 overflow-x-auto pb-12
          md:grid md:grid-cols-2
          lg:grid-cols-3
          md:gap-12
          md:overflow-visible
          scrollbar-hide
          snap-x snap-mandatory
        "
      >
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className="min-w-[85%] snap-center sm:min-w-[65%] md:min-w-0"
          >
            <HobbyCard {...hobby} />
          </div>
        ))}
      </div>

      {/* 3. AESTHETIC FOOTER DECOR */}
      <div className="mt-24 flex flex-col items-center gap-8">
        <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <p className="text-white/10 text-[9px] font-black uppercase tracking-[1em] hover:text-[#E6E6FA]/40 transition-colors cursor-default">
          Innovate • Create • Repeat
        </p>
      </div>

      {/* Ambient Radial Gradient Top-Right */}
      <div className="absolute top-0 right-[-10%] w-[40vw] h-[40vw] bg-blue-500/5 blur-[150px] pointer-events-none rounded-full" />
    </section>
  );
};

export default HobbiesSection;