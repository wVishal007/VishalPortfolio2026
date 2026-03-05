import React from "react";
import { Trophy, Calendar } from "lucide-react";

const AchievementCard = ({ title, description, image, meta, highlight }) => {
  return (
    <div className="group relative bg-[#2b2b2b] rounded-2xl overflow-hidden border border-white/5 hover:border-[#fd6f00]/40 transition-all duration-500 flex flex-col h-full shadow-xl">
      
      {/* Image with High-Contrast Finish */}
      <div className="relative h-56 overflow-hidden bg-[#1e1e1e]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2b2b2b] via-transparent to-transparent"></div>

        {/* Highlight Badge - Premium Glass look */}
        {highlight && (
          <div className="absolute top-4 left-4 px-4 py-1.5 rounded-lg bg-[#fd6f00] text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-orange-900/40 border border-white/10">
            {highlight}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex-1 space-y-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-2xl font-black text-white tracking-tight uppercase group-hover:text-[#fd6f00] transition-colors leading-tight">
              {title}
            </h3>
            <Trophy className="text-[#fd6f00] shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" size={24} />
          </div>

          <p className="text-gray-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Meta Row - Technical styling */}
        <div className="flex flex-wrap gap-3 pt-6 border-t border-white/5 mt-4">
          {meta.map((item, index) => (
            <div key={index} className="flex items-center gap-1.5 text-gray-500 group-hover:text-gray-300 transition-colors">
              <div className="w-1 h-1 bg-[#fd6f00] rounded-full" />
              <span className="text-[10px] font-bold uppercase tracking-widest">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;