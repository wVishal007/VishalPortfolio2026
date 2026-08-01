import React, { useState, useRef, useEffect } from "react";
import { ExternalLink, X, Award, Eye, ShieldCheck } from "lucide-react";

const CertificateCard = ({ title, provider, image, credentialUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({ x: x * 5, y: -y * 5 });
    };

    const onLeave = () => setTilt({ x: 0, y: 0 });

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={ref}
        className="group flex flex-col gap-6 h-full transition-all duration-700"
        style={{
          transform: `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-[#111] border border-black/5 dark:border-white/5 cursor-pointer rounded-sm shrink-0"
          onClick={() => setIsOpen(true)}
        >
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-indigo-500/40 z-20" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-indigo-500/40 z-20" />

          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-80 dark:opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.5s] ease-[cubic-bezier(0.23,1,0.32,1)] grayscale group-hover:grayscale-0"
          />

          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[4px]">
            <div className="flex flex-col items-center gap-3 text-white font-black uppercase tracking-[0.4em] text-[9px]">
              <div className="p-3 rounded-full bg-white/10 border border-white/20">
                <Eye size={18} className="text-[#E6E6FA]" />
              </div>
              Inspect_Vault
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-grow px-1">
          <div className="flex items-start justify-between gap-6 mb-6">
            <h3 className="text-xl md:text-2xl font-black text-black dark:text-white tracking-tighter uppercase leading-[0.9] group-hover:text-indigo-600 dark:group-hover:text-[#E6E6FA] transition-colors min-h-[3rem]">
              {title}
            </h3>
            <ShieldCheck size={20} className="text-black/10 dark:text-white/10 group-hover:text-indigo-500 dark:group-hover:text-[#E6E6FA] shrink-0 mt-1 transition-colors" />
          </div>

          <div className="flex items-center justify-between border-t border-black/5 dark:border-white/5 pt-5">
            <div className="flex flex-col">
              <span className="text-[8px] font-mono text-gray-400 uppercase tracking-widest mb-1">Provider_Auth</span>
              <span className="text-[10px] font-black text-black dark:text-gray-400 uppercase tracking-[0.2em]">
                {provider}
              </span>
            </div>
            {credentialUrl && (
              <a
                href={credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-black/5 dark:border-white/5 rounded-full text-black/20 dark:text-white/20 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-white/95 dark:bg-black/98 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-500"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="max-w-6xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-16 right-0 text-black dark:text-white flex items-center gap-4 transition-all font-black uppercase tracking-[0.5em] text-[10px] group"
            >
              <span className="opacity-40 group-hover:opacity-100 transition-opacity">Close_Channel</span>
              <div className="p-2 bg-black/5 dark:bg-white/5 rounded-full"><X size={20} /></div>
            </button>

            <div className="bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] dark:shadow-[0_0_80px_rgba(230,230,250,0.05)]">
              <div className="p-4 bg-gray-50 dark:bg-black/40">
                <img src={image} alt={title} className="w-full h-auto max-h-[65vh] object-contain mx-auto transition-transform duration-1000" />
              </div>
              <div className="p-8 md:p-12 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 bg-white dark:bg-[#111]">
                <div className="space-y-3 text-center md:text-left">
                  <h4 className="text-3xl md:text-5xl font-black text-black dark:text-white uppercase tracking-tighter leading-none">
                    {title}
                  </h4>
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                    <p className="text-indigo-600 dark:text-[#E6E6FA] text-[10px] font-black uppercase tracking-[0.5em]">
                      Auth_ID: {provider} // 2026_VERIFIED
                    </p>
                  </div>
                </div>
                {credentialUrl && (
                  <a
                    href={credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-full md:w-auto px-12 py-6 bg-black dark:bg-white text-white dark:text-black font-black uppercase text-[10px] tracking-[0.4em] overflow-hidden transition-all text-center"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Verify_Merit <ExternalLink size={14} />
                    </span>
                    <div className="absolute inset-0 bg-indigo-600 dark:bg-indigo-400 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
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