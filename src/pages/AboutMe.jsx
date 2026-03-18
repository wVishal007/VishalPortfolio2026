import React, { useState, useEffect } from "react";
import mypic from "../assets/mypic-2.jpg";
import { Github, Linkedin, Mail, ExternalLink, Orbit, Zap, Command } from "lucide-react";

const AboutMe = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 px-6 overflow-hidden transition-colors duration-700 bg-white dark:bg-[#020205] text-black dark:text-white">
      
      {/* 1. DYNAMIC BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        {/* Light Mode: Soft Paper Texture | Dark Mode: Deep Space */}
        <div className="absolute inset-0 opacity-20 dark:opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />
        
        {/* Reactive Glows */}
        <div 
          className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-purple-600/5 blur-[120px] rounded-full transition-transform duration-1000"
          style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* 2. THE IMAGE ARCHITECTURE */}
          <div className="lg:col-span-5 relative group order-2 lg:order-1">
            {/* Background "Card" for Brutalist look */}
            <div className="absolute -inset-4 bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-3xl -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
            
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-2 border-black dark:border-white/20 shadow-[20px_20px_0px_0px_rgba(0,0,0,0.05)] dark:shadow-[20px_20px_0px_0px_rgba(230,230,250,0.03)]">
              <img
                src={mypic}
                alt="Vishal Singh"
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-1000 hover:scale-105"
              />
              
              {/* Tactical Overlay */}
              <div className="absolute top-4 right-4 bg-black/80 text-[#E6E6FA] px-3 py-1 rounded text-[8px] font-mono tracking-widest uppercase backdrop-blur-md">
                Loc: 28.6139° N
              </div>
            </div>

            {/* Floating Stats - The "Agentic" Detail */}
            <div 
              className="hidden lg:block absolute -right-12 bottom-12 p-6 bg-white dark:bg-black border border-black/10 dark:border-white/10 shadow-2xl rounded-xl backdrop-blur-xl"
              style={{ transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px)` }}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[9px] font-black uppercase tracking-tighter">System_Active: Agentic_v3</span>
                </div>
                <div className="h-[1px] w-full bg-black/5 dark:bg-white/10" />
                <p className="text-[10px] leading-tight text-gray-500 font-medium">Processing Neural<br/>Architectures @ 2026.hz</p>
              </div>
            </div>
          </div>

          {/* 3. EDITORIAL TYPOGRAPHY */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-10">
            <header className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="h-[1px] w-12 bg-indigo-600 dark:bg-[#E6E6FA]" />
                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-indigo-600 dark:text-[#E6E6FA]">
                  Senior Agentic Architect
                </span>
              </div>
              
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] italic">
                VISHAL <br />
                <span className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-700 to-black dark:from-white dark:via-gray-400 dark:to-white">
                  SINGH
                </span>
              </h1>
            </header>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light leading-snug max-w-xl">
              Constructing <span className="text-black dark:text-white font-bold underline decoration-indigo-500/30">intelligent ecosystems</span>. 
              Bridging the gap between raw compute and human-centric design with MERN orchestration and LLM logic.
            </p>

            {/* 4. TECH STACK - Minimalist Tags */}
            <div className="flex flex-wrap gap-2">
              {["PyTorch", "Next.js", "Neo4j", "FastAPI", "RAG"].map((tech) => (
                <span key={tech} className="px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 text-[9px] font-black uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-none">
                  {tech}
                </span>
              ))}
            </div>

            {/* 5. CTAs */}
            <div className="flex flex-wrap items-center gap-8 pt-4">
              <button className="relative overflow-hidden group px-12 py-5 bg-black dark:bg-white text-white dark:text-black rounded-full font-black uppercase text-[10px] tracking-[0.4em] transition-transform active:scale-95">
                <span className="relative z-10 flex items-center gap-3">
                  Initiate Sync <Command size={14} />
                </span>
                <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>

              <div className="flex gap-8">
                {[
                  { icon: <Github size={22} />, link: "https://github.com/wVishal007" },
                  { icon: <Linkedin size={22} />, link: "https://www.linkedin.com/in/vishal-singh" },
                  { icon: <Mail size={22} />, link: "mailto:your@email.com" }
                ].map((social, i) => (
                  <a key={social.link} href={social.link} className="text-black/30 dark:text-white/20 hover:text-indigo-600 dark:hover:text-[#E6E6FA] transition-all transform hover:-translate-y-1">
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