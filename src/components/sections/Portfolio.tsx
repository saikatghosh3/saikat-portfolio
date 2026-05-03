// import { projects } from '../../data/projects';
// import { Github, Link } from 'lucide-react';

// const gradients = [
//   'card-gradient-1',
//   'card-gradient-2',
//   'card-gradient-3',
//   'card-gradient-4',
// ];

// export const Portfolio = () => {
//   return (
//     <section id="portfolio" className="min-h-screen py-20">
//       <div className="max-w-6xl mx-auto  px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Projects</h2>
//         <div className="grid md:grid-cols-2 gap-8 ">
//           {projects.map((project, index) => (
//             <div
//               key={project.title}
//               className={`animated-card ${gradients[index % gradients.length]} overflow-hidden  bg-cyan-200`}
//               style={{ animationDelay: `${index * 0.2}s` }}
//             >
//               <div className="relative overflow-hidden group">
//                 <img
//                   src={project.imageUrl}
//                   alt={project.title}
//                   className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-2 text-gray-700">{project.title}</h3>
//                 <p className="text-gray-600 mb-4">{project.description}</p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.technologies.map((tech) => (
//                     <span
//                       key={tech}
//                       className="px-3 py-1 rounded-full bg-white/30 backdrop-blur-sm
//                                border border-white/20 text-gray-700 text-sm
//                                hover:scale-110 transition-transform duration-200"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex gap-4">
//                   {project.liveUrl && (
//                     <a
//                       href={project.liveUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="btn-primary"
//                     >
//                       {/* <span className="flex items-center gap-2">
//                         <Link className="w-4 h-4" /> Live Demo
//                       </span> */}
          
//           <span className="flex items-center gap-2 text-[#701ebd] hover:text-[#8c70a5] transition-colors">
//   <Link className="w-4 h-4 text-[#701ebd] hover:text-[#8c70a5]" />
//   Live Demo
// </span>

//                     </a>
//                   )}
//                   {project.githubUrl && (
//                     <a
//                       href={project.githubUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="btn-outline"
//                     >
//                       {/* <span className="flex items-center gap-2  text-[#701ebd] hover:text-[#8c70a5] transition-colors">
//                         <Github className="w-4 h-4 text-[#701ebd] hover:text-[#8c70a5]" /> Code
//                       </span> */}
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };


import { projects } from '../../data/projects';
import { Github, Link, ExternalLink, Star, GitFork, Calendar } from 'lucide-react';
import { useState } from 'react';

export const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="portfolio" className="relative py-16 sm:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-indigo-500/5 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4">
            <Star className="w-3 h-3 text-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium">MY WORK</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto" />
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Real-world applications showcasing my expertise in modern web development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-md -z-10 ${hoveredProject === index ? 'opacity-20' : ''}`} />
              
              {/* Main Card */}
              <div className="relative backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500">
                {/* Image Container */}
                <div className="relative overflow-hidden h-64 lg:h-72">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Image Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                  
                  {/* Project Type Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/20">
                    <span className="text-xs font-medium text-white">
                      {project.featured ? 'Featured' : 'Recent Project'}
                    </span>
                  </div>
                  
                  {/* Quick Action Buttons on Hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-indigo-500 hover:border-indigo-500 transition-all duration-300 transform hover:scale-110"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-indigo-500 hover:border-indigo-500 transition-all duration-300 transform hover:scale-110"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  {/* Title and Stats */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      {project.stats?.stars && (
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <Star className="w-3 h-3" />
                          <span>{project.stats.stars}</span>
                        </div>
                      )}
                      {project.stats?.forks && (
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <GitFork className="w-3 h-3" />
                          <span>{project.stats.forks}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium
                                 hover:border-indigo-500/50 hover:text-indigo-400 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2 border-t border-white/10">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
                      >
                        <Link className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:bg-indigo-500/20 hover:border-indigo-500/50 hover:text-white transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    )}
                  </div>

                  {/* Project Meta */}
                  {project.date && (
                    <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      <span>Completed: {project.date}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-10 sm:mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:-translate-y-0.5"
          >
            <span>View All Projects</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
