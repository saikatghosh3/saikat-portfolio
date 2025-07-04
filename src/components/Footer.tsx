import { Facebook, Github, Instagram, Linkedin, Mail, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-emerald-200 dark:bg-gray-800 shadow-lg mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="/skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Skills</a></li>
              <li><a href="/portfolio" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Portfolio</a></li>
              <li><a href="/experience" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Experience</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Connect</h3>
            <div className="space-y-4">
              <a href="https://github.com/saikatghosh3" className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Github className="w-5 h-5" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/saikat-ghosh-52671b344" className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
              <a href="mailto:your.email@example.com" className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Mail className="w-5 h-5" /> Email
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Social Media</h3>
            <div className="space-y-4">
              <a href="https://facebook.com" className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Facebook className="w-5 h-5" /> FaceBook
              </a>
              <a href="https://instagram.com" className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Instagram className="w-5 h-5" /> Instagram
              </a>
              <a href="https://youtube .com" className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Youtube className="w-5 h-5" /> Youtube
              </a>
            </div>
          </div>
          
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Saikat Ghosh. All rights reserved.
        </div>
      </div>
    </footer>
  );
};