import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon, TerminalSquare, Monitor, Mail } from "lucide-react";
import { usePortfolio } from "../context/portfolio";
import useTheme from "../hooks/useTheme";
import Magnetic from "../components/ui/Magnetic";

const navigations = [
  { title: "home", path: "/about-me", num: "01" },
  { title: "skills", path: "/skills", num: "02" },
  { title: "projects", path: "/projects", num: "03" },
  { title: "certifications", path: "/certifications", num: "04" },
  { title: "achievements", path: "/Achievements", num: "05" },
  { title: "hobbies", path: "/Hobbies", num: "06" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const { profile } = usePortfolio();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString("en-GB", { hour12: false })
  );

  const { mode, cycle, icon } = useTheme();

  useEffect(() => {
    const ids = ["about", "skills", "projects", "certs", "achievements", "hobbies"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = ids.indexOf(entry.target.id);
            if (idx >= 0) setActive(idx);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-GB", { hour12: false }));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  const handleNavigate = (path) => {
    setOpen(false);
    setTimeout(() => navigate(path), 250);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-4 md:px-6 pt-3">
      <nav className="aurora-card max-w-6xl mx-auto rounded-2xl flex items-center justify-between px-5 md:px-6 py-3">
        {/* LOGO */}
        <div
          className="group flex items-center gap-2.5 cursor-pointer"
          onClick={() => handleNavigate("/about-me")}
        >
          <span className="gradient-bg flex h-7 w-7 items-center justify-center rounded-md text-white glow-shadow">
            <TerminalSquare size={14} />
          </span>
          <span className="font-mono text-sm font-bold text-void dark:text-paper">
            ~/vishal
            <span className="terminal-cursor ml-1.5 hidden sm:inline-block" />
          </span>
        </div>

        {/* DESKTOP NAV */}
        <ul className="hidden lg:flex items-center gap-1.5">
          {navigations.map((item, i) => {
            const isActive = i === active;
            return (
              <li
                key={item.num}
                onClick={() => handleNavigate(item.path)}
                className="group relative cursor-pointer"
              >
                <span
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-[11px] transition-all ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-void/60 dark:text-paper/60 group-hover:text-primary dark:group-hover:text-primary"
                  }`}
                >
                  <span
                    className={`index-num ${isActive ? "text-primary" : "text-void/30 dark:text-paper/30"}`}
                  >
                    &gt;
                  </span>
                  {item.title}
                </span>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2 md:gap-3">
          {/* STATUS + CLOCK + AVAILABILITY */}
          <div className="hidden md:flex items-center gap-2 font-mono text-[10px] text-void/50 dark:text-paper/50">
            <span className="flex items-center gap-1.5">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="uppercase tracking-widest">online</span>
            </span>
            {profile.availability?.available && (
              <span className="flex items-center gap-1 px-2 py-0.5 rounded border border-accent/30 bg-accent/10 text-accent">
                <span className="pulse-dot h-1 w-1 rounded-full bg-accent" />
                <span className="uppercase tracking-widest text-[9px]">{profile.availability.note || "available"}</span>
              </span>
            )}
            <span className="text-void/25 dark:text-paper/25">|</span>
            <span className="index-num">{time}</span>
          </div>

{/* THEME TOGGLE */}
          <button
            onClick={cycle}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-void/15 dark:border-paper/15 text-void/70 dark:text-paper/70 hover:border-primary hover:text-primary transition-colors"
            aria-label={`Theme: ${mode}. Click to cycle.`}
          >
            {icon === "Sun" && <Sun size={14} />}
            {icon === "Moon" && <Moon size={14} />}
            {icon === "Monitor" && <Monitor size={14} />}
          </button>

          {/* CTA */}
          <Magnetic strength={0.2}>
            <a
              href={profile.socials?.mail || "mailto:vishalsingh31879@gmail.com"}
              className="btn-aurora hidden md:flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-void dark:text-paper"
            >
              <Mail size={14} /> {" >"} contact
            </a>
          </Magnetic>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden p-2 text-void dark:text-paper relative z-[101]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE NAV */}
      <div
        className={`fixed inset-0 z-[99] flex flex-col px-8 justify-center gap-3 transition-all duration-500 lg:hidden ${
          open ? "opacity-100 visible bg-void/95 dark:bg-void/95" : "opacity-0 invisible"
        }`}
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/60 mb-6">
          $ index --all
        </p>
        {navigations.map((item, index) => (
          <div
            key={item.num}
            onClick={() => handleNavigate(item.path)}
            className={`group flex items-center gap-5 py-4 border-b border-paper/10 transition-all duration-500 cursor-pointer ${
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 60}ms` }}
          >
            <span className="index-num text-sm text-primary">{item.num}</span>
            <span className="font-display text-2xl font-bold tracking-tight text-paper group-hover:text-primary transition-colors">
              &gt; {item.title}
            </span>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
