import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#1e1e1e] text-gray-400 overflow-hidden">
      
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#fd6f00] to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10">
          
          {/* Brand & Mission */}
          <div className="space-y-6">
            <h3 className="text-3xl font-black text-white tracking-tighter uppercase">
              <span className="text-[#fd6f00]">V</span>ISHAL
            </h3>
            <p className="text-sm leading-relaxed max-w-xs font-medium text-gray-500">
              AI & Full-Stack Developer specializing in MERN stack and Agentic AI. 
              Turning complex problems into elegant, intelligent solutions.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/wVishal007" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#2b2b2b] rounded-lg text-white hover:text-[#fd6f00] hover:scale-110 transition-all border border-white/5">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/vishal-singh-188013324/" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#2b2b2b] rounded-lg text-white hover:text-[#fd6f00] hover:scale-110 transition-all border border-white/5">
                <Linkedin size={20} />
              </a>
              <a href="mailto:vishalsingh31879@gmail.com" className="p-2 bg-[#2b2b2b] rounded-lg text-white hover:text-[#fd6f00] hover:scale-110 transition-all border border-white/5">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-black text-white uppercase tracking-[0.3em]">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {["About", "Skills", "Projects", "Certifications", "Achievements"].map((item) => (
                <li
                  key={item}
                  className="text-sm font-bold hover:text-[#fd6f00] transition-colors cursor-pointer w-fit"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Availability / Call to Action */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-black text-white uppercase tracking-[0.3em]">
              Availability
            </h4>
            <p className="text-sm font-medium">
              Currently open to <span className="text-white">Internships</span>, <span className="text-white">Freelance</span> projects, and AI collaborations.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2b2b2b] rounded-full border border-[#fd6f00]/30 w-fit">
              <div className="w-2 h-2 bg-[#fd6f00] rounded-full animate-pulse" />
              <span className="text-[10px] font-black text-white uppercase tracking-widest">Available for hire</span>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">
            © {new Date().getFullYear()} Vishal Singh • Digital Portfolio
          </p>
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-600">
            <span>Built with</span>
            <span className="text-[#fd6f00]">React</span>
            <span>&</span>
            <span className="text-[#fd6f00]">Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;