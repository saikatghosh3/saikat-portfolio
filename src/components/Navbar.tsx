// import { Menu, X } from 'lucide-react';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// const navItems = [
//   { label: 'Home', href: '/' },
//   { label: 'Skills', href: '/skills' },
//   { label: 'Projects', href: '/portfolio' },
//   { label: 'Experience', href: '/experience' },
//   { label: 'Education', href: '/education' },
//   { label: 'Contact', href: '/contact' },
// ];

// export const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed w-full bg-black backdrop-blur-sm shadow-md z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/" className="text-xl font-bold text-white">
//               Saikat Ghosh
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.label}
//                 to={item.href}
//                 className="relative text-white hover:text-[#99d8c2] transition-colors group"
//               >
//                 {item.label}
//                 <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#99d8c2] transition-all duration-300 group-hover:w-full"></span>
//               </Link>
//             ))}
//             {/* Blog External Link */}
//             <a
//               href="https://learning-english-and-web-development.blogspot.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="relative text-white hover:text-[#99d8c2] transition-colors group"
//             >
//               Blog
//               <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#99d8c2] transition-all duration-300 group-hover:w-full"></span>
//             </a>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 rounded-md text-gray-700"
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#d5f4e6]/80 backdrop-blur-sm">
//             {navItems.map((item) => (
//               <Link
//                 key={item.label}
//                 to={item.href}
//                 className="block px-3 py-2 text-gray-900 hover:text-[#99d8c2] transition-colors"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item.label}
//               </Link>
//             ))}
//             {/* Blog link in mobile menu */}
//             <a
//               href="https://learning-english-and-web-development.blogspot.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block px-3 py-2 text-gray-900 hover:text-[#99d8c2] transition-colors"
//               onClick={() => setIsOpen(false)}
//             >
//               Blog
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };


import { Menu, X, Code, Home, Briefcase, GraduationCap, Mail, BookOpen, Layers } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Skills', href: '/skills', icon: Code },
  { label: 'Projects', href: '/portfolio', icon: Layers },
  { label: 'Experience', href: '/experience', icon: Briefcase },
  { label: 'Education', href: '/education', icon: GraduationCap },
  { label: 'Contact', href: '/contact', icon: Mail },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-white/10' 
        : 'bg-slate-900/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="group relative flex min-w-0 items-center gap-2">
            <div className="p-1.5 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
              <Code className="w-5 h-5 text-indigo-400" />
            </div>
            <span className="truncate text-base font-bold text-white sm:text-lg">
              Saikat Ghosh
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`relative px-3 py-2 xl:px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive 
                      ? 'text-indigo-400 bg-indigo-500/10' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-400' : 'text-gray-400'}`} />
                    <span>{item.label}</span>
                  </div>
                </Link>
              );
            })}
            
            {/* Blog External Link */}
            <a
              href="https://learning-english-and-web-development.blogspot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 xl:px-4 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-gray-400" />
              <span>Blog</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-white/10 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-indigo-500/10 text-indigo-400 border-l-2 border-indigo-500'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-400' : 'text-gray-400'}`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            
            {/* Blog link in mobile menu */}
            <a
              href="https://learning-english-and-web-development.blogspot.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              <BookOpen className="w-4 h-4 text-gray-400" />
              <span>Blog</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
