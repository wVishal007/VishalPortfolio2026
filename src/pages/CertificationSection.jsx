import React, { useState, useRef } from "react";
import CertificateCard from "../components/CertificateCard";
import { usePortfolio } from "../context/portfolio";
import { ChevronDown, ChevronUp } from "lucide-react";

const CertificatesSection = () => {
  const { certificates } = usePortfolio();
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
      className="relative w-full py-32 md:py-48 px-6 bg-white dark:bg-[#0a0a0a] transition-colors duration-700 overflow-hidden"
    >
      {/* REACTIVE AMBIENT GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[400px] bg-indigo-50/50 dark:bg-[#E6E6FA]/[0.02] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto mb-32 flex flex-col items-center text-center">
        <div className="flex items-center gap-4 mb-8">
           <div className="h-px w-12 bg-black dark:bg-white/20" />
           <span className="text-indigo-600 dark:text-[#E6E6FA] text-[10px] font-black uppercase tracking-[0.8em]">
             Credential_Archive
           </span>
           <div className="h-px w-12 bg-black dark:bg-white/20" />
        </div>
        
        <h2 className="text-7xl md:text-[9rem] font-black text-black dark:text-white tracking-tighter uppercase leading-[0.75]">
          MERIT <br /> 
          <span className="text-black/5 dark:text-white/30 italic">RECOGNITION</span>
        </h2>
        
        <p className="mt-12 text-gray-500 dark:text-gray-400 max-w-2xl text-sm md:text-lg font-medium leading-relaxed uppercase tracking-tight">
          Systematically validated by <span className="text-black dark:text-white">Cloud Protocols</span> and 
          <span className="text-black dark:text-white"> Agentic Frameworks</span>.
        </p>
      </div>

      {/* GRID - Responsive Staggering */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
        {visibleCertificates.map((cert, index) => (
          <CertificateCard key={index} {...cert} />
        ))}
      </div>

      {/* BUTTON SYSTEM */}
      {certificates.length > 3 && (
        <div className="mt-32 flex justify-center">
          <button
            onClick={() => showAll ? handleShowLess() : setShowAll(true)}
            className="group flex flex-col items-center gap-6"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black/40 dark:text-white/30 group-hover:text-black dark:group-hover:text-white transition-all">
              {showAll ? "Collapse_Vault" : "Expand_Archive"}
            </span>
            <div className="w-16 h-16 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:border-indigo-500 dark:group-hover:border-[#E6E6FA] transition-all duration-500 bg-white dark:bg-black group-hover:shadow-2xl">
              {showAll ? (
                <ChevronUp size={24} className="text-black dark:text-white" />
              ) : (
                <ChevronDown size={24} className="text-black dark:text-white animate-bounce" />
              )}
            </div>
          </button>
        </div>
      )}

      {/* FOOTER ACCENT */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent" />
    </section>
  );
};

export default CertificatesSection;