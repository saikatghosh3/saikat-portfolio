import { projects } from '../../data/projects';
import { Github, Link } from 'lucide-react';

const gradients = [
  'card-gradient-1',
  'card-gradient-2',
  'card-gradient-3',
  'card-gradient-4',
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto  px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 ">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`animated-card ${gradients[index % gradients.length]} overflow-hidden  bg-cyan-200`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-700">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-white/30 backdrop-blur-sm
                               border border-white/20 text-gray-700 text-sm
                               hover:scale-110 transition-transform duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      {/* <span className="flex items-center gap-2">
                        <Link className="w-4 h-4" /> Live Demo
                      </span> */}
          
          <span className="flex items-center gap-2 text-[#701ebd] hover:text-[#8c70a5] transition-colors">
  <Link className="w-4 h-4 text-[#701ebd] hover:text-[#8c70a5]" />
  Live Demo
</span>

                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                    >
                      {/* <span className="flex items-center gap-2  text-[#701ebd] hover:text-[#8c70a5] transition-colors">
                        <Github className="w-4 h-4 text-[#701ebd] hover:text-[#8c70a5]" /> Code
                      </span> */}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};