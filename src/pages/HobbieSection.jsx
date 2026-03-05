import { hobbies } from "../data/hobbyData";
import React from "react";
import HobbyCard from "../components/personal/HobbyCard";

const HobbiesSection = () => {
  return (
    <section className="w-full py-24 px-6 bg-[#1e1e1e]">
      
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
          Beyond <span className="text-[#fd6f00]">Code</span>
        </h2>
        <div className="w-20 h-1.5 bg-[#fd6f00] mx-auto mt-4 rounded-full"></div>
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Creativity doesn't stop at the keyboard. These are the passions that keep my mind sharp and inspired.
        </p>
      </div>

      {/* Cards Grid */}
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
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className="min-w-[85%] snap-center sm:min-w-[60%] md:min-w-0"
          >
            <HobbyCard {...hobby} />
          </div>
        ))}
      </div>

      {/* Aesthetic Footer Note */}
      <div className="mt-20 text-center">
        <p className="text-gray-600 text-xs font-bold uppercase tracking-[0.4em]">
          Innovate • Create • Repeat
        </p>
      </div>
    </section>
  );
};

export default HobbiesSection;