const AchievementCard = ({
  title,
  description,
  image,
  meta,
  highlight,
}) => {
  return (
    <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-yellow-900/40 to-black border border-white/10 hover:border-white/30 transition-all duration-500">
      
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        {highlight && (
          <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full bg-yellow-400 text-black">
            {highlight}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-white">
          {title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>

        {/* Meta info */}
        <div className="flex flex-wrap gap-2 text-xs">
          {meta.map((item, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded-full bg-white/10 text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
