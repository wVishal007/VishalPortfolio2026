import { achievements } from "../data/achievementData";
import React from "react";
import AchievementCard from "../components/AchievementCard";

const AchievementsSection = () => {
  return (
    <section className="w-full py-24 px-6 bg-[#1e1e1e]">
      
      {/* Heading - Consistent with Projects & Skills */}
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
          Victories & <span className="text-[#fd6f00]">Events</span>
        </h2>
        <div className="w-20 h-1.5 bg-[#fd6f00] mx-auto mt-4 rounded-full"></div>
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Milestones from hackathons and competitions that reflect my ability to build and deliver under pressure.
        </p>
      </div>

      {/* Grid / Horizontal Scroll for Mobile */}
      <div
        className="
          max-w-7xl mx-auto
          flex gap-6 overflow-x-auto pb-8
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
            className="min-w-[85%] snap-center sm:min-w-[70%] md:min-w-0"
          >
            <AchievementCard {...achievement} />
          </div>
        ))}
      </div>
      
      {/* Subtle Visual Element */}
      <div className="mt-24 flex justify-center opacity-20">
        <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-[#fd6f00] to-transparent"></div>
      </div>
    </section>
  );
};

export default AchievementsSection;