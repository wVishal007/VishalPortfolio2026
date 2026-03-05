import React, { useState } from "react";
import { ExternalLink, X, Award, Eye } from "lucide-react";

/**
 * COMPONENT: CertificateCard
 * FIX: Text overlap & Responsive spacing
 */
const CertificateCard = ({ title, provider, image, credentialUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* CARD BODY */}
      <div className="group flex flex-col gap-6 h-full">
        <div 
          className="relative aspect-[4/3] overflow-hidden bg-[#111] border border-white/5 cursor-pointer rounded-sm shrink-0"
          onClick={() => setIsOpen(true)}
        >
          {/* Subtle Scanline Texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] z-10 pointer-events-none" />
          
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
             <div className="flex items-center gap-2 text-white font-black uppercase tracking-[0.3em] text-[10px]">
               <Eye size={16} className="text-[#E6E6FA]" /> Quick Preview
             </div>
          </div>
        </div>

        {/* METADATA - Improved spacing to prevent overlap */}
        <div className="flex flex-col flex-grow px-1">
          <div className="flex items-start justify-between gap-4 mb-auto">
            {/* FIX: Changed leading-none to leading-tight (1.25) to prevent multi-line collision */}
            <h3 className="text-lg font-black text-white tracking-tight uppercase leading-tight group-hover:text-[#E6E6FA] transition-colors min-h-[3rem]">
              {title}
            </h3>
            <Award size={18} className="text-white/10 group-hover:text-[#E6E6FA] shrink-0 mt-1" />
          </div>
          
          <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-4">
            <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] truncate mr-2">
              {provider}
            </span>
            <a 
              href={credentialUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/20 hover:text-white transition-all transform hover:rotate-12 shrink-0"
            >
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* LUXURY MODAL - Optimized for Mobile Screens */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/95 backdrop-blur-xl animate-in fade-in duration-500">
          <div className="max-w-5xl w-full relative">
            
            {/* Close Trigger - Better hit area for mobile */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 md:-top-16 text-white/40 hover:text-white flex items-center gap-3 transition-all font-black uppercase tracking-[0.3em] text-[10px]"
            >
              Close <X size={20} />
            </button>

            {/* Content Box */}
            <div className="bg-[#0a0a0a] border border-white/10 overflow-hidden rounded-sm shadow-[0_0_80px_rgba(230,230,250,0.1)]">
              <div className="p-2 md:p-4 bg-black/40">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-auto max-h-[60vh] md:max-h-[70vh] object-contain mx-auto"
                />
              </div>

              {/* Modal Footer - Stacked on Mobile */}
              <div className="p-6 md:p-8 bg-[#111] border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-1">
                  <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-tight">
                    {title}
                  </h4>
                  <p className="text-[#E6E6FA] text-[10px] font-black uppercase tracking-[0.4em] opacity-60">
                    {provider}
                  </p>
                </div>
                
                {credentialUrl && (
                  <a
                    href={credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-full md:w-auto text-center px-10 py-4 bg-white text-black font-black uppercase text-[10px] tracking-[0.3em] overflow-hidden transition-all shrink-0"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Verify Merit <ExternalLink size={12} />
                    </span>
                    <div className="absolute inset-0 bg-[#E6E6FA] translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificateCard;