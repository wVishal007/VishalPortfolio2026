const HobbyCard = ({
  title,
  description,
  image,
  tags,
}) => {
  return (
    <div className="group hoverglow relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900/40 to-black border border-white/10 hover:border-white/30 transition-all duration-500">
      
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-white">
          {title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 text-xs">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded-full bg-white/10 text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HobbyCard;
