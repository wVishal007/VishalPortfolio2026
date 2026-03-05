import React from "react";

/**
 * COMPONENT: HobbyCard
 * STYLE: Minimalist "Noir" Frame
 * THEME: Lavender / Matte Black
 */
const HobbyCard = ({ title, description, image, tags }) => {
  return (
    <div className="group relative bg-[#0a0a0a] border border-white/5 hover:border-[#E6E6FA]/20 transition-all duration-700 flex flex-col h-full overflow-hidden">
      
      {/* Image with High-End Masking */}
      <div className="relative h-64 overflow-hidden bg-[#111]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-in-out"
        />
        {/* Subtle Side Mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>
      </div>

      {/* Content Section */}
      <div className="p-8 space-y-5 flex flex-col flex-1">
        <h3 className="text-2xl font-black text-white tracking-tighter uppercase group-hover:text-[#E6E6FA] transition-colors leading-none">
          {title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed min-h-[60px] font-medium">
          {description}
        </p>

        {/* Minimalist Tech-Style Tags */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 pt-4 border-t border-white/5 mt-auto">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20 group-hover:text-[#E6E6FA]/60 transition-colors"
            >
              // {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Signature Micro-Glow Accent */}
      <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-[#E6E6FA]/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </div>
  );
};

export default HobbyCard;