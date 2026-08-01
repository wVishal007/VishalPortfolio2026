import React, { useState, useRef } from "react";
import CertificateCard from "../components/CertificateCard";
import { usePortfolio } from "../context/portfolio";
import { ChevronDown, ChevronUp } from "lucide-react";
import SectionHeader from "../components/terminal/SectionHeader";

const CertificatesSection = () => {
  const { certificates } = usePortfolio();
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
      className="w-full py-24 md:py-32 px-4 md:px-6 text-void dark:text-paper"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          num="04"
          cmd="credentials.verify --all"
          title={
            <>
              Credential <span className="gradient-text">registry</span>
            </>
          }
          description="Credentials issued by cloud platforms, AI programs, and professional learning institutes."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCertificates.map((cert, index) => (
            <CertificateCard key={index} index={index} {...cert} />
          ))}
        </div>

        {certificates.length > 3 && (
          <div className="mt-14 flex justify-center">
            <button
              onClick={() => (showAll ? handleShowLess() : setShowAll(true))}
              className="rounded border border-void/15 dark:border-paper/15 px-6 py-3 font-mono text-[10px] uppercase tracking-widest text-void/60 dark:text-paper/60 hover:border-primary hover:text-primary transition-all inline-flex items-center gap-2"
            >
              &gt; {showAll ? "collapse" : "expand_all"}
              {showAll ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificatesSection;
