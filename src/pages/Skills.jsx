import React from "react";
import SkillCard from "../components/SkillCard";
import { usePortfolio } from "../context/portfolio";
import SectionHeader from "../components/terminal/SectionHeader";

const SkillsSection = () => {
  const { skills } = usePortfolio();
  return (
    <section className="w-full py-24 md:py-32 px-4 md:px-6 text-void dark:text-paper">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          num="02"
          cmd="skills.load"
          title={
            <>
              Skill <span className="gradient-text">modules</span>
            </>
          }
          description="Architecting autonomous logic with Next.js orchestration and PyTorch deep learning. Built for scale, designed for humans."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, index) => (
            <SkillCard key={index} index={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
