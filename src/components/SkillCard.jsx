const SkillRow = ({ title, level, icon, gradient }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-black/60 border border-white/10 hover:border-white/30 transition-all duration-300">
      
      {/* Gradient Accent */}
      <div
        className={`absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b ${gradient}`}
      />

      <div className="flex items-start gap-6 p-6">
        
        {/* Icon */}
        <div className="text-3xl shrink-0">
          {icon}
        </div>

        {/* Content */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2">
            {title}
          </h3>

          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            {level}
          </p>
        </div>
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-gradient-to-r from-white/5 to-transparent" />
    </div>
  );
};

export default SkillRow;
