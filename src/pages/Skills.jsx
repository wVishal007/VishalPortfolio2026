import SkillRow from "../components/SkillCard";

import { skills } from "../data/skillData";

const SkillsSection = () => {
  return (
    <section className="w-full py-20 px-6 bg-gradient-to-bl from-blue-950 via-black to-blue-900">
      
      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          My <span className="text-green-400">Skills</span>
        </h2>
        <p className="mt-4 text-gray-400">
          Skills I’ve sharpened through real projects, freelancing, hackathons, and constant learning.
        </p>
      </div>

      {/* Skill Streams */}
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        {skills.map((skill, index) => (
          <SkillRow key={index} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
