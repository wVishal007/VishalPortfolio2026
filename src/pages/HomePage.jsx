import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

import AboutMe from "./AboutMe";
import SkillsSection from "./Skills";
import ProjectsSection from "./ProjectSection";
import CertificatesSection from "./CertificationSection";
import Footer from "../components/Footer";

const HomePage = () => {
  const location = useLocation();

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const certRef = useRef(null);

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
  }, [location.pathname]);

  return (
    <div className="w-screen max-w-screen">
      <Navbar />

      <section ref={aboutRef}>
        <AboutMe />
      </section>

      <section ref={skillsRef}>
        <SkillsSection />
      </section>

      <section ref={projectsRef}>
        <ProjectsSection />
      </section>

      <section ref={certRef}>
        <CertificatesSection />
      </section>
      <Footer/>
    </div>
  );
};

export default HomePage;
