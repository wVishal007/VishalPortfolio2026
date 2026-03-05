import React from "react";

/**
 * COMPONENT: SkillRow
 * FIX: Removed React.cloneElement to prevent "Undefined" element crashes.
 * THEME: Neon Lavender / Tactical Noir
 */
const SkillRow = ({ title, level, icon }) => {
  const segments = 32; 
  const threshold = parseInt(level) || 85;

  return (
    <div className="group relative py-8 md:py-10 transition-all duration-500 border-b border-white/[0.03] last:border-0">
      
      {/* 1. HEADER: Icon, Title & Level */}
      <div className="flex items-end justify-between mb-6">
        <div className="flex items-center gap-3 md:gap-5">
          {/* Simple Icon Rendering: No cloning, safer for React */}
          <div className="text-[#E6E6FA] opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out shrink-0">
            {icon}
          </div>
          
          <h3 className="text-sm md:text-xl font-black text-white tracking-[0.2em] uppercase transition-all duration-500 group-hover:tracking-[0.25em]">
            {title}
            <span className="block h-[1px] w-0 group-hover:w-full bg-[#E6E6FA]/40 transition-all duration-700 mt-1" />
          </h3>
        </div>

        <div className="flex flex-col items-end">
          <span className="text-[10px] md:text-xs font-mono font-black text-[#E6E6FA] tracking-tighter">
            SYS_STAT: <span className="group-hover:animate-pulse">{level}%</span>
          </span>
        </div>
      </div>

      {/* 2. THE SEGMENTED METER */}
      <div className="relative h-[8px] md:h-[10px] w-full flex gap-[2px] md:gap-[4px] items-center">
        {[...Array(segments)].map((_, i) => {
          const isFilled = (i / segments) * 100 < threshold;
          
          return (
            <div 
              key={i}
              className={`h-full flex-1 transition-all duration-500 ease-in-out ${
                isFilled 
                  ? 'bg-[#E6E6FA] shadow-[0_0_15px_rgba(230,230,250,0.2)] opacity-100' 
                  : 'bg-white/5 opacity-40'
              } group-hover:h-[120%] group-hover:translate-y-[-1px]`}
              style={{ 
                transitionDelay: isFilled ? `${i * 10}ms` : '0ms'
              }}
            />
          );
        })}

        {/* 3. ACTIVE SCANNING OVERLAY - Pure CSS animation */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="w-24 h-full bg-white/10 blur-2xl absolute -left-24 group-hover:translate-x-[1000%] transition-transform duration-[2s] ease-in-out" />
        </div>
      </div>

      {/* 4. TACTICAL FOOTER */}
      <div className="mt-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#E6E6FA] animate-pulse" />
          <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] text-gray-500 group-hover:text-white transition-colors">
            Neural_Load_Stability: Optimized
          </span>
        </div>
        
        <span className="text-[8px] font-mono text-white/10 uppercase tracking-widest hidden sm:block">
          Ver_03.05.2026
        </span>
      </div>

      {/* Global Row Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E6E6FA]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
    </div>
  );
};

export default SkillRow;