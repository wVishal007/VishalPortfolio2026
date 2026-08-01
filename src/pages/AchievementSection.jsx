import React from "react";
import AchievementCard from "../components/AchievementCard";
import { usePortfolio } from "../context/portfolio";

const AchievementsSection = () => {
  const { achievements } = usePortfolio();

  return (
    <section className="relative w-full py-32 md:py-48 px-0 bg-white dark:bg-[#0a0a0a] transition-colors duration-700 overflow-hidden">
      <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-50 dark:bg-[#E6E6FA]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
              A curated record of{" "}
              <span className="text-black dark:text-white underline decoration-indigo-500 underline-offset-8">
                competitive excellence
              </span>{" "}
              across international tech circuits.
            </p>
            <div className="flex gap-4 text-[9px] font-mono text-black/20 dark:text-white/20 uppercase tracking-widest">
              <span>Global_Reach</span> / <span>Real_Time_Execution</span>
            </div>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-600/30 via-indigo-600/10 to-transparent dark:from-[#E6E6FA]/30 dark:via-[#E6E6FA]/10" />

          <div className="space-y-16 md:space-y-24">
            {achievements.map((achievement, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isLeft ? "md:text-right md:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`hidden md:block w-1/2 ${
                      isLeft ? "" : ""
                    }`}
                  />
                  <div className="relative z-10 flex-shrink-0 ml-12 md:ml-0 md:w-1/2">
                    <div
                      className={`${
                        isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                      }`}
                    >
                      <AchievementCard {...achievement} />
                    </div>
                  </div>
                  <div className="absolute left-3 md:left-1/2 top-6 w-3 h-3 rounded-full bg-indigo-600 dark:bg-[#E6E6FA] border-2 border-white dark:border-black z-10">
                    <div className="absolute inset-0 rounded-full bg-indigo-600 dark:bg-[#E6E6FA] animate-ping opacity-30" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

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

      <div className="absolute -bottom-20 -left-10 text-[25vw] font-black text-black/[0.01] dark:text-white/[0.01] uppercase pointer-events-none select-none leading-none -rotate-6">
        CHAMPION
      </div>
    </section>
  );
};

export default AchievementsSection;