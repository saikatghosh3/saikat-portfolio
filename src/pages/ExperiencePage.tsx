
// import { motion } from 'framer-motion';
// import { Timeline } from '../components/Timeline';
// import { experiences } from '../data/experience';

// export const ExperiencePage = () => {
//   return (
//  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 overflow-x-hidden">
//   <div className="text-center mb-16">
//     <h1 className="text-4xl font-bold mb-2">Professional Experience</h1>
//     <motion.div
//       initial={{ width: 0 }}
//       animate={{ width: '100%' }}
//       transition={{ duration: 0.6, ease: 'easeOut' }}
//       className="h-1 bg-blue-500 mx-auto rounded w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]"
//     />
//   </div>

//   <Timeline experiences={experiences} />
// </div>
//   );
// };


import { motion } from 'framer-motion';
import { experiences } from '../data/experience';
import { Briefcase, Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

export const ExperiencePage = () => {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      {/* Background - Matching other sections */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent" />
      
      {/* Animated Background Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-indigo-500/5 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4">
            <Briefcase className="w-3 h-3 text-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium">WORK HISTORY</span>
          </div>
         <div className="w-fit mx-auto mb-8">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 text-center">
    Professional Experience
  </h1>
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: '100%' }}
    transition={{ duration: 0.6, ease: 'easeInOut' }}
    className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
  />
</div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            A journey of innovation, leadership, and technical excellence
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-md" />
              
              {/* Main Card */}
              <div className="relative backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 p-6 sm:p-8 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-1">
                {/* Header Section */}
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6 pb-6 border-b border-white/10">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
                        <Briefcase className="w-5 h-5 text-indigo-400" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
                        {exp.position}
                      </h3>
                    </div>
                    <p className="text-indigo-400 font-medium ml-11">{exp.company}</p>
                  </div>
                  
                  {/* Period Badge */}
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 whitespace-nowrap">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span className="text-indigo-400 text-sm font-medium">{exp.period}</span>
                  </div>
                </div>

                {/* Description List */}
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed group/item">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 mt-1.5 flex-shrink-0" />
                      <span className="hover:text-indigo-400 transition-colors duration-200">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Footer Stats (if data available) */}
                {(exp.location || exp.type || exp.impact) && (
                  <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-4 text-xs text-gray-500">
                    {exp.location && (
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-indigo-400" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                    {exp.type && (
                      <div className="flex items-center gap-1">
                        <Award className="w-3 h-3 text-indigo-400" />
                        <span>{exp.type}</span>
                      </div>
                    )}
                    {exp.impact && (
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-indigo-400" />
                        <span>{exp.impact}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Context */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">
            <span className="text-sm text-gray-400">
              Total Experience: 2+ years
            </span>
          </div>
          <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">
            <span className="text-sm text-gray-400">
              Roles: {experiences.length} positions
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

