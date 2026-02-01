import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CertificateCard = ({ title, provider, image, credentialUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  return (
    <>
      {/* Card */}
      <div className="group hoverglow relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/40 to-black border border-white/10 hover:border-white/30 transition-all duration-500">
        
        {/* Clickable Image */}
        <div
          className="relative h-48 overflow-hidden cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-3 ">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <div className="flex justify-between">
            <p className="text-sm text-gray-400">{provider}</p>
            <button className="text-black bg-white p-1 text-sm font-bold rounded-lg" onClick={()=>navigate(`${credentialUrl}`)}>Credential</button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 overflow-auto">
    <div className="bg-gray-900 rounded-xl overflow-hidden max-w-3xl w-full mx-4 relative my-20">
      
      {/* Close Button */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-3 right-3 text-white text-2xl font-bold hover:text-red-400"
      >
        &times;
      </button>

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-auto object-contain"
      />

      {/* Credential Button */}
      {credentialUrl && (
        <div className="p-4 text-center">
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-green-400 text-black font-semibold rounded-lg hover:bg-green-300 transition"
          >
            Go to Credential
          </a>
        </div>
      )}
    </div>
  </div>
)}

    </>
  );
};

export default CertificateCard;
