import { certificates } from "../data/certificateData";
import { useState, useRef } from "react";
import CertificateCard from "../components/CertificateCard";

const CertificatesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  const visibleCertificates = showAll
    ? certificates
    : certificates.slice(0, 3);

  const handleShowLess = () => {
    setShowAll(false);
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 px-6 bg-[#1e1e1e]"
    >
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
          My <span className="text-[#fd6f00]">Certificates</span>
        </h2>
        <div className="w-20 h-1.5 bg-[#fd6f00] mx-auto mt-4 rounded-full"></div>
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Industry-standard certifications validating my expertise in Cloud, AI, and Full-Stack development.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {visibleCertificates.map((cert, index) => (
          <CertificateCard key={index} {...cert} />
        ))}
      </div>

      {/* Interaction Buttons */}
      {certificates.length > 3 && (
        <div className="mt-16 flex justify-center">
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              className="px-10 py-4 bg-[#fd6f00] text-white font-black uppercase tracking-widest text-sm rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-900/20 active:scale-95"
            >
              View All Certificates
            </button>
          ) : (
            <button
              onClick={handleShowLess}
              className="px-10 py-4 border border-gray-700 text-white font-black uppercase tracking-widest text-sm rounded-xl hover:bg-white hover:text-black transition-all active:scale-95"
            >
              Show Less
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default CertificatesSection;