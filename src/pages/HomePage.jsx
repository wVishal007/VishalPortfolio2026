import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import AboutMe from "./AboutMe";
import SkillsSection from "./Skills";
import ProjectsSection from "./ProjectSection";
import CertificatesSection from "./CertificationSection";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";
import HobbiesSection from "./HobbieSection";
import AchievementsSection from "./AchievementSection";
import HudRail from "../components/terminal/HudRail";
import Divider from "../components/terminal/Divider";
import Marquee from "../components/terminal/Marquee";
import BootOverlay from "../components/terminal/BootOverlay";
import useCursorGlow from "../hooks/useCursorGlow";

const HomePage = () => {
  const location = useLocation();
  const progressRef = useRef(null);
  const scrollPctRef = useRef(null);
  const topRef = useRef(null);
  const { glowRef, mousePos } = useCursorGlow();

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const certRef = useRef(null);
  const hobbyRef = useRef(null);
  const achieveRef = useRef(null);

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/about-me") {
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (location.pathname === "/skills") {
      skillsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (location.pathname === "/projects") {
      projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (location.pathname === "/certifications") {
      certRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (location.pathname === "/Hobbies") {
      hobbyRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (location.pathname === "/Achievements") {
      achieveRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname]);

  useEffect(() => {
    const el = progressRef.current;
    if (!el) return;
    let ticking = false;
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0;
      el.style.width = `${p}%`;
      if (scrollPctRef.current) {
        scrollPctRef.current.textContent = `> scroll ${Math.round(p)}%`;
        scrollPctRef.current.classList.toggle("opacity-0", p < 1);
      }
      if (topRef.current) {
        const show = window.scrollY > 600;
        topRef.current.classList.toggle("opacity-0", !show);
        topRef.current.classList.toggle("pointer-events-none", !show);
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  /* Card spotlight — delegated mousemove to set --sx/--sy on hovered .aurora-card */
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let ticking = false;
    const onMove = (e) => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const card = e.target.closest(".aurora-card");
        if (card) {
          const r = card.getBoundingClientRect();
          card.style.setProperty("--sx", `${e.clientX - r.left}px`);
          card.style.setProperty("--sy", `${e.clientY - r.top}px`);
        } else {
          document.querySelectorAll(".aurora-card").forEach((c) => {
            c.style.removeProperty("--sx");
            c.style.removeProperty("--sy");
          });
        }
        ticking = false;
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="relative">
      <BootOverlay />
      {/* Gradient scroll progress */}
      <div
        ref={progressRef}
        className="gradient-bg fixed top-0 left-0 z-[101] h-[3px] rounded-r-full"
        style={{ width: "0%" }}
        aria-hidden="true"
      />

      {/* Scroll readout */}
      <div
        ref={scrollPctRef}
        className="index-num fixed top-14 right-4 z-[95] font-mono text-[9px] uppercase tracking-widest text-primary/70 opacity-0 transition-opacity duration-300 pointer-events-none"
        aria-hidden="true"
      >
        &gt; scroll 0%
      </div>

      {/* Aurora nebula + grid + scanline backdrop */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="aurora breathing absolute inset-0" />
        <span
          className="aurora-orb"
          style={{
            top: "-14%",
            left: "6%",
            width: "46vw",
            height: "46vw",
            background: "radial-gradient(circle, rgba(34,211,238,0.16), transparent 62%)",
            "--ox": "0px",
            "--oy": "0px",
            "--ox2": "80px",
            "--oy2": "-60px",
            "--dur": "28s",
            "--mx": `${(mousePos.x - 0.5) * 40}px`,
            "--my": `${(mousePos.y - 0.5) * 40}px`,
          }}
        />
        <span
          className="aurora-orb"
          style={{
            bottom: "-18%",
            right: "-8%",
            width: "52vw",
            height: "52vw",
            background: "radial-gradient(circle, rgba(139,92,246,0.18), transparent 62%)",
            "--ox": "0px",
            "--oy": "0px",
            "--ox2": "-90px",
            "--oy2": "50px",
            "--dur": "34s",
            "--mx": `${(mousePos.x - 0.5) * -30}px`,
            "--my": `${(mousePos.y - 0.5) * -30}px`,
          }}
        />
        <span
          className="aurora-orb"
          style={{
            top: "38%",
            left: "46%",
            width: "38vw",
            height: "38vw",
            background: "radial-gradient(circle, rgba(232,121,249,0.12), transparent 62%)",
            "--ox": "0px",
            "--oy": "0px",
            "--ox2": "60px",
            "--oy2": "-80px",
            "--dur": "40s",
            "--mx": `${(mousePos.x - 0.5) * 20}px`,
            "--my": `${(mousePos.y - 0.5) * 20}px`,
          }}
        />
        <div className="light-beam absolute top-0 left-0 right-0 h-40" />
        <div className="grid-bg absolute inset-0 opacity-60" />
        <div className="scanline absolute inset-0" />
      </div>

      {/* Cursor spotlight */}
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />

      {/* Cinematic grain + vignette */}
      <div className="grain fixed inset-0 z-[80] pointer-events-none" aria-hidden="true" />
      <div className="vignette fixed inset-0 z-[80] pointer-events-none" aria-hidden="true" />

      {/* HUD status rail */}
      <HudRail />

      {/* Back to top */}
      <button
        ref={topRef}
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 z-[90] hidden md:inline-flex items-center gap-2 rounded border border-primary/40 bg-void/70 px-3.5 py-2 font-mono text-[10px] uppercase tracking-widest text-primary glow-cyan opacity-0 pointer-events-none transition-opacity duration-300 hover:bg-primary/10"
      >
        $ cd ~
      </button>

      <Navbar />

      <main className="relative z-10">
        <section id="about" ref={aboutRef} className="cv-auto">
          <AboutMe />
        </section>

        <Marquee />

        <Divider label="enter modules" />

        <section id="skills" ref={skillsRef} className="cv-auto">
          <SkillsSection />
        </section>

        <Divider label="enter missions" />

        <section id="projects" ref={projectsRef} className="cv-auto">
          <ProjectsSection />
        </section>

        <Divider label="verify credentials" />

        <section id="certs" ref={certRef} className="cv-auto">
          <CertificatesSection />
        </section>

        <Divider label="read event log" />

        <section id="achievements" ref={achieveRef} className="cv-auto">
          <AchievementsSection />
        </section>

        <Divider label="poll side processes" />

        <section id="hobbies" ref={hobbyRef} className="cv-auto">
          <HobbiesSection />
        </section>

        <Footer />
      </main>

      <Analytics />
    </div>
  );
};

export default HomePage;
