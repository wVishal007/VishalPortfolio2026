import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

/**
 * COMPONENT: Navbar
 * STYLE: Minimalist Glass / Luxury Editorial
 */
const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigations = [
    { title: "Home", path: "/about-me" },
    { title: "Skills", path: "/skills" },
    { title: "Projects", path: "/projects" },
    { title: "Certifications", path: "/certifications" },
    { title: "Achievements", path: "/Achievements" },
  ];

  const handleNavigate = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b ${
        scrolled ? "bg-black/80 backdrop-blur-xl border-white/10 py-4" : "bg-transparent border-transparent py-8"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8">
        
        {/* Logo: Editorial Typeface */}
        <div 
          className="text-2xl font-black cursor-pointer tracking-tighter group flex items-center gap-1"
          onClick={() => handleNavigate("/about-me")}
        >
          <span className="text-[#E6E6FA] group-hover:rotate-12 transition-transform duration-500">V</span>
          <span className="text-white">ISHAL</span>
        </div>

        {/* Desktop Links: High Tracking */}
        <ul className="hidden md:flex gap-12">
          {navigations.map((item) => (
            <li
              key={item.title}
              onClick={() => handleNavigate(item.path)}
              className="relative text-[10px] font-black uppercase tracking-[0.4em] text-white/50 hover:text-white transition-colors cursor-pointer group"
            >
              {item.title}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#E6E6FA] transition-all duration-500 group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* Action Button: Sharp Corners */}
        <button className="hidden md:block group relative px-8 py-2.5 overflow-hidden border border-white/20">
          <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em] text-white">Hire Me</span>
          <div className="absolute inset-0 bg-[#E6E6FA] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          <span className="absolute inset-0 bg-[#E6E6FA] opacity-0 group-hover:opacity-100 group-hover:text-black transition-all" />
        </button>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 top-[73px] bg-black z-50 flex flex-col items-center justify-center gap-12 animate-in slide-in-from-top duration-500">
          {navigations.map((item) => (
            <span 
              key={item.title} 
              onClick={() => handleNavigate(item.path)} 
              className="text-3xl font-black uppercase tracking-widest text-white/40 hover:text-[#E6E6FA]"
            >
              {item.title}
            </span>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;