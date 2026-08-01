import React, { useState, useRef, useEffect } from "react";

const SkillRow = ({ title, techList, percentage, icon, gradient }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const segments = 32;
  const threshold = Number(percentage) || 80;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({ x: x * 6, y: -y * 6 });
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setTilt({ x: 0, y: 0 });
      }}
      className="group relative mb-12 md:mb-20 transition-all duration-500"
      style={{
        transform: `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className={`absolute -inset-x-4 -inset-y-6 rounded-2xl scale-95 opacity-0 transition-all duration-700 ease-out ${
          isHovered ? "scale-100 opacity-100" : ""
        }`}
        style={{
          background: gradient
            ? `linear-gradient(135deg, ${gradient.replace("from-", "").replace(" via-", ", ").replace(" to-", ", ")})`
            : undefined,
          opacity: isHovered ? 0.06 : 0,
        }}
      />

      <div className="relative z-10 px-2">
        <div className="flex flex-col mb-6">
          <div className="flex items-center gap-4 mb-3">
            <span
              className="text-2xl group-hover:scale-110 transition-transform duration-500"
              style={{
                filter: gradient
                  ? `drop-shadow(0 0 8px ${gradient.includes("blue") ? "#3b82f6" : gradient.includes("purple") ? "#a855f7" : gradient.includes("green") ? "#22c55e" : gradient.includes("yellow") ? "#eab308" : gradient.includes("red") ? "#ef4444" : "#E6E6FA"})`
                  : undefined,
              }}
            >
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

        <div className="flex items-center gap-6">
          <div className="relative w-16 h-16 shrink-0">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <circle
                cx="18"
                cy="18"
                r="15.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-black/[0.05] dark:text-white/[0.05]"
              />
              <circle
                cx="18"
                cy="18"
                r="15.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray={`${threshold} 100`}
                strokeLinecap="round"
                className={`transition-all duration-1000 ease-out ${
                  isHovered
                    ? "text-indigo-600 dark:text-[#E6E6FA]"
                    : "text-black/20 dark:text-white/10"
                }`}
                style={{
                  filter: `drop-shadow(0 0 4px ${
                    isHovered ? "#E6E6FA" : "transparent"
                  })`,
                }}
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[8px] font-black text-indigo-600 dark:text-[#E6E6FA]">
              {threshold}%
            </span>
          </div>

          <div className="flex-1">
            <div className="flex gap-[3px] h-10 items-end">
              {[...Array(segments)].map((_, i) => {
                const isFilled = (i / segments) * 100 < threshold;
                const h = isFilled ? Math.floor(40 + (i * 1.6)) : 10;
                const finalH = h > 100 ? 100 : h;

                return (
                  <div
                    key={i}
                    className={`flex-1 transition-all duration-500 ease-out ${
                      isFilled
                        ? "bg-black dark:bg-[#E6E6FA]"
                        : "bg-black/[0.05] dark:bg-white/[0.05]"
                    }`}
                    style={{
                      height: `${finalH}%`,
                      transitionDelay: isHovered ? `${i * 10}ms` : "0ms",
                      opacity: isHovered ? 1 : isFilled ? 0.6 : 0.2,
                      borderRadius: "1px",
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-5 flex justify-between items-center border-t border-black/[0.08] dark:border-white/10 pt-4">
          <span className="text-[8px] font-mono text-indigo-600 dark:text-indigo-300 tracking-[0.2em] uppercase">
            Optimization_Score: {threshold}%
          </span>
          <div className="flex items-center gap-2">
            <div
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                isHovered ? "bg-indigo-500 animate-pulse" : "bg-black/10 dark:bg-white/20"
              }`}
            />
            <span className="text-[8px] font-bold text-black/40 dark:text-white/40 tracking-tighter uppercase">
              Protocol_Active
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillRow;