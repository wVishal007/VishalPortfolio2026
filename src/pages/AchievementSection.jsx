import React from "react";
import AchievementCard from "../components/AchievementCard";
import { usePortfolio } from "../context/portfolio";
import SectionHeader from "../components/terminal/SectionHeader";

const AchievementsSection = () => {
  const { achievements } = usePortfolio();

  return (
    <section className="w-full py-24 md:py-32 px-4 md:px-6 text-void dark:text-paper">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          num="05"
          cmd="milestones.log"
          title={
            <>
              Event <span className="gradient-text">log</span>
            </>
          }
          description="A curated record of competitive excellence across national and international tech circuits."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} index={index} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
