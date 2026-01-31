import { useState, useRef } from "react";
import CertificateCard from "../components/CertificateCard";
import { certificates } from "../data/certificateData";

const CertificatesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  const visibleCertificates = showAll
    ? certificates
    : certificates.slice(0, 3); // show only 3 initially

  const handleShowLess = () => {
    setShowAll(false);
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 px-6 bg-gradient-to-br from-blue-950 via-black to-blue-900"
    >
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          My <span className="text-green-400">Certificates</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Certifications that validate my learning in web development, AI, and machine learning.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {visibleCertificates.map((cert, index) => (
          <CertificateCard key={index} {...cert} />
        ))}
      </div>

      {/* Show All / Show Less Button (visible on all screens) */}
      {certificates.length > 3 && (
        <div className="mt-14 flex justify-center">
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 rounded-full font-semibold
                         bg-gradient-to-r from-green-400 to-emerald-500
                         text-black shadow-lg hover:scale-105 transition"
            >
              Show All Certificates
            </button>
          ) : (
            <button
              onClick={handleShowLess}
              className="px-8 py-3 rounded-full font-semibold
                         border border-gray-500 text-white
                         hover:bg-white hover:text-black transition"
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
