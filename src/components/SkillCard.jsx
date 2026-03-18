import React, { useState } from "react";

const SkillRow = ({ title, level, icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  const segments = 24; 
  const threshold = parseInt(level) || 85;

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative mb-16 md:mb-24 cursor-crosshair transition-all duration-500"
    >
      {/* BACKGROUND DEPTH EFFECT */}
      <div className={`absolute -inset-x-6 -inset-y-4 bg-gray-50 dark:bg-white/[0.02] rounded-xl scale-95 opacity-0 transition-all duration-700 ${isHovered ? 'scale-100 opacity-100' : ''}`} />

      <div className="relative z-10">
        <div className="flex items-end justify-between mb-8">
          <div className="flex items-start gap-6">
            {/* ICON WITH FLOATING ANIMATION */}
            <div className={`text-black dark:text-[#E6E6FA] transition-all duration-700 ${isHovered ? 'translate-y-[-8px] scale-125 opacity-100' : 'opacity-30'}`}>
              {icon}
            </div>
            
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-black dark:text-white tracking-tight uppercase leading-none">
                {title}
              </h3>
              <span className="text-[9px] font-mono text-indigo-500 dark:text-indigo-300 tracking-[0.3em] uppercase opacity-60">
                Lvl_{level}% // Status_Active
              </span>
            </div>
          </div>
        </div>

        {/* CREATIVE SEGMENTED METER */}
        <div className="flex gap-1.5 h-12 items-end">
          {[...Array(segments)].map((_, i) => {
            const isFilled = (i / segments) * 100 < threshold;
            return (
              <div 
                key={i}
                className={`flex-1 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                  isFilled 
                    ? 'bg-black dark:bg-[#E6E6FA] shadow-sm' 
                    : 'bg-black/5 dark:bg-white/5'
                }`}
                style={{ 
                  height: isFilled ? `${40 + (i * 2)}%` : '15%',
                  transitionDelay: isFilled ? `${i * 15}ms` : '0ms',
                  opacity: isHovered ? 1 : isFilled ? 0.7 : 0.3
                }}
              />
            );
          })}
        </div>

        {/* METER FOOTER */}
        <div className="mt-6 flex justify-between border-t border-black/5 dark:border-white/10 pt-4">
          <div className="flex gap-4">
            <span className="text-[8px] font-black text-black/40 dark:text-white/30 uppercase tracking-widest">
              Stability: 0.984ms
            </span>
            <span className="text-[8px] font-black text-black/40 dark:text-white/30 uppercase tracking-widest">
              Type: Full_Stack
            </span>
          </div>
          <div className={`w-2 h-2 rounded-full transition-all duration-500 ${isHovered ? 'bg-indigo-500 animate-ping' : 'bg-black/20 dark:bg-white/10'}`} />
        </div>
      </div>
    </div>
  );
};

export default SkillRow;