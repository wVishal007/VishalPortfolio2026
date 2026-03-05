import React from "react";

const HobbyCard = ({ title, description, image, tags }) => {
  return (
    <div className="group relative bg-[#2b2b2b] rounded-2xl overflow-hidden border border-white/5 hover:border-[#fd6f00]/40 transition-all duration-500 flex flex-col h-full shadow-xl">
      
      {/* Image with Dark Overlay */}
      <div className="relative h-56 overflow-hidden bg-[#1e1e1e]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2b2b2b] via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-black text-white tracking-tight uppercase group-hover:text-[#fd6f00] transition-colors">
          {title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed min-h-[60px]">
          {description}
        </p>

        {/* Minimalist Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-[#1e1e1e] text-gray-500 border border-white/5 rounded-md group-hover:text-white group-hover:border-[#fd6f00]/30 transition-all"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Subtle Glow Corner */}
      <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#fd6f00] opacity-0 group-hover:opacity-10 blur-[50px] transition-opacity"></div>
    </div>
  );
};

export default HobbyCard;