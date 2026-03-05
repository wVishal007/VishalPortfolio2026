import React from "react";
import mypic from "../assets/mypic-2.jpg";
import { Github, Linkedin, Mail, Terminal, Cpu, Code2, Sparkles } from "lucide-react";

const AboutMe = () => {
  const techStack = [
    { name: "Agentic AI", color: "text-[#fd6f00]" },
    { name: "LLMs & RAG", color: "text-white" },
    { name: "LangChain", color: "text-[#fd6f00]" },
    { name: "PyTorch", color: "text-white" },
    { name: "MERN Stack", color: "text-[#fd6f00]" },
    { name: "Next.js", color: "text-white" },
    { name: "TypeScript", color: "text-[#fd6f00]" },
  ];

  return (
    <section className="relative min-h-screen bg-[#1e1e1e] text-white py-20 px-6 overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#fd6f00] rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Bento Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* 1. HERO CARD (Main Intro) */}
          <div className="lg:col-span-8 bg-[#2b2b2b] p-8 md:p-12 rounded-3xl border border-white/5 flex flex-col justify-center space-y-6 shadow-2xl">
            <div className="flex items-center gap-3 text-[#fd6f00] font-black tracking-[0.3em] uppercase text-xs">
              <Sparkles size={16} /> 
              Available for Innovation
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">
              VISHAL <span className="text-[#fd6f00]">SINGH</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
              I architect <span className="text-white">Agentic AI systems</span> and <span className="text-white">Full-Stack solutions</span>. 
              Bridging the gap between <span className="text-[#fd6f00]">Machine Learning</span> and modern web scalability using the MERN stack, Next.js, and LLM orchestration.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 bg-[#fd6f00] text-white font-black uppercase tracking-widest text-sm rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-900/20 active:scale-95">
                Download CV
              </button>
              <div className="flex gap-3">
                {[
                  { icon: <Github />, link: "https://github.com/wVishal007" },
                  { icon: <Linkedin />, link: "https://linkedin.com/in/vishal-singh-188013324/" },
                  { icon: <Mail />, link: "mailto:vishalsingh31879@gmail.com" }
                ].map((social, i) => (
                  <a key={i} href={social.link} className="p-4 bg-[#1e1e1e] rounded-xl border border-white/5 hover:border-[#fd6f00]/50 hover:text-[#fd6f00] transition-all">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 2. IMAGE CARD */}
          <div className="lg:col-span-4 bg-[#2b2b2b] rounded-3xl border border-white/5 overflow-hidden group relative">
            <img 
              src={mypic} 
              alt="Vishal" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6">
              <p className="text-white font-black uppercase tracking-widest text-sm">Based in India</p>
              <p className="text-[#fd6f00] text-xs font-bold uppercase tracking-widest">GMT +5:30</p>
            </div>
          </div>

          {/* 3. TECH TERMINAL CARD */}
          <div className="lg:col-span-5 bg-[#1e1e1e] border border-white/10 rounded-3xl p-8 flex flex-col gap-6 relative group overflow-hidden">
             <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <span className="ml-2 text-[10px] font-bold uppercase tracking-widest text-gray-600">Stack_Debugger</span>
             </div>
             
             <div className="space-y-3">
                {techStack.map((tech, i) => (
                  <div key={i} className="flex items-center gap-4 group/item">
                    <span className="text-gray-700 font-mono text-sm">0{i+1}</span>
                    <span className={`font-black uppercase tracking-tighter text-xl ${tech.color} group-hover/item:translate-x-2 transition-transform`}>
                      {tech.name}
                    </span>
                  </div>
                ))}
             </div>
             
             <Terminal className="absolute -bottom-6 -right-6 text-white opacity-[0.03] rotate-12" size={200} />
          </div>

          {/* 4. SUMMARY / PHILOSOPHY CARD */}
          <div className="lg:col-span-7 bg-[#fd6f00] rounded-3xl p-8 md:p-12 text-[#1e1e1e] flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
              <Cpu size={120} />
            </div>
            
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">
              The Philosophy
            </h3>
            <p className="text-lg md:text-xl font-bold leading-tight uppercase tracking-tight">
              I don't just build apps; I build <span className="bg-black text-white px-2">Intelligence</span>. 
              By combining RAG pipelines with robust MERN architectures, I create software that thinks, adapts, and scales.
            </p>
            
            <div className="mt-8 flex items-center gap-4">
               <div className="h-px flex-1 bg-black/20" />
               <span className="text-xs font-black uppercase tracking-[0.3em]">Code • AI • Vision</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;