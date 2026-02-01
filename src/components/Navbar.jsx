import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const navigations = [
    { title: "Home", path: "/about-me" },
    { title: "Skills", path: "/skills" },
    { title: "Projects", path: "/projects" },
    { title: "Certifications", path: "/certifications" },
  ];

  const handleNavigate = (path) => {
    navigate(path);
    setOpen(false); // close mobile menu
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-blue-950 via-black to-blue-950 text-white shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div
          className="text-2xl font-extrabold cursor-pointer"
          onClick={() => handleNavigate("/about-me")}
        >
          Vishal's Portfolio<span className="text-blue-400">.</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {navigations.map((item) => (
            <li
              key={item.title}
              onClick={() => handleNavigate(item.path)}
              className="relative cursor-pointer group"
            >
              <span className="group-hover:text-blue-400 transition-colors">
                {item.title}
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <ul className="flex flex-col items-center gap-6 py-6 text-lg font-semibold">
            {navigations.map((item) => (
              <li
                key={item.title}
                onClick={() => handleNavigate(item.path)}
                className="cursor-pointer hover:text-blue-400 transition"
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
