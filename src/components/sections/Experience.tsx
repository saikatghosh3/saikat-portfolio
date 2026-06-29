// import { experiences } from '../../data/experience';

// export const Experience = () => {
//   return (
//     <section id="experience" className="min-h-screen py-20 bg-[#30121B]">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ">
//         <h2 className="text-3xl font-bold text-white text-center mb-12 animate-fade-in">Experience</h2>
//         <div className="space-y-8">
//           {experiences.map((exp, index) => (
//             <div
//               key={exp.company}
//               className="card p-6 animate-slide-up hover:border-l-4 hover:border-blue-500 dark:hover:border-blue-400"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="flex flex-wrap justify-between items-start mb-4">
//                 <div>
//                   <h3 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">
//                     {exp.position}
//                   </h3>
//                   <p className="text-white dark:text-gray-300">{exp.company}</p>
//                 </div>
//                 <span className="text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded-full text-sm">
//                   {exp.period}
//                 </span>
//               </div>
//               <ul className="list-disc list-inside space-y-2 text-white dark:text-gray-300">
//                 {exp.description.map((item, i) => (
//                   <li key={i} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };


import { experiences } from '../../data/experience';
import { Briefcase, Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="relative py-16 sm:py-20 overflow-hidden">
      {/* Background - Matching other sections */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent" />
      
      {/* Animated Background Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-indigo-500/5 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4">
            <Briefcase className="w-3 h-3 text-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium">WORK HISTORY</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto" />
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Years of delivering impactful solutions and driving innovation
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-px h-full w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-transparent" />

          {/* Experience Items */}
          <div className="space-y-8 sm:space-y-10">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative flex flex-col md:flex-row md:gap-8 group ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900 z-10 mt-1" />
                
                {/* Content Card */}
                <div className={`pl-14 md:pl-0 w-full md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="group/card relative backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-indigo-500/50 transition-all duration-500 hover:transform hover:-translate-y-1">
                    {/* Card Gradient Border Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover/card:opacity-20 transition-opacity duration-500 blur-md -z-10" />
                    
                    <div className="relative p-6 sm:p-8">
                      {/* Header */}
                      <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-indigo-400 group-hover/card:to-purple-400 transition-all duration-300">
                            {exp.position}
                          </h3>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-indigo-400 font-medium">{exp.company}</span>
                            {exp.location && (
                              <>
                                <span className="text-gray-600">•</span>
                                <div className="flex items-center gap-1 text-gray-400 text-sm">
                                  <MapPin className="w-3 h-3" />
                                  <span>{exp.location}</span>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                        
                        {/* Period Badge */}
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 whitespace-nowrap">
                          <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                          <span className="text-indigo-400 text-sm font-medium">{exp.period}</span>
                        </div>
                      </div>

                      {/* Description List */}
                      <ul className="space-y-3 mt-6">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed group/item">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                            <span className="hover:text-indigo-400 transition-colors duration-200">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Footer Stats (if data available) */}
                      <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-4 text-xs text-gray-500">
                        {exp.type && (
                          <div className="flex items-center gap-1">
                            <Award className="w-3 h-3" />
                            <span>{exp.type}</span>
                          </div>
                        )}
                        {exp.impact && (
                          <div className="flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            <span>{exp.impact}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Stats */}
        <div className="mt-12 sm:mt-14 pt-6 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                {/* {experiences.length} + */}
                2+
              </div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                {/* {experiences.reduce((sum, exp} => sum + exp.description.length, 0)}+ */}
                5+
              </div>
              <div className="text-sm text-gray-400">Achievements</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                100%
              </div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                24/7
              </div>
              <div className="text-sm text-gray-400">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
