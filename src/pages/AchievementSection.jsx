import React from "react";
import AchievementCard from "../components/AchievementCard";
import { achievements } from "../data/achievementData";

/**
 * COMPONENT: AchievementsSection
 * STYLE: High-End Portfolio Exhibit
 */
const AchievementsSection = () => {
  return (
    <section className="relative w-full py-32 px-6 bg-[#0a0a0a] overflow-hidden selection:bg-[#E6E6FA] selection:text-black">
      
      {/* Ambient Lighting Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#E6E6FA]/5 blur-[140px] pointer-events-none rounded-full" />

      {/* 1. EDITORIAL HEADER */}
      <div className="max-w-7xl mx-auto mb-24 flex flex-col md:flex-row items-end justify-between gap-10">
        <div className="max-w-3xl">
          <span className="text-[#E6E6FA] text-[10px] font-black uppercase tracking-[0.6em] mb-6 block">
            Archive // Milestones
          </span>
          <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.85]">
            VICTORIES <br /> 
            <span className="text-white/20">& EVENTS</span>
          </h2>
        </div>
        <div className="hidden lg:block w-32 h-px bg-white/10 mb-8" />
        <p className="max-w-md text-gray-500 text-sm md:text-base font-medium leading-relaxed tracking-wide pb-2">
          Significant milestones from <span className="text-white">international hackathons</span> and global competitions that demonstrate the capacity to engineer under extreme pressure.
        </p>
      </div>

      {/* 2. GRID / RESPONSIVE SCROLL */}
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
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="min-w-[90%] snap-center sm:min-w-[75%] md:min-w-0"
          >
            <AchievementCard {...achievement} />
          </div>
        ))}
      </div>
      
      {/* 3. FOOTER DECORATION */}
      <div className="mt-32 flex flex-col items-center gap-6 opacity-20">
        <div className="h-24 w-px bg-gradient-to-b from-white to-transparent"></div>
        <span className="text-[10px] font-black uppercase tracking-[0.8em] text-white whitespace-nowrap">
          The Journey Continues
        </span>
      </div>

      {/* Large Decorative Watermark */}
      <div className="absolute -bottom-10 -right-20 text-[20vw] font-black text-white/[0.02] uppercase pointer-events-none select-none leading-none">
        WINNER
      </div>
    </section>
  );
};

export default AchievementsSection;