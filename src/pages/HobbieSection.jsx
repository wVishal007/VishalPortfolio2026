import HobbyCard from "../components/personal/HobbyCard";
import { hobbies } from "../data/hobbyData";

const HobbiesSection = () => {
  return (
    <section className="w-full py-24 px-6 bg-gradient-to-br from-black via-purple-950 to-black">
      
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          My <span className="text-purple-400">Hobbies</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Things I genuinely enjoy doing that help me grow creatively and technically.
        </p>
      </div>

      {/* Cards */}
      <div
        className="
          max-w-7xl mx-auto
          flex gap-6 overflow-x-auto pb-4
          md:grid md:grid-cols-2
          lg:grid-cols-3
          md:gap-10
          md:overflow-visible
          scroll-smooth snap-x snap-mandatory
        "
      >
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className="min-w-[90%] snap-center sm:min-w-[80%] md:min-w-0"
          >
            <HobbyCard {...hobby} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HobbiesSection;
