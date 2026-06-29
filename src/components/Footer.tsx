// import { Facebook, Github, Instagram, Linkedin, Mail, Youtube } from 'lucide-react';

// export const Footer = () => {
//   return (
//     <footer className="bg-black dark:bg-gray-800 shadow-lg mt-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Quick Links</h3>
//             <ul className="space-y-2">
//               <li><a href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</a></li>
//               <li><a href="/skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Skills</a></li>
//               <li><a href="/portfolio" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Portfolio</a></li>
//               <li><a href="/experience" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Experience</a></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Connect</h3>
//             <div className="space-y-4">
//               <a href="https://github.com/saikatghosh3" className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
//                 <Github className="w-5 h-5" /> GitHub
//               </a>
//               <a href="https://www.linkedin.com/in/saikat-ghosh-52671b344" className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
//                 <Linkedin className="w-5 h-5" /> LinkedIn
//               </a>
//               <a href="mailto:your.email@example.com" className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
//                 <Mail className="w-5 h-5" /> Email
//               </a>
//             </div>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Social Media</h3>
//             <div className="space-y-4">
//               <a href="https://facebook.com" className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
//                 <Facebook className="w-5 h-5" /> FaceBook
//               </a>
//               <a href="https://instagram.com" className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
//                 <Instagram className="w-5 h-5" /> Instagram
//               </a>
//               <a href="https://youtube .com" className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
//                 <Youtube className="w-5 h-5" /> Youtube
//               </a>
//             </div>
//           </div>
          
//         </div>
//         <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-white dark:text-gray-400">
//           © {new Date().getFullYear()} Saikat Ghosh. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };


import { Facebook, Github, Instagram, Linkedin, Mail, Youtube, Code, Heart, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="relative bg-slate-900/95 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
                <Code className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Saikat Ghosh
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Frontend Developer creating modern, responsive web applications with cutting-edge technologies.
            </p>
           <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
  <Heart className="w-4 h-4 text-red-400 flex-shrink-0" />

  <p className="leading-snug">
    <span className="block sm:inline">
      Crafting code
    </span>
    <span className="block sm:inline sm:ml-1">
      with passion
    </span>
  </p>
</div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Skills', 'Projects', 'Experience', 'Education', 'Certifications', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-indigo-400 text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-indigo-400 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Connect</h3>
            <div className="space-y-3">
              <a
                href="https://github.com/saikatghosh3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-indigo-400 text-sm transition-all duration-300 group"
              >
                <div className="p-1 rounded bg-white/5 group-hover:bg-indigo-500/10 transition-colors">
                  <Github className="w-4 h-4" />
                </div>
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://www.linkedin.com/in/saikat-ghosh-52671b344"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-indigo-400 text-sm transition-all duration-300 group"
              >
                <div className="p-1 rounded bg-white/5 group-hover:bg-indigo-500/10 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="mailto:saikat10ghosh@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-indigo-400 text-sm transition-all duration-300 group"
              >
                <div className="p-1 rounded bg-white/5 group-hover:bg-indigo-500/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>saikat10ghosh@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Social Media</h3>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:-translate-y-1"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/saikatghosh3"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/saikat-ghosh-52671b344"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            {/* Blog Link */}
            <div className="mt-4 pt-4 border-t border-white/10">
         <a
  href="https://learning-english-and-web-development.blogspot.com"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-md 
             bg-indigo-500/10 text-gray-300 hover:text-white 
             hover:bg-indigo-500/20 transition-all duration-300"
>
  <span className="text-indigo-400 group-hover:text-white">🌐</span>

  <span className="text-sm font-medium">
    Visit My Blog
  </span>

  <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition" />
</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Saikat Ghosh. All rights reserved.
            </p>
           
          </div>
        </div>
      </div>
    </footer>
  );
};
