import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon, ArrowRight } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Initialize from LocalStorage or default to Dark
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true; 
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    // Apply the class to the <html> element
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      root.classList.remove("light"); // Good practice for v4
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
      localStorage.setItem("theme", "light");
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

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
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 border-b ${
      scrolled 
        ? "bg-white/80 dark:bg-black/80 backdrop-blur-xl border-black/5 dark:border-white/10 py-4" 
        : "bg-transparent border-transparent py-8"
    }`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10">
        
        {/* LOGO */}
        <div className="text-2xl font-black cursor-pointer tracking-tighter group flex items-center gap-1" onClick={() => handleNavigate("/about-me")}>
          <span className="text-indigo-600 dark:text-[#E6E6FA] group-hover:rotate-12 transition-transform duration-500">V</span>
          <span className="text-black dark:text-white transition-colors">ISHAL</span>
        </div>

        {/* DESKTOP NAV */}
        <ul className="hidden lg:flex gap-10">
          {navigations.map((item) => (
            <li key={item.title} onClick={() => handleNavigate(item.path)} className="relative text-[10px] font-black uppercase tracking-[0.4em] text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors cursor-pointer group">
              {item.title}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-indigo-600 dark:bg-[#E6E6FA] transition-all duration-500 group-hover:w-full" />
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 md:gap-8">
          {/* THEME TOGGLE BUTTON */}
          <button onClick={toggleTheme} className="p-2.5 rounded-full border border-black/5 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-all relative">
            <div className="text-black dark:text-white">
              {/* Show Sun if Dark (to switch to light), Moon if Light */}
              {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            </div>
          </button>

          {/* INQUIRY BUTTON */}
          <button className="hidden md:flex items-center gap-3 group relative px-8 py-3 overflow-hidden border border-black/10 dark:border-white/20">
            <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em] text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-500">Inquiry</span>
            <ArrowRight size={14} className="relative z-10 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-all" />
            <div className="absolute inset-0 bg-black dark:bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>

          {/* MOBILE TOGGLE */}
          <button className="lg:hidden text-black dark:text-white" onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 bg-white dark:bg-[#0a0a0a] z-[-1] flex flex-col items-center justify-center gap-8 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-[-10%]"
      }`}>
        {navigations.map((item, index) => (
          <span 
            key={item.title} 
            onClick={() => handleNavigate(item.path)} 
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black/20 dark:text-white/10 hover:text-indigo-600 dark:hover:text-[#E6E6FA] transition-all cursor-pointer transform hover:scale-110"
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {item.title}
          </span>
        ))}
      </div>
    </header>
  );
};

export default Navbar;