import TH_INSTA from '../assets/project/instagram-clone/1.PNG'
import TH_ECOMMERCE from '../assets/project/ecommerce-site/1.PNG'
import TH_ANIME from '../assets/project/anime-recommendation/1.PNG'
export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack MERN e-commerce application with authentication, Razorpay payments, admin dashboard, and real-time order updates.",
    image: TH_ECOMMERCE,
    tech: ["React", "Node.js", "MongoDB", "Razorpay", "Cloudinary"],
    github: "https://github.com/yourusername/ecommerce-app",
    live: "https://your-live-site.com",
  },
  {
    title: "Instagram Clone",
    description:
      "A social media platform with posts, likes, comments, stories, follow system, and Redux-based state management.",
    image: TH_INSTA,
    tech: ["MERN", "Redux", "JWT", "Cloudinary"],
    github: "https://github.com/yourusername/instagram-clone",
  },
  {
    title: "Anime Recommendation System",
    description:
      "Machine learning–based recommendation system using NLP techniques like TF-IDF and Cosine Similarity.",
    image: TH_ANIME,
    tech: ["Python", "Flask", "ML", "NLP"],
    github: "https://github.com/yourusername/anime-recommender",
  },
];
