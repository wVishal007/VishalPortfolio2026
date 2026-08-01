import { useEffect, useRef, useState } from "react";
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
import Loader from "../components/Loader";
import CustomCursor from "../components/CustomCursor";
import SectionNav from "../components/SectionNav";

const HomePage = () => {
  const location = useLocation();
  const [, setLoading] = useState(true);

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

  return (
    <div className="w-screen max-w-screen">
      <Loader onComplete={() => setLoading(false)} />
      <CustomCursor />
      <SectionNav />

      <Navbar />
      <Analytics />

      <section id="about" ref={aboutRef}>
        <AboutMe />
      </section>

      <section id="skills" ref={skillsRef}>
        <SkillsSection />
      </section>

      <section id="projects" ref={projectsRef}>
        <ProjectsSection />
      </section>

      <section id="certs" ref={certRef}>
        <CertificatesSection />
      </section>

      <section id="achievements" ref={achieveRef}>
        <AchievementsSection />
      </section>

      <section id="hobbies" ref={hobbyRef}>
        <HobbiesSection />
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;