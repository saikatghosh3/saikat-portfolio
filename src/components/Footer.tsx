import { Code2, Github, Linkedin, Mail, NotebookPen } from 'lucide-react';
import { Link } from 'react-router-dom';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Skills', to: '/skills' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Experience', to: '/experience' },
  { label: 'Education', to: '/education' },
  { label: 'Certifications', to: '/certifications' },
  { label: 'Contact', to: '/contact' },
];

const connectLinks = [
  {
    label: 'GitHub',
    detail: 'saikatghosh3',
    href: 'https://github.com/saikatghosh3',
    Icon: Github,
  },
  {
    label: 'LinkedIn',
    detail: 'saikat-ghosh-dev',
    href: 'https://www.linkedin.com/in/saikat-ghosh-dev',
    Icon: Linkedin,
  },
  {
    label: 'Email',
    detail: 'saikat10ghosh@gmail.com',
    href: 'mailto:saikat10ghosh@gmail.com',
    Icon: Mail,
  },
  {
    label: 'Blog',
    detail: 'Learning English and Web Development',
    href: 'https://learning-english-and-web-development.blogspot.com',
    Icon: NotebookPen,
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 section-bg">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 py-12 sm:py-14 md:grid-cols-4 lg:py-16">
          <div className="col-span-2 md:col-span-2 md:pr-10">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-500/10">
                <Code2 className="h-5 w-5 text-indigo-400" />
              </div>
              <div>
                <p className="text-base font-semibold tracking-tight text-white">Saikat Ghosh</p>
                <p className="text-xs font-medium text-indigo-400">Fullstack Developer</p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-400">
              I build end-to-end web applications with clean interfaces, reliable APIs, and
              scalable databases — from the first commit to deployment.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
              Quick Links
            </h2>
            <ul className="mt-5 space-y-3">
              {quickLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 bg-indigo-400 transition-all duration-300 group-hover:w-3" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
              Connect
            </h2>
            <ul className="mt-5 space-y-4">
              {connectLinks.map(({ label, detail, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-start gap-2.5"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-colors duration-300 group-hover:border-indigo-400/40 group-hover:text-indigo-300">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">
                        {label}
                      </span>
                      <span className="block truncate text-xs text-gray-500">{detail}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Saikat Ghosh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
