import { useEffect, useState } from "react";

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] transition-opacity duration-500">
      <div className="mb-8">
        <span className="text-4xl font-black uppercase tracking-tighter text-white">
          VISHAL
        </span>
        <span className="text-4xl font-black uppercase tracking-tighter text-[#E6E6FA]">
          .
        </span>
      </div>

      <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#E6E6FA] rounded-full transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.4em] text-white/25">
        Loading...
      </p>
    </div>
  );
}