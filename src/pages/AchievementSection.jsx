import AchievementCard from "../components/AchievementCard";
import { achievements } from "../data/achievementData";

const AchievementsSection = () => {
  return (
    <section className="w-full py-24 px-6 bg-gradient-to-br from-black via-blue-950 to-black">
      
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Achievements & <span className="text-yellow-400">Hackathons</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Milestones that reflect my ability to build, compete, and deliver under pressure.
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
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="min-w-[90%] snap-center sm:min-w-[80%] md:min-w-0"
          >
            <AchievementCard {...achievement} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
