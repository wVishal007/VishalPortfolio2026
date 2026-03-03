import React from "react";
import mypic from "../assets/mypic-2.jpg";
import { Github, Linkedin, Mail } from "lucide-react";

const skills = [
  "Full-Stack Dev", "MERN Stack", "Machine Learning", "Deep Learning (PyTorch)",
  "LangChain & Agentic AI", "RAG & LLMs", "Next.js & React", "Node.js & Express",
  "MongoDB", "Tailwind CSS"
];

const AboutMe = () => {
  return (
    <div className="relative flex flex-col bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white overflow-hidden">

      {/* Ambient Orbs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-15 animate-slow-pulse"></div>
      <div className="absolute bottom-20 right-16 w-96 h-96 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full blur-3xl opacity-10 animate-slow-pulse"></div>

      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row w-full min-h-screen items-center justify-center px-10 py-20 md:px-20 relative z-10">

        {/* Left Text Section */}
        <div className="md:border-r border-white/20 p-4 md:p-10 w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 animate-text-shimmer">
            Hi, I’m <span className="text-white">Vishal Singh</span>
          </h1>

          <h2 className="mt-2 text-xl md:text-2xl font-semibold text-gray-300">
            AI & Full-Stack Developer • LLM / RAG Enthusiast
          </h2>

          <p className="mt-4 text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
            I craft <span className="text-cyan-400 font-semibold">intelligent web apps</span>, 
            <span className="text-blue-400 font-semibold"> agentic AI systems</span>, and 
            integrate <span className="text-purple-400 font-semibold">LLMs & RAG pipelines</span> 
            to solve real-world problems efficiently.
            <br /><br />
            From <span className="font-semibold">data preprocessing</span> and 
            <span className="font-semibold"> neural network design</span> with 
            <span className="text-red-400 font-semibold"> PyTorch</span>, to 
            building modern full-stack solutions using 
            <span className="text-blue-400 font-semibold"> React</span>, 
            <span className="text-green-400 font-semibold"> Node.js</span>, 
            <span className="text-cyan-400 font-semibold"> MongoDB</span>, and 
            <span className="text-indigo-400 font-semibold"> Tailwind CSS</span>.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3 mt-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium rounded-xl bg-white/10 backdrop-blur-sm text-gray-100 hover:bg-cyan-500 hover:text-black hover:scale-105 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-5 items-center mt-4">
            <a href="https://github.com/wVishal007" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition cursor-pointer">
              <Github size={32} />
            </a>
            <a href="https://www.linkedin.com/in/vishal-singh-188013324/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition cursor-pointer">
              <Linkedin size={32} />
            </a>
            <a href="mailto:vishalsingh31879@gmail.com" className="hover:text-red-400 transition cursor-pointer">
              <Mail size={32} />
            </a>
          </div>

          <button className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-black font-semibold rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:scale-105 transition-all duration-300">
            Let’s Build Futuristic Apps 🚀
          </button>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
          {/* Glass Panel */}
          <div className="absolute inset-0 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl"></div>

          {/* Profile + Floating Skills */}
          <div className="relative flex justify-center items-center w-full h-full">
            {/* Floating Skill Tags */}
            {skills.map((skill, idx) => {
              const angle = (idx / skills.length) * 360;
              return (
                <span
                  key={idx}
                  style={{
                    transform: `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`
                  }}
                  className="absolute px-2 py-1 text-xs font-medium rounded-xl bg-cyan-600/40 text-white backdrop-blur-sm opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-500"
                >
                  {skill}
                </span>
              )
            })}

            {/* Profile Image */}
            <img
              src={mypic}
              alt="Vishal"
              className="relative w-72 h-72 md:w-160 md:h-160 rounded-full border-4 border-gray-700 shadow-2xl object-cover transform transition duration-700 ease-in-out hover:scale-110 hover:rotate-3 hover:brightness-110"
            />
          </div>
        </div>

      </div>

      {/* Hobbies / Philosophy */}
      <div className="py-8 px-6 md:px-20 bg-gradient-to-tr from-gray-900 via-black to-gray-950 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Life is more than just coding — it’s about <span className="text-cyan-400 font-semibold">innovating and creating</span>.  
              Whether designing <span className="text-blue-400 font-semibold">AI systems</span>, 
              playing <span className="text-purple-400 font-semibold">chess</span>, capturing 
              <span className="text-indigo-400 font-semibold"> photography</span>, or smashing 
              a <span className="text-green-400 font-semibold">badminton shuttle</span>, 
              I strive to stay curious, creative, and bold.
            </p>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-right">
            <blockquote className="italic text-gray-400 text-lg md:text-xl font-light border-l-4 md:border-l-0 md:border-r-4 border-cyan-500 pl-4 md:pr-6">
              “Every day is an opportunity to innovate, learn, and push the limits of technology.”
            </blockquote>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutMe;