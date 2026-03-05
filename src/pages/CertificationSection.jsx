import React, { useState, useRef } from "react";
import { certificates } from "../data/certificateData";
import CertificateCard from "../components/CertificateCard";
import { ChevronDown, ChevronUp } from "lucide-react";

/**
 * COMPONENT: CertificatesSection
 * THEME: Goven Morän / Neon Lavender
 */
const CertificatesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  const visibleCertificates = showAll ? certificates : certificates.slice(0, 3);

  const handleShowLess = () => {
    setShowAll(false);
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-32 px-6 bg-[#0a0a0a] overflow-hidden selection:bg-[#E6E6FA] selection:text-black"
    >
      {/* 1. SECTION HEADER */}
      <div className="max-w-7xl mx-auto mb-24 flex flex-col items-center text-center">
        <span className="text-[#E6E6FA] text-[10px] font-black uppercase tracking-[0.6em] mb-6 block">
          Verification // Merit
        </span>
        <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
          CREDENTIAL <span className="text-white/20">VAULT</span>
        </h2>
        <p className="mt-8 text-gray-500 max-w-xl text-sm md:text-base font-medium leading-relaxed tracking-wide">
          Industry-standard certifications validating expertise in <span className="text-white">Cloud Architecture</span>, 
          <span className="text-white">Agentic AI</span>, and High-Performance Systems.
        </p>
      </div>

      {/* 2. GRID LAYOUT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {visibleCertificates.map((cert, index) => (
          <CertificateCard key={index} {...cert} />
        ))}
      </div>

      {/* 3. INTERACTION BUTTONS */}
      {certificates.length > 3 && (
        <div className="mt-20 flex justify-center">
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              className="group flex flex-col items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-[#E6E6FA] transition-all"
            >
              <span>View All Merit</span>
              <div className="p-4 rounded-full border border-white/5 group-hover:border-[#E6E6FA]/30 group-hover:shadow-[0_0_20px_rgba(230,230,250,0.1)] transition-all">
                <ChevronDown size={20} className="animate-bounce" />
              </div>
            </button>
          ) : (
            <button
              onClick={handleShowLess}
              className="group flex flex-col items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-[#E6E6FA] transition-all"
            >
              <span>Collapse Archive</span>
              <div className="p-4 rounded-full border border-white/5 group-hover:border-[#E6E6FA]/30 transition-all">
                <ChevronUp size={20} />
              </div>
            </button>
          )}
        </div>
      )}

      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#E6E6FA]/5 to-transparent pointer-events-none" />
    </section>
  );
};

export default CertificatesSection;