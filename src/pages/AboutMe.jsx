import React, { useState, useEffect } from "react";
import mypic from "../assets/mypic-2.jpg";
import {
  Github,
  Linkedin,
  Mail,
  Sparkles,
  ExternalLink,
  Orbit,
  Atom,
  Zap,
} from "lucide-react";

const AboutMe = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setMousePos({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#020205] text-white py-24 md:py-40 px-6 overflow-hidden flex items-center">
      {/* 1. ANIMATED SPACE BACKGROUND */}
      <div className="absolute inset-0 z-0">
        {/* Deep Space Gradient */}
        <div className="absolute inset-0 bg-radial-at-t from-[#1a1a3a] via-[#020205] to-[#020205]" />

        {/* Moving Nebula Glows */}
        <div
          className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePos.x * -50}px, ${mousePos.y * -50}px)`,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${mousePos.x * 80}px, ${mousePos.y * 80}px)`,
          }}
        />

        {/* Stars Overlay (Static Grain) */}
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1504333638930-c8787321eee0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FsYXh5fGVufDB8fDB8fHww')] bg-repeat" />
        {/* Stars Overlay (Static Grain) */}
        {/* <div className="absolute inset-0 opacity-40 bg-[url('https://res.cloudinary.com/dzv9idfvq/image/upload/v1614247444/stars_transparent_pkms70.png')] bg-repeat" /> */}
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* 2. THE COSMIC PORTRAIT (Glassmorphism) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative group mx-auto max-w-[400px]">
              {/* Outer Orbit Ring */}
              <div className="absolute inset-[-20px] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-[-20px] border-t border-[#E6E6FA]/40 rounded-full animate-[spin_15s_linear_infinite]" />

              {/* The "Glass" Container */}
              <div className="relative aspect-[4/5] bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={mypic}
                  alt="Vishal Singh"
                  className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-1000 brightness-90 group-hover:brightness-110"
                />

                {/* HUD Elements */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg">
                  <div className="flex justify-between items-center text-[8px] font-black uppercase tracking-[0.2em] text-[#E6E6FA]">
                    <span>Rank: Senior Architect</span>
                    <span className="flex items-center gap-1 animate-pulse">
                      <Zap size={8} /> Online
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. HERO TYPOGRAPHY & CONTENT */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8 text-center lg:text-left">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#E6E6FA]/20 bg-[#E6E6FA]/5 text-[10px] font-black uppercase tracking-[0.4em] text-[#E6E6FA]">
                <Orbit size={12} className="animate-spin-slow" /> Exploration
                Phase 2026
              </span>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none">
                VISHAL <br />
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 blur-2xl opacity-30 animate-pulse" />
                  SINGH
                </span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Forging{" "}
              <span className="text-white font-medium">
                intelligent galaxies
              </span>{" "}
              through RAG pipelines and Full-Stack mastery. My work sits at the
              intersection of{" "}
              <span className="text-[#E6E6FA]">human intuition</span> and
              machine precision.
            </p>

            {/* 4. COSMIC TECH PILLS */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {[
                "Agentic AI",
                "LLMs",
                "MERN",
                "PyTorch",
                "Machine Learning",
                "NextJS",
                "Flask",
                "FastAPI",
                "REST APIs",
              ].map((tech) => (
                <div
                  key={tech}
                  className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#E6E6FA] hover:text-black transition-all cursor-crosshair"
                >
                  {tech}
                </div>
              ))}
            </div>

            {/* 5. CTA SECTION */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
              <button className="group relative px-10 py-4 bg-transparent border border-[#E6E6FA]/30 rounded-full font-black uppercase text-[10px] tracking-[0.4em] overflow-hidden transition-all hover:border-[#E6E6FA]">
                <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors">
                  Open Channel <ExternalLink size={14} />
                </span>
                <div className="absolute inset-0 bg-[#E6E6FA] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>

              <div className="flex gap-6">
                <a
                  href="https://github.com/wVishal007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-[#E6E6FA] transition-all hover:scale-125"
                >
                  <Github size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/vishal-singh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-[#E6E6FA] transition-all hover:scale-125"
                >
                  <Linkedin size={20} />
                </a>

                <a
                  href="mailto:vishalsingh31879@gmail.com"
                  className="text-white/30 hover:text-[#E6E6FA] transition-all hover:scale-125"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Planet Edge */}
      <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] border-[1px] border-white/5 rounded-full" />
    </section>
  );
};

export default AboutMe;
