import TH_INSTA from '../assets/project/instagram-clone/1.PNG'
import TH_ECOMMERCE from '../assets/project/ecommerce-site/1.PNG'
import TH_ANIME from '../assets/project/anime-recommendation/1.PNG'
import TH_ML_SUITE from '../assets/project/ml-lab/1.PNG' // add thumbnail

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack MERN e-commerce application with authentication, Razorpay payments, admin dashboard, and real-time order updates.",
    image: TH_ECOMMERCE,
    tech: ["React", "Node.js", "MongoDB", "Razorpay", "Cloudinary"],
  },

  {
    title: "Instagram Clone",
    description:
      "A social media platform with posts, likes, comments, stories, follow system, and Redux-based state management.",
    image: TH_INSTA,
    tech: ["MERN", "Redux", "JWT", "Cloudinary"],
    github: "https://github.com/wVishal007/INSTACLONE",
    live: "https://instaclone-sje7.onrender.com/",
  },

  {
    title: "Anime Recommendation System",
    description:
      "Machine learning–based recommendation system using NLP techniques like TF-IDF and Cosine Similarity.",
    image: TH_ANIME,
    tech: ["Python", "Flask", "ML", "NLP"],
    github: "https://github.com/wVishal007/AnimeRecommendations",
    live: "https://anime-recommendations-lime.vercel.app/",
  },

  // {
  //   title: "AI-Powered ML Prediction Suite",
  //   description:
  //     "A full-stack machine learning platform featuring Disease Prediction, Fake News Detection, and House Price Prediction. Built with FastAPI, Docker, and Next.js for scalable, real-world AI applications.",
  //   image: TH_ML_SUITE,
  //   tech: [
  //     "Python",
  //     "FastAPI",
  //     "Machine Learning",
  //     "NLP",
  //     "Docker",
  //     "Next.js",
  //   ],
  //   live: "https://lnkd.in/d2WXS7tR",
  // },
];
