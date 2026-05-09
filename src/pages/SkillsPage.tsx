// import { motion } from 'framer-motion';
// import { skills } from '../data/skills';
// import { Code, Database, Palette, Terminal } from 'lucide-react';

// const icons = {
//   Frontend: Code,
//   Backend: Database,
//   Design: Palette,
//   Tools: Terminal,
// };

// export const SkillsPage = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//       <div className="text-center mb-16">
//         <h1 className="text-4xl font-bold mb-2">My Skills & Expertise</h1>
//         <motion.div
//           initial={{ width: 0 }}
//           animate={{ width: '23rem' }}
//           transition={{ duration: 0.6, ease: 'easeOut' }}
//           className="h-1 bg-blue-500 mx-auto rounded"
//         />
//       </div>

//       <div className="grid gap-12">
//         {Object.entries(skills).map(([category, items], index) => {
//           const Icon = icons[category] || Code;
//           return (
//             <div
//               key={category}
//               className="card p-8 animate-slide-up"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900">
//                   <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
//                 </div>
//                 <h2 className="text-2xl font-semibold">{category}</h2>
//               </div>

//               <div className="grid md:grid-cols-2 gap-8">
//                 {items.map((skill) => (
//                   <div key={skill.name} className="group">
//                     <h3 className="text-lg font-medium mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
//                       {skill.name}
//                     </h3>
//                     <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
//                       <div
//                         className="h-full bg-indigo-600 dark:bg-indigo-400 rounded-full transition-all duration-1000 ease-out group-hover:opacity-80"
//                         style={{ width: `${skill.level}%` }}
//                       />
//                     </div>
//                     <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };


import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import { Code, Database, Palette, Terminal, Sparkles, TrendingUp } from 'lucide-react';

const icons = {
  Frontend: Code,
  Backend: Database,
  Design: Palette,
  Tools: Terminal,
};

export const SkillsPage = () => {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      {/* Background - Matching other sections */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent" />
      
      {/* Animated Background Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-indigo-500/5 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4">
            <Sparkles className="w-3 h-3 text-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium">TECHNICAL EXPERTISE</span>
          </div>
       <div className="w-fit mx-auto mb-8">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 text-center">
    My Skills & Expertise
  </h1>
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: '100%' }}
    transition={{ duration: 0.6, ease: 'easeInOut' }}
    className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
  />
</div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Comprehensive knowledge and practical experience across modern web technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 lg:gap-10">
          {Object.entries(skills).map(([category, items], index) => {
            const Icon = icons[category] || Code;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-md" />
                
                {/* Main Card */}
                <div className="relative backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 p-6 sm:p-8 hover:border-white/20 transition-all duration-500">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 group-hover:from-indigo-500/15 group-hover:to-purple-500/15 transition-all duration-300">
                      <Icon className="w-6 h-6 text-indigo-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
                      {category}
                    </h2>
                    <div className="ml-auto flex items-center gap-1 text-xs text-gray-500">
                      <TrendingUp className="w-3 h-3" />
                      <span>{items.length} technologies</span>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {items.map((skill) => (
                      <div key={skill.name} className="group/skill">
                        <div className="flex justify-between items-baseline mb-2">
                          <h3 className="text-base font-medium text-gray-200 group-hover/skill:text-indigo-400 transition-colors duration-300">
                            {skill.name}
                          </h3>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full relative"
                          >
                            {/* Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/skill:translate-x-full transition-transform duration-1000" />
                          </motion.div>
                        </div>
                        {skill.description && (
                          <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                            {skill.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skill Level Indicator */}
        <div className="mt-12 flex justify-center gap-6 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
            <span>Proficiency Level</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-white/20" />
            <span>Current Skill Gap</span>
          </div>
        </div>
      </div>
    </section>
  );
};
