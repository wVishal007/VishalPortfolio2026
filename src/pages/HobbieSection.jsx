import React from "react";
import HobbyCard from "../components/personal/HobbyCard";
import { usePortfolio } from "../context/portfolio";
import SectionHeader from "../components/terminal/SectionHeader";

const HobbiesSection = () => {
  const { hobbies } = usePortfolio();
  return (
    <section className="w-full py-24 md:py-32 px-4 md:px-6 text-void dark:text-paper">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          num="06"
          cmd="side_processes.poll"
          title={
            <>
              Side <span className="gradient-text">processes</span>
            </>
          }
          description="Refining the human element through diverse disciplines. Curiosity is the primary driver of technical innovation."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <HobbyCard key={index} index={index} {...hobby} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
