import SkillRow from "../components/SkillCard";

import { skills } from "../data/skillData";

const SkillsSection = () => {
  return (
    <section className="w-full py-20 px-6 bg-[#1e1e1e]">
      
      {/* Heading - Centered and Bold like the reference */}
      <div className="max-w-7xl mx-auto mb-20 text-center">
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
          My <span className="text-[#fd6f00]">Skills</span>
        </h2>
        <div className="w-24 h-1.5 bg-[#fd6f00] mx-auto mt-4 rounded-full"></div>
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
          Skills I’ve sharpened through real projects, freelancing, and constant learning in AI and Web.
        </p>
      </div>

      {/* Skill Grid - Changed to a grid for better scannability */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <SkillRow key={index} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
