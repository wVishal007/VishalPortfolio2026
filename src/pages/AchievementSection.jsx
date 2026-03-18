import React from "react";
import AchievementCard from "../components/AchievementCard";
import { achievements } from "../data/achievementData";

const AchievementsSection = () => {
  return (
    <section className="relative w-full py-32 md:py-48 px-0 bg-white dark:bg-[#0a0a0a] transition-colors duration-700 overflow-hidden">
      
      {/* ATMOSPHERIC LAYER */}
      <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-50 dark:bg-[#E6E6FA]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 1. EDITORIAL HEADER ARCHITECTURE */}
        <div className="mb-32 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 border-b border-black/5 dark:border-white/5 pb-20">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-8">
               <span className="w-10 h-[2px] bg-indigo-600 dark:bg-[#E6E6FA]" />
               <span className="text-indigo-600 dark:text-[#E6E6FA] text-[10px] font-black uppercase tracking-[0.8em]">
                 Milestone_Archive // 03
               </span>
            </div>
            <h2 className="text-7xl md:text-[10rem] font-black text-black dark:text-white tracking-tighter uppercase leading-[0.75]">
              VICTOR<br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black/20 via-black/5 to-transparent dark:from-white/40 dark:via-white/60 dark:to-white italic">IES_</span>
            </h2>
          </div>
          
          <div className="max-w-md space-y-6">
            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-lg font-medium leading-tight uppercase tracking-tight">
              A curated record of <span className="text-black dark:text-white underline decoration-indigo-500 underline-offset-8">competitive excellence</span> across international tech circuits.
            </p>
            <div className="flex gap-4 text-[9px] font-mono text-black/20 dark:text-white/20 uppercase tracking-widest">
               <span>Global_Reach</span> / <span>Real_Time_Execution</span>
            </div>
          </div>
        </div>

        {/* 2. RESPONSIVE GRID / CAROUSEL SYSTEM */}
        <div className="relative">
          <div
            className="
              flex gap-8 overflow-x-auto pb-12
              md:grid md:grid-cols-2
              lg:grid-cols-3
              md:gap-12
              md:overflow-visible
              scrollbar-hide
              snap-x snap-mandatory
            "
          >
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="min-w-[85vw] md:min-w-0 snap-center"
              >
                <AchievementCard {...achievement} />
              </div>
            ))}
          </div>
          
          {/* Subtle Mobile Scroll Indicator */}
          <div className="md:hidden flex justify-center gap-2 mt-4">
            <div className="w-8 h-1 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
               <div className="w-1/3 h-full bg-indigo-500 animate-scroll-hint" />
            </div>
          </div>
        </div>
        
        {/* 3. INTERACTIVE FOOTER */}
        <footer className="mt-40 flex flex-col items-center">
           <div className="group cursor-pointer flex flex-col items-center gap-8">
              <div className="w-px h-32 bg-gradient-to-b from-black/20 to-transparent dark:from-white/20 dark:to-transparent group-hover:h-48 transition-all duration-1000" />
              <div className="text-center">
                <span className="text-[10px] font-black uppercase tracking-[1.5em] text-black dark:text-white opacity-20 group-hover:opacity-100 transition-opacity">
                   The_Chronicle_Continues
                </span>
              </div>
           </div>
        </footer>
      </div>

      {/* BACKGROUND WATERMARK */}
      <div className="absolute -bottom-20 -left-10 text-[25vw] font-black text-black/[0.01] dark:text-white/[0.01] uppercase pointer-events-none select-none leading-none -rotate-6">
        CHAMPION
      </div>
    </section>
  );
};

export default AchievementsSection;