import React, { useState, useEffect } from "react";
import mypic from "../assets/mypic-5.png";
import { Github, Linkedin, Mail, Command, ChevronRight } from "lucide-react";
import { usePortfolio } from "../context/portfolio";
import { useTypewriter } from "../hooks/useTypewriter";

const AboutMe = () => {
  const { profile } = usePortfolio();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const roleText = profile.role || "Full-Stack AI Architect";
  const { displayed: typedRole } = useTypewriter(roleText, 60, true);

  useEffect(() => {
    const handleMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 lg:py-0 px-6 overflow-hidden bg-[#fdfdfd] dark:bg-[#030712] text-black dark:text-white transition-colors duration-500">
      
      {/* 1. LAYERED BACKGROUND EFFECTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        {/* Ambient Glows */}
        <div 
          className="absolute top-1/3 -left-24 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-[#E6E6FA]/5 blur-[100px] rounded-full transition-transform duration-700 ease-out"
          style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
        />
        <div 
          className="absolute bottom-1/4 -right-24 w-[400px] h-[400px] bg-blue-500/10 dark:bg-indigo-500/5 blur-[100px] rounded-full"
          style={{ transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)` }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* 2. IMAGE ARCHITECTURE - Optimized for responsiveness */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-[400px] aspect-[4/5] group">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-black/[0.08] dark:border-white/10 rounded-[2rem] translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />
              
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-white/5 border border-black/10 dark:border-white/10">
               <img
                  src={profile.profileImage || mypic}
                  alt={profile.name || "Vishal Singh"}
                  className="w-full h-full scale-150 grayscale object-cover brightness-110 contrast-110 group-hover:grayscale-0 group-hover:scale-120 transition-all duration-1000 ease-in-out"
                />
                
                {/* Tactical Label */}
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md text-[9px] font-mono tracking-tighter text-white px-3 py-1.5 rounded-lg flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                  {profile.location ? `STATIONED_${profile.location.toUpperCase().replace(/\s+/g, "_").replace(/[^A-Z0-9_]/g, "")}` : "STATIONED_DELHI_IND"}
                </div>
              </div>

              {/* Stats Card - Visible only on Desktop */}
              {/* <div 
                className="hidden xl:block absolute -right-16 top-20 p-5 bg-white/80 dark:bg-black/60 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-2xl shadow-2xl"
                style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-white dark:border-black bg-indigo-100 dark:bg-white/10" />)}
                    </div>
                    <span className="text-[10px] font-bold tracking-tight">Agentic_Active</span>
                  </div>
                  <p className="text-[10px] text-black/50 dark:text-white/40 leading-relaxed font-medium">
                    Optimizing neural latency<br/>at <span className="text-indigo-600 dark:text-[#E6E6FA]">2026_runtime</span>
                  </p>
                </div>
              </div> */}
            </div>
          </div>

          {/* 3. EDITORIAL CONTENT */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <header className="space-y-6">
               <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.05] dark:border-white/[0.08]">
                 <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-[#E6E6FA]" />
                 <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60 dark:text-white/60 font-mono">
                   {typedRole}
                   <span className="animate-pulse">|</span>
                 </span>
               </div>
              
               <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.8] mb-8">
                 {(profile.name || "VISHAL").split(" ")[0].toUpperCase()}<br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-b from-black/80 to-black dark:from-white dark:to-white/20">
                   {(profile.name || "VISHAL SINGH").split(" ").slice(1).join(" ").toUpperCase()}.
                 </span>
               </h1>

               <p className="text-lg md:text-xl text-black/60 dark:text-white/40 font-medium leading-relaxed max-w-xl">
                 {profile.bio || "I engineer autonomous systems and premium digital experiences. Bridging the gap between RAG-based intelligence and modern MERN architecture."}
               </p>
            </header>

            {/* 4. SKILL CHIPS */}
               <div className="flex flex-wrap gap-2 mt-8">
                 {(profile.techChips && profile.techChips.length ? profile.techChips : ["PyTorch", "Next.js 15", "Neo4j", "Agentic AI", "RAG"]).map((tech) => (
                   <span key={tech} className="px-4 py-2 rounded-xl bg-white dark:bg-white/5 border border-black/[0.05] dark:border-white/10 text-[10px] font-bold uppercase tracking-widest hover:border-indigo-500/50 transition-colors cursor-default">
                     {tech}
                   </span>
                 ))}
               </div>

            {/* 5. CTAs & SOCIALS */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mt-12">
              <button className="group relative flex items-center gap-4 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-95">
                <span className="relative z-10 text-[11px] font-bold uppercase tracking-widest">Start Project</span>
                <Command size={14} className="relative z-10 group-hover:rotate-12 transition-transform" />
                <div className="absolute inset-0 bg-indigo-600 dark:bg-indigo-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>

               <div className="flex items-center gap-6">
                 {[
                   { icon: <Github size={20} />, link: profile.socials?.github || "#" },
                   { icon: <Linkedin size={20} />, link: profile.socials?.linkedin || "#" },
                   { icon: <Mail size={20} />, link: profile.socials?.mail || "#" },
                 ].map((social, i) => (
                   <a key={i} href={social.link} className="text-black/40 dark:text-white/30 hover:text-indigo-600 dark:hover:text-[#E6E6FA] transition-all">
                     {social.icon}
                   </a>
                 ))}
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;