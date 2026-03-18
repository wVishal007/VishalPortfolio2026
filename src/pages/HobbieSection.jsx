import React from "react";
import HobbyCard from "../components/personal/HobbyCard";
// import { hobbies } from "../data/hobbyData";


const HobbiesSection = ({ hobbies = [] }) => {
  return (
    <section className="relative w-full py-32 md:py-48 bg-[#FAFAFA] dark:bg-[#0a0a0a] transition-colors duration-700 overflow-hidden">
      
      {/* 1. SECTION HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 border-b-2 border-black/5 dark:border-white/5 pb-20">
          <div className="group">
            <span className="text-indigo-600 dark:text-[#E6E6FA] text-[10px] font-black uppercase tracking-[0.8em] mb-8 block">
              Personal_Dimensions // 05
            </span>
            <h2 className="text-6xl md:text-[10rem] lg:text-[11rem] font-black text-black dark:text-white tracking-tighter uppercase leading-[0.75]">
              BEYOND <br /> 
              <span className="text-transparent border-text-black dark:border-text-white italic opacity-10 group-hover:opacity-100 transition-all duration-1000" 
                    style={{ WebkitTextStroke: "1px currentColor" }}>
                CODEBASE
              </span>
            </h2>
          </div>
          
          <div className="max-w-md lg:text-right">
             <p className="text-gray-500 dark:text-gray-400 text-sm md:text-lg font-medium leading-tight uppercase tracking-tight">
               Refining the human element through <span className="text-black dark:text-white">diverse disciplines</span>. Curiosity is the primary driver of technical innovation.
             </p>
          </div>
        </div>
      </div>

      {/* 2. GRID SYSTEM */}
      <div className="relative max-w-full">
        <div className="max-w-7xl mx-auto px-6 flex gap-8 overflow-x-auto pb-12 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:overflow-visible scrollbar-hide snap-x snap-mandatory">
          {hobbies.map((hobby, index) => (
            <div key={index} className="min-w-[85vw] md:min-w-0 snap-center">
              <HobbyCard {...hobby} />
            </div>
          ))}
        </div>
      </div>

      {/* 3. FOOTER SIGNATURE */}
      <footer className="mt-32 flex flex-col items-center">
        <div className="flex items-center gap-6 mb-12">
           <div className="h-px w-20 bg-black/10 dark:bg-white/10" />
           <div className="p-4 border-2 border-black/5 dark:border-white/5 rotate-45">
             <div className="w-2 h-2 bg-indigo-600 dark:bg-[#E6E6FA]" />
           </div>
           <div className="h-px w-20 bg-black/10 dark:bg-white/10" />
        </div>
        <p className="text-black dark:text-white text-[10px] font-black uppercase tracking-[1.5em] opacity-20 dark:opacity-30">
          Live • Fully • Integrated
        </p>
      </footer>

      {/* STATIC ACCENT */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-indigo-600/10 dark:via-[#E6E6FA]/10 to-transparent" />
    </section>
  );
};

export default HobbiesSection;