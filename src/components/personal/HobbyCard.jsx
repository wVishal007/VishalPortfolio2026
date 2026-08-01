import React, { useState, useRef, useEffect } from "react";

const HobbyCard = ({ title, description, image, tags }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({ x: x * 5, y: -y * 5 });
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
      className="group relative bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 hover:border-indigo-600 dark:hover:border-[#E6E6FA] transition-all duration-500 flex flex-col h-full overflow-hidden shadow-sm hover:shadow-2xl"
      style={{
        transform: `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="relative h-72 md:h-80 overflow-hidden bg-gray-100 dark:bg-[#111]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-90 dark:opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0a0a0a] via-transparent to-transparent opacity-80 group-hover:opacity-20 transition-opacity duration-700" />
      </div>

      <div className="p-8 space-y-6 flex flex-col flex-1 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-[#E6E6FA] group-hover:scale-[2] transition-transform duration-500" />
          <h3 className="text-3xl font-black text-black dark:text-white tracking-tighter uppercase leading-none group-hover:translate-x-2 transition-transform duration-500">
            {title}
          </h3>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed font-medium min-h-[60px]">
          {description}
        </p>

        <div className="flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-black/5 dark:border-white/5 mt-auto">
          {tags && tags.map((tag, index) => (
            <span
              key={index}
              className="text-[9px] font-black uppercase tracking-[0.3em] text-indigo-600/50 dark:text-[#E6E6FA]/40 group-hover:text-indigo-600 dark:group-hover:text-[#E6E6FA] transition-colors"
            >
              // {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute top-0 right-0 w-[2px] h-0 group-hover:h-full bg-indigo-600 dark:bg-[#E6E6FA] transition-all duration-700" />
    </div>
  );
};

export default HobbyCard;