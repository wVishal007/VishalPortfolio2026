import { useState, useEffect } from "react";

const useTheme = () => {
  const getInitialMode = () => {
    const saved = localStorage.getItem("theme");
    if (saved && ["dark", "light", "system"].includes(saved)) return saved;
    return "dark";
  };

  const [mode, setMode] = useState(getInitialMode);
  const [isDark, setIsDark] = useState(false);

  const applyTheme = (newMode) => {
    const root = document.documentElement;
    root.classList.add("theme-switching");
    setTimeout(() => root.classList.remove("theme-switching"), 400);

    let dark = false;
    if (newMode === "dark") dark = true;
    else if (newMode === "light") dark = false;
    else dark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (dark) {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
    setIsDark(dark);
    localStorage.setItem("theme", newMode);
  };

  useEffect(() => {
    applyTheme(mode);
  }, [mode]);

  useEffect(() => {
    if (mode !== "system") return;
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => {
      const root = document.documentElement;
      root.classList.add("theme-switching");
      setTimeout(() => root.classList.remove("theme-switching"), 400);
      if (e.matches) {
        root.classList.add("dark");
        root.classList.remove("light");
        setIsDark(true);
      } else {
        root.classList.remove("dark");
        root.classList.add("light");
        setIsDark(false);
      }
    };
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [mode]);

  const cycle = () => {
    const order = ["dark", "light", "system"];
    const idx = order.indexOf(mode);
    const next = order[(idx + 1) % order.length];
    setMode(next);
  };

  const iconMap = {
    dark: "Moon",
    light: "Sun",
    system: "Monitor",
  };

  return { mode, isDark, cycle, icon: iconMap[mode] };
};

export default useTheme;