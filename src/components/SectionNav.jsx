import { useState, useEffect } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certs", label: "Certs" },
  { id: "achievements", label: "Awards" },
  { id: "hobbies", label: "Hobbies" },
];

export default function SectionNav() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observers = [];
    const ids = sections.map((s) => s.id);

    for (const id of ids) {
      const el = document.getElementById(id);
      if (!el) continue;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    }

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className="group relative flex flex-col items-center gap-2"
          aria-label={label}
        >
          <span
            className={`block w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              active === id
                ? "bg-[#E6E6FA] scale-125 shadow-[0_0_12px_rgba(230,230,250,0.5)]"
                : "bg-white/20 hover:bg-white/40"
            }`}
          />
          <span
            className={`absolute right-6 px-2 py-1 text-[9px] font-black uppercase tracking-[0.2em] whitespace-nowrap rounded bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${
              active === id ? "text-[#E6E6FA]" : "text-white/60"
            }`}
          >
            {label}
          </span>
        </button>
      ))}
    </nav>
  );
}