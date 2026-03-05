import React from "react";

const SkillRow = ({ title, level, icon }) => {
  return (
    <div className="group relative overflow-hidden bg-[#2b2b2b] p-7 rounded-2xl border border-white/5 hover:border-[#fd6f00]/30 transition-all duration-500">
      
      {/* Background Accent Glow */}
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#fd6f00] opacity-0 group-hover:opacity-10 blur-[80px] transition-opacity duration-500" />

      <div className="flex flex-col gap-5">
        
        {/* Top Section: Icon & Title */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#1e1e1e] rounded-xl text-[#fd6f00] border border-white/5 group-hover:scale-110 group-hover:bg-[#fd6f00] group-hover:text-white transition-all duration-500">
              {icon}
            </div>
            <h3 className="text-xl font-black text-white tracking-tight uppercase">
              {title}
            </h3>
          </div>
          {/* Fixed the tag here */}
          <span className="text-[#fd6f00] text-sm font-black tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
            {level}
          </span>
        </div>

        {/* The "Cool" Progress Bar: Segmented Style */}
        <div className="relative h-2.5 w-full bg-[#1e1e1e] rounded-full overflow-hidden flex gap-1 p-[2px]">
          {[...Array(20)].map((_, i) => {
            const threshold = parseInt(level) || 85; 
            const isFilled = (i / 20) * 100 < threshold;
            
            return (
              <div 
                key={i}
                className={`h-full flex-1 rounded-sm transition-all duration-700 ${
                  isFilled ? 'bg-[#fd6f00] shadow-[0_0_8px_#fd6f00]' : 'bg-gray-800'
                }`}
                style={{ transitionDelay: `${i * 25}ms` }}
              />
            );
          })}
        </div>

        {/* Bottom Detail */}
        <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
          <span>Technical Proficiency</span>
          <span className="group-hover:text-white transition-colors">Verified Stack</span>
        </div>
      </div>
    </div>
  );
};

export default SkillRow;
