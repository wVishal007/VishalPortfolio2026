import React from "react";
import { Trophy, ArrowUpRight } from "lucide-react";

/**
 * COMPONENT: AchievementCard
 * FIX: Overlapping text & Responsive scaling
 */
const AchievementCard = ({ title, description, image, meta, highlight }) => {
  return (
    <div className="group relative bg-[#0a0a0a] border border-white/5 hover:border-[#E6E6FA]/30 transition-all duration-700 flex flex-col h-full min-h-[500px] overflow-hidden">
      
      {/* 1. IMAGE CONTAINER - Uses Aspect Ratio instead of fixed height */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#111] shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>

        {highlight && (
          <div className="absolute top-4 left-4 md:top-6 md:left-6 px-3 py-1 bg-white text-black text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] z-10">
            {highlight}
          </div>
        )}
      </div>

      {/* 2. CONTENT SECTION */}
      <div className="p-6 md:p-8 flex flex-col flex-grow relative">
        <div className="space-y-4 md:space-y-5">
          <div className="flex items-start justify-between gap-4">
            {/* FIX: Leading adjusted from 0.9 to 1.1 to stop overlap on multi-line titles */}
            <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white tracking-tighter uppercase leading-[1.1] group-hover:text-[#E6E6FA] transition-colors">
              {title}
            </h3>
            <Trophy className="text-[#E6E6FA] shrink-0 opacity-20 group-hover:opacity-100 transition-all duration-500" size={20} />
          </div>

          <p className="text-gray-500 text-sm leading-relaxed font-medium line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
            {description}
          </p>
        </div>

        {/* 3. TECHNICAL META ROW - Vertical spacer ensures it stays at the bottom */}
        <div className="mt-auto pt-8 border-t border-white/5 flex flex-wrap items-center gap-x-4 gap-y-2">
          {meta.map((item, index) => (
            <span 
              key={index} 
              className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20 group-hover:text-[#E6E6FA]/80 transition-colors italic"
            >
              // {item}
            </span>
          ))}
          <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
             <ArrowUpRight size={16} className="text-[#E6E6FA]" />
          </div>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute -z-10 bottom-0 right-0 w-32 h-32 bg-[#E6E6FA]/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </div>
  );
};

export default AchievementCard;