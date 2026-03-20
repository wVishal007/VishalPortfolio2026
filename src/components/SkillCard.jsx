import React, { useState } from "react";

const SkillRow = ({ title, techList, percentage, icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  const segments = 32;
  const threshold = Number(percentage) || 80;

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative mb-12 md:mb-20 transition-all duration-500"
    >
      {/* GLOW EFFECT */}
      <div className={`absolute -inset-x-4 -inset-y-6 bg-indigo-50/50 dark:bg-white/[0.02] rounded-2xl scale-95 opacity-0 transition-all duration-700 ease-out ${isHovered ? 'scale-100 opacity-100' : ''}`} />

      <div className="relative z-10 px-2">
        <div className="flex flex-col mb-6">
          <div className="flex items-center gap-4 mb-3">
             <span className="text-2xl group-hover:scale-110 transition-transform duration-500">
               {icon}
             </span>
             <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white tracking-tight uppercase leading-none">
               {title}
             </h3>
          </div>
          <p className="text-[10px] md:text-xs text-black/40 dark:text-white/30 font-medium uppercase tracking-wider leading-relaxed">
            {techList}
          </p>
        </div>

        {/* DATA METER */}
        <div className="flex gap-[3px] h-10 items-end">
          {[...Array(segments)].map((_, i) => {
            const isFilled = (i / segments) * 100 < threshold;
            // Stable height calculation
            const h = isFilled ? Math.floor(40 + (i * 1.6)) : 10;
            const finalH = h > 100 ? 100 : h;
            
            return (
              <div 
                key={i}
                className={`flex-1 transition-all duration-500 ease-out ${
                  isFilled 
                    ? 'bg-black dark:bg-[#E6E6FA]' 
                    : 'bg-black/[0.05] dark:bg-white/[0.05]'
                }`}
                style={{ 
                  height: `${finalH}%`,
                  transitionDelay: isHovered ? `${i * 10}ms` : '0ms',
                  opacity: isHovered ? 1 : isFilled ? 0.6 : 0.2,
                  borderRadius: '1px'
                }}
              />
            );
          })}
        </div>

        {/* METER FOOTER */}
        <div className="mt-5 flex justify-between items-center border-t border-black/[0.08] dark:border-white/10 pt-4">
          <span className="text-[8px] font-mono text-indigo-600 dark:text-indigo-300 tracking-[0.2em] uppercase">
            Optimization_Score: {threshold}%
          </span>
          <div className="flex items-center gap-2">
            <div className={`w-1.5 h-1.5 rounded-full ${isHovered ? 'bg-indigo-500 animate-pulse' : 'bg-black/10 dark:bg-white/20'}`} />
            <span className="text-[8px] font-bold text-black/40 dark:text-white/40 tracking-tighter uppercase">Protocol_Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillRow;