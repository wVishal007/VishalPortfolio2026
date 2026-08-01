import React, { useState } from "react";
import { ExternalLink, X, Eye, BadgeCheck } from "lucide-react";

const CertificateCard = ({ title, provider, image, credentialUrl, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="aurora-card group rounded-xl overflow-hidden flex flex-col">
        <div className="flex items-center justify-between gap-2 px-4 py-2.5">
          <span className="index-num font-mono text-[9px] uppercase tracking-widest text-void/40 dark:text-paper/40">
            verify 0x{String((index ?? 0) + 1).padStart(2, "0")}
          </span>
          <BadgeCheck size={13} className="text-primary" />
        </div>

        <div
          className="sheen duotone relative aspect-[4/3] overflow-hidden bg-surface cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover opacity-95 group-hover:scale-[1.03] transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex items-center gap-2 rounded bg-void/70 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-paper">
              <Eye size={13} /> &gt; view
            </div>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-lg font-bold tracking-tight text-void dark:text-paper group-hover:text-primary transition-colors leading-tight">
                {title}
              </h3>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-void/40 dark:text-paper/40">
                {provider}
              </p>
            </div>
            <BadgeCheck size={18} className="text-primary shrink-0 mt-1" />
          </div>

          {credentialUrl && (
            <a
              href={credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="mt-auto pt-4 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-void/50 dark:text-paper/50 hover:text-primary transition-colors w-fit"
            >
              &gt; verify <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-void/80"
          onClick={() => setIsOpen(false)}
        >
          <div className="max-w-6xl w-full relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-14 right-0 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-paper/70 hover:text-primary transition-colors"
            >
              &gt; close <X size={15} />
            </button>

            <div className="aurora-card rounded-xl overflow-hidden">
              <div className="p-4 bg-void/5 dark:bg-paper/5">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-auto max-h-[65vh] object-contain mx-auto"
                />
              </div>
              <div className="p-8 md:p-10 border-t border-void/10 dark:border-paper/10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2 text-center md:text-left">
                  <h4 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-void dark:text-paper">
                    {title}
                  </h4>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-void/50 dark:text-paper/50">
                    {provider} / {new Date().getFullYear()}
                  </p>
                </div>
                {credentialUrl && (
                  <a
                    href={credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-aurora glow-cyan w-full md:w-auto px-8 py-4 rounded font-mono text-[11px] font-bold uppercase tracking-widest text-void dark:text-paper flex items-center justify-center gap-2"
                  >
                    &gt; verify_credential <ExternalLink size={13} />
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
