import { designProjects } from '../../data/designProjects';
import { Palette, Rocket, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Carousel } from '../ui/Carousel';

export const FrontendDesign = () => {
  return (
    <section id="frontend-design" className="relative py-16 sm:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 section-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent" />

      {/* Animated Background Elements */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 orb-indigo rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 orb-purple rounded-full blur-2xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4">
            <Palette className="w-3 h-3 text-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium">UI / FRONTEND DESIGN</span>
          </div>
          <div className="w-fit mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 text-center">
              Frontend Design Showcase
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
            />
          </div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Pixel-perfect interfaces built with modern frontend tools — every design is live and ready to explore
          </p>
        </div>

        {/* Design Carousel */}
        <Carousel>
          {designProjects.map((project) => (
            <div key={project.title} className="group relative h-full">
              {/* Card Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-md -z-10" />

              {/* Main Card */}
              <div className="relative h-full backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-indigo-500/40 transition-all duration-500 hover:transform hover:-translate-y-1">
                {/* Image */}
                <div className="relative overflow-hidden h-44">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-[11px] font-medium hover:border-indigo-500/50 hover:text-indigo-400 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Deploy Link */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <Rocket className="w-4 h-4 group-hover/btn:animate-pulse" />
                      View Design
                      <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
