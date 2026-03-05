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
    { title: "Achievements", path: "/Achievements" },
  ];

  const handleNavigate = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#1e1e1e] text-white">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        
        {/* Logo Style from Reference */}
        <div className="text-2xl font-bold cursor-pointer tracking-tighter" onClick={() => handleNavigate("/about-me")}>
          <span className="text-[#fd6f00]">V</span>ISHAL
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-sm font-medium">
          {navigations.map((item) => (
            <li
              key={item.title}
              onClick={() => handleNavigate(item.path)}
              className="cursor-pointer hover:text-[#fd6f00] transition-colors"
            >
              {item.title}
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <button className="hidden md:block bg-[#fd6f00] px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition">
          Hire Me
        </button>

        <button className="md:hidden text-[#fd6f00]" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#1e1e1e] border-b border-gray-800">
          <ul className="flex flex-col items-center gap-6 py-8 text-lg font-semibold">
            {navigations.map((item) => (
              <li key={item.title} onClick={() => handleNavigate(item.path)} className="cursor-pointer hover:text-[#fd6f00]">
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
