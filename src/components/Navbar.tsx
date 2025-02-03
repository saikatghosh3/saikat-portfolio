import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/portfolio' },
  { label: 'Experience', href: '/experience' },
  { label: 'Education', href: '/education' },
  { label: 'Contact', href: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#d5f4e6]/80 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-700">
              Saikat Ghosh
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-gray-700 hover:text-[#99d8c2] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#d5f4e6]/80 backdrop-blur-sm">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-[#99d8c2] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};