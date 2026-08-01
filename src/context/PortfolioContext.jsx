import { useEffect, useState } from "react";
import { fetchPortfolioData } from "../lib/api";
import { projects as staticProjects } from "../data/projectData";
import { skills as staticSkills } from "../data/skillData";
import { achievements as staticAchievements } from "../data/achievementData";
import { certificates as staticCertificates } from "../data/certificateData";
import { hobbies as staticHobbies } from "../data/hobbyData";
import { PortfolioContext } from "./portfolio";

export function PortfolioProvider({ children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const staticProfile = {
    name: "Vishal Singh",
    role: "Full-Stack AI Architect",
    bio: "I engineer autonomous systems and premium digital experiences. Bridging the gap between RAG-based intelligence and modern MERN architecture.",
    location: "Delhi, India",
    email: "vishalsingh31879@gmail.com",
    phone: "+91 7290908461",
    website: "https://vishal4u.vercel.app",
    socials: {
      github: "https://github.com/wVishal007",
      linkedin: "https://www.linkedin.com/in/vishal-singh-188013324/",
      mail: "mailto:vishalsingh31879@gmail.com",
    },
    profileImage: "",
    techChips: ["PyTorch", "Next.js 15", "Neo4j", "Agentic AI", "RAG"],
    availability: { available: true, note: "Open to partnerships" },
  };

  useEffect(() => {
    let mounted = true;
    fetchPortfolioData()
      .then((d) => {
        if (mounted) setData(d);
      })
      .catch((err) => {
        if (mounted) setError(err);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const mergedData = data
    ? {
        profile: { ...staticProfile, ...data.profile },
        projects: data.projects?.length
          ? data.projects.map((bp, i) => {
              const sp = staticProjects[i] || {};
              return {
                ...sp,
                ...bp,
                image: sp.image || bp.coverImage || "",
                coverImage: bp.coverImage || sp.image || "",
              };
            })
          : staticProjects,
        skills: data.skills?.length ? data.skills : staticSkills,
        achievements: data.achievements?.length ? data.achievements : staticAchievements,
        certificates: data.certificates?.length ? data.certificates : staticCertificates,
        hobbies: data.hobbies?.length ? data.hobbies : staticHobbies,
      }
    : {
        profile: staticProfile,
        projects: staticProjects,
        skills: staticSkills,
        achievements: staticAchievements,
        certificates: staticCertificates,
        hobbies: staticHobbies,
      };

  return (
    <PortfolioContext.Provider
      value={{
        ...mergedData,
        loading,
        error,
        isUsingFallback: !data,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}