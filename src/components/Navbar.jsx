import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon, ArrowRight } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true; 
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      root.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
      localStorage.setItem("theme", "light");
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDarkMode]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const navigations = [
    { title: "Home", path: "/about-me" },
    { title: "Skills", path: "/skills" },
    { title: "Projects", path: "/projects" },
    { title: "Certifications", path: "/certifications" },
    { title: "Achievements", path: "/Achievements" },
  ];

  const handleNavigate = (path) => {
    setOpen(false);
    setTimeout(() => navigate(path), 300);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      scrolled 
        ? "bg-white/70 dark:bg-[#030712]/70 backdrop-blur-md border-b border-black/5 dark:border-white/10 py-3" 
        : "bg-transparent border-b border-transparent py-6"
    }`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12">
        
        {/* LOGO - Minimal & Bold */}
        <div 
          className="text-xl font-black cursor-pointer tracking-tighter group flex items-center" 
          onClick={() => handleNavigate("/about-me")}
        >
          <span className="text-indigo-600 dark:text-[#E6E6FA] transition-transform duration-500 group-hover:-translate-y-1">V</span>
          <span className="text-black dark:text-white ml-0.5">ISHAL</span>
        </div>

        {/* DESKTOP NAV - Ultra Minimal */}
        <ul className="hidden lg:flex gap-12">
          {navigations.map((item) => (
            <li 
              key={item.title} 
              onClick={() => handleNavigate(item.path)} 
              className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-black/60 dark:text-white/50 hover:text-black dark:hover:text-[#E6E6FA] transition-all cursor-pointer group"
            >
              {item.title}
              <span className="absolute -bottom-1 left-1/2 w-0 h-[1.5px] bg-indigo-600 dark:bg-[#E6E6FA] transition-all duration-300 group-hover:w-full group-hover:left-0" />
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {/* THEME TOGGLE - Icon morph effect */}
          <button 
            onClick={toggleTheme} 
            className="p-2.5 rounded-xl border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:scale-110 active:scale-95 transition-all"
            aria-label="Toggle Theme"
          >
            <div className="text-black dark:text-white">
              {isDarkMode ? <Sun size={18} strokeWidth={2.5} /> : <Moon size={18} strokeWidth={2.5} />}
            </div>
          </button>

          {/* INQUIRY BUTTON - Premium filled hover */}
          <button className="hidden md:flex items-center gap-2 group relative px-6 py-2.5 rounded-full overflow-hidden border border-black dark:border-white/20 transition-all">
            <span className="relative z-10 text-[10px] font-bold uppercase tracking-widest text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
              Get in touch
            </span>
            <ArrowRight size={14} className="relative z-10 text-black dark:text-white group-hover:text-white dark:group-hover:text-black group-hover:translate-x-1 transition-all" />
            <div className="absolute inset-0 bg-black dark:bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>

          {/* MOBILE TOGGLE */}
          <button 
            className="lg:hidden p-2 text-black dark:text-white relative z-[101]" 
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU - Fullscreen Overlay */}
      <div className={`fixed inset-0 bg-white dark:bg-[#030712] z-[99] flex flex-col px-10 justify-center gap-6 transition-all duration-500 ease-in-out ${
        open ? "opacity-100 visible" : "opacity-0 invisible translate-x-full"
      }`}>
        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-black/40 dark:text-white/30 mb-4">Navigation</p>
        {navigations.map((item, index) => (
          <div 
            key={item.title} 
            onClick={() => handleNavigate(item.path)} 
            className={`group flex items-center justify-between border-b border-black/5 dark:border-white/5 pb-4 transition-all duration-500 ${open ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <span className="text-4xl font-bold tracking-tighter text-black dark:text-white group-hover:text-indigo-600 dark:group-hover:text-[#E6E6FA] transition-colors">
              {item.title}
            </span>
            <ArrowRight size={24} className="text-black/20 dark:text-white/20 group-hover:text-indigo-600 dark:group-hover:text-[#E6E6FA] -rotate-45 group-hover:rotate-0 transition-all" />
          </div>
        ))}
      </div>
    </header>
  );
};

export default Navbar;