import CertificateCard from "../components/CertificateCard";
import { certificates } from "../data/certificateData";

const CertificatesSection = () => {
  return (
    <section className="w-full py-24 px-6 bg-gradient-to-br from-blue-950 via-black to-blue-900">
      
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
        {certificates.map((cert, index) => (
          <CertificateCard key={index} {...cert} />
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
