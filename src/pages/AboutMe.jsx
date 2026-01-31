import React from "react";
import mypic from "../assets/mypic1.JPG";
import { Github, Linkedin, Mail } from "lucide-react";

const AboutMe = () => {

  return (
    <div className="flex hue-rotate-40 flex-col">
      {/* //part-1 */}
      <div className="flex flex-col-reverse md:flex-row w-screen min-h-screen bg-gradient-to-br from-blue-800 via-black to-blue-950 text-white items-center justify-center px-10 py-20 md:px-20">
        {/* 🟩 Left: Text Section */}
        <div className="border-r border-white p-2 md:p-10 w-full md:w-1/2 flex flex-col justify-center items-center md:items-start  text-center md:text-left space-y-6">
         <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
  Hi, I’m <span className="text-white">Vishal Singh</span>
</h1>

<h2 className="mt-4 text-xl md:text-2xl font-semibold text-blue-400">
  Web Developer • MERN Stack • Machine Learning & Deep Learning (PyTorch)
</h2>

<p className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
  I’m a <span className="text-white font-semibold">tech-driven developer</span> who
  builds <span className="text-green-400 font-semibold">scalable web applications</span>{" "}
  and applies <span className="text-yellow-400 font-semibold">AI & Deep Learning</span>{" "}
  to solve real-world problems.
  <br /><br />
  My experience spans from{" "}
  <span className="font-semibold">data preprocessing</span> and{" "}
  <span className="font-semibold">neural network training</span> using{" "}
  <span className="text-red-400 font-semibold">PyTorch</span>,
  to crafting modern full-stack products with{" "}
  <span className="text-blue-400 font-semibold">React</span>,{" "}
  <span className="text-emerald-400 font-semibold">Node.js</span>,{" "}
  <span className="text-green-400 font-semibold">MongoDB</span>, and{" "}
  <span className="text-sky-400 font-semibold">Tailwind CSS</span>.
</p>

          <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-green-400 text-black font-semibold rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] hover:scale-105 transition-all duration-300">
            Let’s Connect 🚀
          </button>
          <div className="flex gap-5 items-center ">
  {/* GitHub */}
  <a
    href="https://github.com/wVishal007"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-gray-400 transition cursor-pointer"
    aria-label="GitHub"
  >
    <Github size={35} />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/vishal-singh-188013324/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-400 transition cursor-pointer"
    aria-label="LinkedIn"
  >
    <Linkedin size={35} />
  </a>

  {/* Email */}
  <a
    href="mailto:vishalsingh31879@gmail.com"
    className="hover:text-red-400 transition cursor-pointer"
    aria-label="Email"
  >
    <Mail size={35} />
  </a>
</div>

        </div>

        {/* 🟦 Right: Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div className="relative group">
            {/* Glowing background ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-green-400 blur-2xl opacity-30 group-hover:opacity-60 transition duration-500"></div>

            {/* Profile Image */}
            <img
              src={mypic}
              alt="Vishal"
              className="grayscale relative rounded-full object-cover w-72 h-72 md:w-136 md:h-136 border-4 border-gray-700 group-hover:border-green-400 shadow-lg transition-all duration-500 ease-in-out transform group-hover:scale-105 group-hover:rotate-2"
            />
          </div>
        </div>
      </div>
      {/* //part-2 */}
      {/* 🟧 Part-2: Hobbies & Interests */}
     <div className="py-4 p-4 bg-gradient-to-tr from-blue-800 via-black to-blue-950">
           <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

        {/* 🧠 Left - Big Heading */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          {/* <h2 className="text-5xl md:text-5xl text-white font-extrabold leading-tight">
            Beyond <span className="text-red-400">Code</span> & Creativity
          </h2> */}
          <p className="text-gray-300 text-lg md:text-xl max-w-lg leading-relaxed">
            Life isn’t just about building apps or designing — it’s also about
            <span className="text-red-400 font-semibold"> living fully</span>.  
            Whether it’s outsmarting someone in{" "}
            <span className="text-blue-400 font-semibold">chess</span>,
            capturing beauty through{" "}
            <span className="text-green-400 font-semibold">photography</span>,
            or smashing a{" "}
            <span className="text-yellow-400 font-semibold">badminton</span>{" "}
            shuttle — I love staying active, creative, and fun-loving.
          </p>
        </div>

        {/* 💬 Right - Small Text / Quote */}
        <div className="w-full md:w-1/2 text-center md:text-right">
          <blockquote className="italic text-gray-300 text-lg md:text-xl font-light border-l-4 md:border-l-0 md:border-r-4 border-red-500 pl-4 md:pr-6">
            “Every day is a new opportunity to play, learn, and create something
            amazing.”
          </blockquote>
        </div>
      </div>
      {/* <div>
        <SkillsSection/>
      </div>
      <div>
        <ProjectsSection/>
      </div>
      <div className="relative">
        <CertificatesSection/>
      </div> */}


     </div>
      {/* //part-3 */}
    </div>
  );
};

export default AboutMe;
