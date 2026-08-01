import React from "react";
import mypic from "../assets/mypic-5.png";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Code2,
  BadgeCheck,
  Trophy,
} from "lucide-react";
import { usePortfolio } from "../context/portfolio";
import useTypewriter from "../hooks/useTypewriter";

const NeuralMesh = () => (
  <svg
    className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
    viewBox="0 0 420 420"
    fill="none"
    aria-hidden="true"
  >
    <g stroke="#22D3EE" strokeOpacity="0.5" strokeWidth="1" className="neural-line">
      <path d="M70 90 L150 60 L230 110 L150 60 L120 180 L150 60" />
      <path d="M230 110 L300 180 L370 150 L300 180 L320 290 L300 180" />
      <path d="M120 180 L220 240 L320 290 L220 240" />
      <path d="M220 240 L200 360" />
    </g>
    <g stroke="#8B5CF6" strokeOpacity="0.5" strokeWidth="1" className="neural-line-rev">
      <path d="M70 90 L120 180" />
      <path d="M230 110 L220 240" />
      <path d="M370 150 L320 290 L200 360 L320 290" />
      <path d="M120 180 L200 360" />
    </g>
    <g fill="#22D3EE">
      <circle className="neural-node" cx="70" cy="90" r="3" />
      <circle className="neural-node" cx="150" cy="60" r="3" style={{ animationDelay: "0.6s" }} />
      <circle className="neural-node" cx="230" cy="110" r="3" style={{ animationDelay: "1.2s" }} />
      <circle className="neural-node" cx="300" cy="180" r="3" style={{ animationDelay: "1.8s" }} />
    </g>
    <g fill="#8B5CF6">
      <circle className="neural-node" cx="120" cy="180" r="3" style={{ animationDelay: "0.9s" }} />
      <circle className="neural-node" cx="220" cy="240" r="3" style={{ animationDelay: "1.5s" }} />
      <circle className="neural-node" cx="320" cy="290" r="3" style={{ animationDelay: "2.1s" }} />
      <circle className="neural-node" cx="200" cy="360" r="3" style={{ animationDelay: "0.3s" }} />
      <circle className="neural-node" cx="370" cy="150" r="3" style={{ animationDelay: "2.7s" }} />
    </g>
  </svg>
);

const AboutMe = () => {
  const { profile, skills, projects, certificates, achievements } = usePortfolio();
  const name = profile.name || "Vishal Singh";
  const firstName = name.split(" ")[0] || "Vishal";
  const lastName = name.split(" ").slice(1).join(" ") || "Singh";
  const role = profile.role || "Full-Stack AI Architect";
  const location = profile.location || "Delhi, India";
  const email = profile.socials?.mail || "mailto:vishalsingh31879@gmail.com";
  const github = profile.socials?.github || "#";
  const linkedin = profile.socials?.linkedin || "#";
  const chips = profile.techChips?.length
    ? profile.techChips
    : ["PyTorch", "Next.js 15", "Neo4j", "Agentic AI", "RAG"];

  const typedRole = useTypewriter(role);

  const stats = [
    { icon: <Code2 size={14} />, value: skills.length, label: "skill_modules" },
    { icon: <ArrowRight size={14} />, value: projects.length, label: "deployments" },
    { icon: <BadgeCheck size={14} />, value: certificates.length, label: "credentials" },
    { icon: <Trophy size={14} />, value: achievements.length, label: "milestones" },
  ];

  const meters = [
    { label: "neural_sync", value: "87%", width: 87 },
    { label: "memory_alloc", value: "64%", width: 64 },
  ];

  const hudChips = [
    { text: "[pytorch:online]", top: "6%", left: "-2rem", delay: 0 },
    { text: "[neural_sync 87%]", top: "38%", right: "-1.5rem", delay: 0.8 },
    { text: "[rag:linked]", top: "70%", left: "-1.5rem", delay: 1.6 },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-36 pb-16 px-4 md:px-6 text-void dark:text-paper">
      {/* Aurora bloom behind the title */}
      <div className="hero-bloom absolute inset-0 -z-10" aria-hidden="true" />

      {/* Faint watermark */}
      <span
        className="watermark parallax-slow absolute -z-10 top-10 right-0 lg:right-8 text-[clamp(3.5rem,13vw,10rem)] leading-none hidden md:block"
        aria-hidden="true"
      >
        vishal_ai_alpha
      </span>

      {/* Ambient drifting particles */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {[
          { size: 3, top: "18%", left: "22%", dx: 40, dy: -140, dur: 11, delay: 0 },
          { size: 2, top: "34%", left: "10%", dx: -30, dy: -120, dur: 13, delay: 1.5 },
          { size: 4, top: "58%", left: "16%", dx: 50, dy: -160, dur: 14, delay: 0.8 },
          { size: 2, top: "70%", left: "38%", dx: -40, dy: -130, dur: 12, delay: 2.2 },
          { size: 3, top: "24%", left: "72%", dx: 30, dy: -110, dur: 15, delay: 3 },
          { size: 2, top: "48%", left: "88%", dx: -25, dy: -140, dur: 12, delay: 1 },
          { size: 3, top: "80%", left: "80%", dx: 35, dy: -120, dur: 13, delay: 2.6 },
        ].map((p, i) => (
          <span
            key={i}
            className="particle"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              "--dx": `${p.dx}px`,
              "--dy": `${p.dy}px`,
              animationDuration: `${p.dur}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* TYPE-LED COLUMN */}
          <div className="lg:col-span-8 relative">
            {/* Floating HUD chips */}
            {hudChips.map((chip, i) => (
              <span
                key={chip.text}
                className="floaty absolute hidden md:inline-block rounded-full border border-primary/25 bg-void/60 dark:bg-void/60 px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-void/70 dark:text-paper/70"
                style={{
                  top: chip.top,
                  left: chip.left,
                  right: chip.right,
                  animationDelay: `${chip.delay}s`,
                }}
              >
                {chip.text}
              </span>
            ))}

            {/* Eyebrow */}
            <div className="enter-up-1 inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                root@vishal:~$ whoami
              </span>
            </div>

            {/* Poster headline */}
            <h1 className="enter-h1 mt-8 font-display font-bold leading-[0.85] tracking-tight">
              <span className="block text-[clamp(4rem,13vw,10rem)] text-void dark:text-paper text-glow-cyan">
                {firstName.toUpperCase()}
              </span>
              <span className="serif-accent block text-[clamp(4rem,13vw,10rem)] text-glow-magenta">
                {lastName}
              </span>
            </h1>

            {/* Role readout */}
            <p className="enter-up-2 mt-6 font-mono text-sm md:text-base text-primary">
              &gt; {typedRole}
              {typedRole.length < role.length && <span className="terminal-cursor ml-1" />}{" "}
              <span className="text-void/40 dark:text-paper/40">// {location}</span>
            </p>

            {/* Bio */}
            <p className="enter-up-3 mt-5 max-w-xl font-body text-base md:text-lg text-void/60 dark:text-paper/60 leading-relaxed">
              {profile.bio ||
                "I engineer autonomous systems and premium digital experiences. Bridging the gap between RAG-based intelligence and modern MERN architecture."}
            </p>

            {/* CTAs */}
            <div
              className="enter-up-1 mt-9 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "1.15s" }}
            >
              <a href={email} className="btn-aurora group inline-flex items-center gap-2.5 rounded-full px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-widest text-void dark:text-paper">
                $ start_project --now
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <div className="flex items-center gap-2.5">
                {[
                  { icon: <Github size={16} />, link: github, label: "github" },
                  { icon: <Linkedin size={16} />, link: linkedin, label: "linkedin" },
                  { icon: <Mail size={16} />, link: email, label: "mail" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.link}
                    target={social.link.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-void/15 dark:border-paper/15 text-void/60 dark:text-paper/60 hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* SUBJECT CARD — portrait */}
          <div className="enter-portrait lg:col-span-4 relative flex justify-center lg:justify-end">
            <NeuralMesh />

            <div className="radar-rings">
              <span className="radar-ring" />
              <span className="radar-ring" />
              <span className="radar-ring" />
            </div>

            <div className="gradient-border hud-corners relative rounded-2xl w-full max-w-[320px] p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface">
                <img
                  src={profile.profileImage || mypic}
                  alt={name}
                  className="w-full h-full object-cover"
                />
                <div className="scanline absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-void/80 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-paper">
                    cam://vishal
                  </p>
                  <span className="flex items-center gap-1 font-mono text-[8px] uppercase tracking-wider text-accent">
                    <span className="pulse-dot h-1 w-1 rounded-full bg-accent" /> live
                  </span>
                </div>
              </div>

              <div className="space-y-3 p-3">
                {meters.map((meter) => (
                  <div key={meter.label}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-void/40 dark:text-paper/40">
                        {meter.label}
                      </span>
                      <span className="index-num font-mono text-[9px] font-bold text-primary">
                        {meter.value}
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-void/10 dark:bg-paper/10">
                      <div
                        className="stripe gradient-bg h-full rounded-full"
                        style={{ width: `${meter.width}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* STATS — spec strip */}
        <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
          {stats.map((stat) => (
            <div key={stat.label} className="aurora-card rounded-lg px-5 py-4">
              <p className="index-num font-display text-3xl font-bold text-void dark:text-paper leading-none">
                {stat.value}
              </p>
              <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-void/40 dark:text-paper/40 flex items-center gap-1.5">
                <span className="text-primary">{stat.icon}</span> {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
