import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-blue-950 via-black to-blue-950 text-gray-300">
      
      {/* Top Glow Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-extrabold text-white">
            Vishal<span className="text-blue-400">.</span>
          </h3>
          <p className="mt-4 text-gray-400 leading-relaxed max-w-sm">
            Web Developer focused on MERN stack and Machine Learning.
            I build scalable products and apply AI to solve real-world problems.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Explore
          </h4>
          <ul className="space-y-2">
            {["About", "Skills", "Projects", "Certifications"].map((item) => (
              <li
                key={item}
                className="hover:text-white transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Social / Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Connect
          </h4>

          <div className="flex gap-5 items-center">
            <a
              href="https://github.com/wVishal007"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/vishal-singh-188013324/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="mailto:vishalsingh31879@gmail.com"
              className="hover:text-red-400 transition"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Open to internships, projects & AI collaborations.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <span>
            © {new Date().getFullYear()} Vishal Singh. All rights reserved.
          </span>
          <span className="mt-2 md:mt-0">
            Built with Love • ❤️ • Passion 
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
