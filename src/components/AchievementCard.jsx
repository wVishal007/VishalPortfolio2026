import React, { useRef, useEffect, useState } from "react";
import { Trophy, ArrowUpRight } from "lucide-react";

const AchievementCard = ({ title, description, image, meta, highlight }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({ x: x * 4, y: -y * 4 });
    };

    const onLeave = () => setTilt({ x: 0, y: 0 });

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="group relative bg-[#0a0a0a] border border-white/5 hover:border-[#E6E6FA]/30 transition-all duration-700 flex flex-col h-full min-h-[500px] overflow-hidden"
      style={{
        transform: `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-[#111] shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-transparent opacity-60" />

        {highlight && (
          <div className="absolute top-4 left-4 md:top-6 md:left-6 px-3 py-1 bg-white text-black text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] z-10">
            {highlight}
          </div>
        )}
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-grow relative">
        <div className="space-y-4 md:space-y-5">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white tracking-tighter uppercase leading-[1.1] group-hover:text-[#E6E6FA] transition-colors">
              {title}
            </h3>
            <Trophy className="text-[#E6E6FA] shrink-0 opacity-20 group-hover:opacity-100 transition-all duration-500" size={20} />
          </div>

          <p className="text-gray-500 text-sm leading-relaxed font-medium line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
            {description}
          </p>
        </div>

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

      <div className="absolute -z-10 bottom-0 right-0 w-32 h-32 bg-[#E6E6FA]/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </div>
  );
};

export default AchievementCard;