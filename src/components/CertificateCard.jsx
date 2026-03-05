import { useState } from "react";
import { ExternalLink, X, Award } from "lucide-react";

const CertificateCard = ({ title, provider, image, credentialUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div className="group relative rounded-2xl overflow-hidden bg-[#2b2b2b] border border-white/5 hover:border-[#fd6f00]/40 transition-all duration-500 shadow-xl">
        
        {/* Clickable Image Container */}
        <div
          className="relative h-52 overflow-hidden cursor-pointer bg-[#1e1e1e]"
          onClick={() => setIsOpen(true)}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale-[30%] group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-transparent to-transparent opacity-60"></div>
          
          {/* Zoom Indicator */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-black/60 p-3 rounded-full backdrop-blur-sm border border-white/10">
               <Award className="text-[#fd6f00]" size={24} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold text-white leading-tight uppercase tracking-tight">{title}</h3>
          <div className="flex items-center justify-between border-t border-white/5 pt-4">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{provider}</p>
            <a 
              href={credentialUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#fd6f00] hover:text-white transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Redesigned Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="bg-[#2b2b2b] rounded-2xl overflow-hidden max-w-4xl w-full relative shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10">
            
            {/* Header / Close Button */}
            <div className="absolute top-4 right-4 z-10">
                <button
                onClick={() => setIsOpen(false)}
                className="p-2 bg-black/50 text-white rounded-full hover:bg-[#fd6f00] transition-colors"
                >
                <X size={24} />
                </button>
            </div>

            {/* Certificate Preview */}
            <div className="p-2">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
            </div>

            {/* Footer */}
            <div className="p-6 bg-[#1e1e1e] border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                    <h4 className="text-white font-bold">{title}</h4>
                    <p className="text-gray-500 text-sm uppercase tracking-widest">{provider}</p>
                </div>
                {credentialUrl && (
                    <a
                        href={credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-[#fd6f00] text-white font-bold rounded-xl hover:bg-orange-600 transition shadow-lg shadow-orange-900/20"
                    >
                        Verify Credential
                    </a>
                )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificateCard;