import React from "react";
import mypic from "../assets/mypic-5.png";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  MapPin,
  Code2,
  BadgeCheck,
  Trophy,
} from "lucide-react";
import { usePortfolio } from "../context/portfolio";
import useTypewriter from "../hooks/useTypewriter";

const NeuralMesh = () => (
  <svg
    className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
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

  const bootLog = [
    "> initializing vishal_ai v2.6 ...",
    "> loading skill_matrix ........ [ok]",
    "> connecting neural_graph ..... [ok]",
    "> deploying portfolio build ... [ok]",
  ];

  const specs = [
    { key: "location", label: "location", value: location },
    { key: "status", label: "agent_status", value: "online", led: true },
    { key: "role", label: "primary_role", value: role },
    { key: "email", label: "contact_channel", value: "vishalsingh31879@gmail.com" },
  ];

  const meters = [
    { label: "neural_sync", value: "87%", width: 87 },
    { label: "memory_alloc", value: "64%", width: 64 },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-36 pb-16 px-4 md:px-6 text-void dark:text-paper">
      {/* Faint watermark */}
      <span
        className="watermark absolute -z-10 top-8 right-0 lg:right-10 text-[clamp(3.5rem,13vw,10rem)] leading-none hidden md:block"
        aria-hidden="true"
      >
        vishal_ai_alpha
      </span>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10 items-center">
          {/* HERO COPY */}
          <div>
            {/* Boot log terminal */}
            <div className="terminal-window hud-corners rounded-lg p-5 font-mono text-[11px] leading-relaxed mb-8 max-w-md">
              {bootLog.map((line, i) => (
                <p
                  key={line}
                  className="boot-line text-void/70 dark:text-paper/70"
                  style={{ animationDelay: `${0.15 + i * 0.18}s` }}
                >
                  {line}
                </p>
              ))}
              <p
                className="boot-line mt-1 text-primary"
                style={{ animationDelay: `${0.15 + bootLog.length * 0.18}s` }}
              >
                &gt; agent_status:{" "}
                <span className="text-accent">ONLINE</span>
                <span className="terminal-cursor ml-1.5" />
              </p>
            </div>

            <h1 className="font-display font-bold leading-[1.02] tracking-tight text-[clamp(3rem,8vw,6rem)] text-void dark:text-paper">
              root@vishal:~$
              <br />
              <span className="gradient-text text-glow-violet">{name}</span>
            </h1>

            <p className="mt-4 font-mono text-sm md:text-base text-primary">
              &gt; {typedRole}
              {typedRole.length < role.length && (
                <span className="terminal-cursor ml-1" />
              )}{" "}
              <span className="text-void/40 dark:text-paper/40">// {location}</span>
            </p>

            <p className="mt-6 font-body text-base md:text-lg text-void/60 dark:text-paper/60 leading-relaxed max-w-xl">
              {profile.bio ||
                "I engineer autonomous systems and premium digital experiences. Bridging the gap between RAG-based intelligence and modern MERN architecture."}
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-10">
              <a href={email} className="group inline-flex">
                <span className="gradient-border inline-flex items-center gap-2.5 rounded-lg px-6 py-3.5 font-mono text-[11px] font-bold uppercase tracking-widest text-primary hover:opacity-90 transition-opacity">
                  $ start_project --now
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </a>
              <div className="flex items-center gap-3">
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
                    className="flex h-11 w-11 items-center justify-center rounded border border-void/15 dark:border-paper/15 text-void/60 dark:text-paper/60 hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Spec readout grid */}
            <div className="grid grid-cols-2 gap-3 mt-12 max-w-md">
              {specs.map((spec) => (
                <div
                  key={spec.key}
                  className="terminal-window rounded-md px-4 py-3"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-void/40 dark:text-paper/40">
                    {spec.label}
                  </p>
                  <p className="mt-1.5 font-mono text-[11px] font-bold text-void/80 dark:text-paper/80 flex items-center gap-2">
                    {spec.led && (
                      <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
                    )}
                    <span className="truncate">{spec.value}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* PORTRAIT TERMINAL */}
          <div className="relative flex justify-center lg:justify-end">
            <NeuralMesh />

            <div className="radar-rings">
              <span className="radar-ring" />
              <span className="radar-ring" />
              <span className="radar-ring" />
            </div>

            <div className="gradient-border hud-corners relative rounded-xl w-full max-w-[400px]">
              {/* Title bar */}
              <div className="flex items-center gap-2 border-b border-void/10 dark:border-paper/10 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                <span className="ml-2 font-mono text-[9px] uppercase tracking-widest text-void/40 dark:text-paper/40">
                  cam://vishal
                </span>
                <span className="ml-auto index-num font-mono text-[9px] text-primary">
                  live
                </span>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                <img
                  src={profile.profileImage || mypic}
                  alt={name}
                  className="w-full h-full object-cover"
                />
                <div className="scanline absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-void/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-paper">
                    {role}
                  </p>
                  <span className="flex items-center gap-1.5 rounded bg-void/70 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-paper">
                    <MapPin size={10} className="text-primary" />{" "}
                    {location.split(",")[0].toUpperCase()}
                  </span>
                </div>
              </div>

              {/* System meters */}
              <div className="space-y-3 p-4">
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

            {/* Floating process tags */}
            {chips.slice(0, 3).map((chip, i) => (
              <span
                key={chip}
                className="terminal-window floaty absolute rounded px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-void/70 dark:text-paper/70"
                style={{
                  top: `${10 + i * 20}%`,
                  left: i === 1 ? "-2rem" : "auto",
                  right: i !== 1 ? "-1.5rem" : "auto",
                  animationDelay: `${i * 0.8}s`,
                }}
              >
                [process] {chip}
              </span>
            ))}
          </div>
        </div>

        {/* STATS — terminal readout strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {stats.map((stat) => (
            <div key={stat.label} className="terminal-window hud-corners rounded-md px-5 py-4">
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
