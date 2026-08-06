import React, { useEffect, useState } from "react";

const BOOT_LINES = [
  "> initializing vishal_ai alpha",
  "> mounting neural_graph ........ ok",
  "> loading skill_modules ........ ok",
  "> spinning up agent_hud ........ ok",
  "> linking credential_registry .. ok",
  "> decrypting mission_logs ...... ok",
  "> handshake with @wVishal007 ... ok",
  "> SYSTEM READY",
];

const BootOverlay = () => {
  const [done, setDone] = useState(false);
  const [lines, setLines] = useState([]);
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);
  const containerRef = React.useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || sessionStorage.getItem("boot_seen")) {
      setDone(true);
      return;
    }

    let lineIdx = 0;
    const totalLines = BOOT_LINES.length;
    const totalDuration = 1600;
    const lineInterval = totalDuration / totalLines;

    const addLine = () => {
      if (lineIdx >= totalLines) {
        setFading(true);
        setTimeout(() => {
          sessionStorage.setItem("boot_seen", "1");
          setDone(true);
        }, 400);
        return;
      }
      setLines((prev) => [...prev, BOOT_LINES[lineIdx]]);
      setProgress(((lineIdx + 1) / totalLines) * 100);
      lineIdx++;
      setTimeout(addLine, lineInterval);
    };

    addLine();
  }, []);

  useEffect(() => {
    const handleSkip = () => {
      sessionStorage.setItem("boot_seen", "1");
      setDone(true);
    };
    if (done) return;
    window.addEventListener("click", handleSkip, { once: true });
    window.addEventListener("keydown", handleSkip, { once: true });
    return () => {
      window.removeEventListener("click", handleSkip);
      window.removeEventListener("keydown", handleSkip);
    };
  }, [done]);

  if (done) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[200] bg-void flex flex-col items-center justify-center pointer-events-none"
      role="status"
      aria-live="polite"
    >
      <div className="w-full max-w-xl px-6">
        <div className="font-mono text-[11px] text-primary/90 mb-8">
          <div className="space-y-1.5">
            {lines.map((line, i) => (
              <span key={i} className="boot-line block">
                {line}
              </span>
            ))}
          </div>
        </div>
        <div className="h-1 w-full bg-void/50 rounded-full overflow-hidden border border-primary/20">
          <div
            className="h-full bg-gradient-to-r from-primary via-secondary to-glow rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-[0.2em] text-primary/40 transition-opacity duration-300 ${fading ? "opacity-0" : ""}`}
      >
        press any key to continue
      </div>
      <style jsx>{`
        @keyframes boot-fade {
          0% { opacity: 0; transform: translateY(6px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .boot-line {
          opacity: 0;
          animation: boot-fade 0.35s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default BootOverlay;