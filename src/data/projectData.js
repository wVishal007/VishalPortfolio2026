import TH_INSTA from '../assets/project/instagram-clone/1.png';
import TH_ECOMMERCE from '../assets/project/ecommerce-site/1.png';
import TH_ANIME from '../assets/project/anime-recommendation/1.png';
import TH_ML_SUITE from '../assets/project/ml-lab/1.png';
import TH_YT_RAG from '../assets/project/youtube-rag/1.png';
import TH_THERAPIST from '../assets/project/therapist-platform/1.png';


export const projects = [
  {
    title: "YouTube RAG Assistant + Chrome Extension",
    description:
      "A YouTube-focused RAG assistant that ingests videos, extracts transcripts, and allows users to ask questions about video content. Features dual frontends: Next.js web app and Chrome extension, with chat-based Q&A, Markdown support, and session management. Future-ready for PDF notes generation and auto-English translation for non-English videos.",
    image: TH_YT_RAG,
    tech: ["Next.js", "React", "Node.js", "Express", "RAG", "LLM", "YouTube API", "Chrome Extension", "STT", "Vector DB"],
    github: "#",
    live: "#",
    category: "AI/ML",
  },
  {
    title: "Therapist AI Assistant",
    description:
      "An AI-powered virtual therapist platform that provides mental health support through chat and video calls. Users can have real-time interactions, receive personalized guidance, and track their sessions. Designed to make mental health support more accessible and interactive.",
    image: TH_THERAPIST,
    tech: ["React", "Node.js", "Express", "MongoDB", "AI", "NLP", "Chatbot", "Video Call Session"],
    github: "https://github.com/wVishal007/ManoSetu-CWB",
    live: "https://manosetu.vercel.app/",
    category: "AI/ML",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack MERN e-commerce application with authentication, Razorpay payments, admin dashboard, and real-time order updates.",
    image: TH_ECOMMERCE,
    tech: ["React", "Node.js", "MongoDB", "Razorpay", "Cloudinary" ,"Expressjs"],
    category: "Web",
  },
  {
    title: "Instagram Clone",
    description:
      "A social media platform with posts, likes, comments, stories, follow system, and Redux-based state management.",
    image: TH_INSTA,
    tech: ["MERN", "Redux", "JWT", "Cloudinary"],
    github: "https://github.com/wVishal007/INSTACLONE",
    live: "https://instaclone-sje7.onrender.com/",
    category: "Web",
  },
  {
    title: "Anime Recommendation System",
    description:
      "Machine learning–based recommendation system using NLP techniques like TF-IDF and Cosine Similarity.",
    image: TH_ANIME,
    tech: ["Python", "Flask", "ML", "NLP","Cosine Similarity"],
    github: "https://github.com/wVishal007/AnimeRecommendations",
    live: "https://anime-recommendations-lime.vercel.app/",
    category: "AI/ML",
  },
  {
    title: "AI-Powered ML Prediction Suite",
    description:
      "A full-stack machine learning platform featuring Disease Prediction, Fake News Detection, and House Price Prediction. Built with FastAPI, Docker, and Next.js for scalable, real-world AI applications.",
    image: TH_ML_SUITE,
    tech: ["Python", "FastAPI", "Machine Learning", "NLP", "Docker", "Next.js"],
    live: "https://lnkd.in/d2WXS7tR",
    category: "AI/ML",
  },
];