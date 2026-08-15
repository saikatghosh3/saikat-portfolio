// const skills = [
//   { category: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'] },
//   { category: 'Styling', items: ['Tailwind CSS', 'Bootstrap', 'MUI','Sass'] },
//   { category: 'Tools', items: ['Git', 'VS Code', 'Webpack', 'Vite'] },
//   { category: 'Testing', items: ['Jest', 'React Testing Library', 'Cypress'] },
// ];

// const gradients = [
//   'card-gradient-1',
//   'card-gradient-2',
//   'card-gradient-3',
//   'card-gradient-4',
// ];

// export const Skills = () => {
//   return (
//     <section id="skills" className="min-h-screen flex items-center justify-center py-20 section-gradient">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6  lg:px-8">
//         <h2 className="text-3xl font-bold text-center mb-12  text-white animate-fade-in">Skills</h2>
//         <div className="grid md:grid-cols-2 gap-8 text-white  ">
//           {skills.map((skillGroup, index) => (
//             <div
//               key={skillGroup.category}
//               className={`animated-card ${gradients[index]} p-6    bg-blue-500/20 rounded-lg`} 
//               // on the above line we should add the class for glowing effect 
//               style={{ animationDelay: `${index * 0.2}s` }}
//             >
//               <h3 className="text-xl font-semibold mb-4  text-white">{skillGroup.category}</h3>
//               <div className="flex flex-wrap gap-3">
//                 {skillGroup.items.map((skill) => (
//                   <span
//                     key={skill}
//                     className="px-3 py-1 rounded-full bg-white/30 backdrop-blur-sm
//                              border border-white/20 text-sm
//                              hover:scale-110 transition-transform duration-200 text-white"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

import { Code2, Palette, Wrench, TestTube2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedBeam, Circle, Icons } from '../ui/animated-beam';

const skills = [
  {
    category: 'Frontend',
    icon: Code2,
    items: ['React', 'TypeScript', 'JavaScript', 'Next.js', ],
    description: 'Building modern, reactive user interfaces'
  },
  {
    category: 'Styling',
    icon: Palette,
    items: ['Tailwind CSS', 'MUI', 'Scss', 'Ant Design'],
    description: 'Creating beautiful, responsive designs'
  },
  {
    category: 'Tools',
    icon: Wrench,
    items: ['Git', 'VS Code', 'Webpack', 'Vite'],
    description: 'Streamlining development workflow'
  },
  {
    category: 'Testing',
    icon: TestTube2,
    items: ['Jest', 'React Testing Library', 'Cypress'],
    description: 'Ensuring code reliability and quality'
  },
];

const categoryColors = {
  Frontend: 'from-cyan-500 to-blue-500',
  Styling: 'from-purple-500 to-pink-500',
  Tools: 'from-orange-500 to-red-500',
  Testing: 'from-emerald-500 to-teal-500',
};

export const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <section id="skills" className="relative py-16 sm:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent" />
      
      {/* Animated Background Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/5 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4">
            <Sparkles className="w-3 h-3 text-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium">MY EXPERTISE</span>
          </div>
       <div className="w-fit mx-auto mb-8">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 text-center">
    Technical Skills
  </h2>
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: '100%' }}
    transition={{ duration: 0.6, ease: 'easeInOut' }}
    className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
  />
</div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Over 2+ years of experience mastering these technologies and tools
          </p>
        </div>

        {/* Animated Beam Showcase */}
        <div
          ref={containerRef}
          className="relative mx-auto max-w-2xl lg:max-w-3xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-5 sm:px-6 sm:py-8 lg:px-10 lg:py-10 overflow-hidden"
        >
          {/* Center Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-indigo-500/20 rounded-full blur-2xl" />

          <div className="relative flex h-[290px] sm:h-[330px] items-stretch justify-between gap-2 sm:gap-8">
            {/* Left Column - User */}
            <div className="flex flex-col justify-center">
              <Circle ref={div7Ref} className="h-11 w-11 sm:h-12 sm:w-12">
                <Icons.user className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </Circle>
            </div>

            {/* Center Hub - Skills */}
            <div className="flex flex-col justify-center">
              <div
                ref={div6Ref}
                className="z-10 flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full border-2 border-indigo-400/40 bg-slate-900/90 shadow-[0_0_40px_-10px_rgba(129,140,248,0.9)]"
              >
                <span className="text-[11px] sm:text-sm font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Skills
                </span>
              </div>
            </div>

            {/* Right Column - Skill Logos */}
            <div className="flex flex-col justify-center gap-3 sm:gap-4">
              <Circle ref={div1Ref} className="h-11 w-11 sm:h-12 sm:w-12 p-2">
                <Icons.typescript className="h-5 w-5 sm:h-6 sm:w-6" />
              </Circle>
              <Circle ref={div2Ref} className="h-11 w-11 sm:h-12 sm:w-12 p-2">
                <Icons.tailwindcss className="h-5 w-5 sm:h-6 sm:w-6" />
              </Circle>
              <Circle ref={div3Ref} className="h-11 w-11 sm:h-12 sm:w-12 p-2">
                <Icons.nextjs className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </Circle>
              <Circle ref={div4Ref} className="h-11 w-11 sm:h-12 sm:w-12 p-2">
                <Icons.reactjs className="h-5 w-5 sm:h-6 sm:w-6" />
              </Circle>
              <Circle ref={div5Ref} className="h-11 w-11 sm:h-12 sm:w-12 p-2">
                <Icons.framer className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </Circle>
            </div>
          </div>

          {/* Animated Beams - light travels from branches to hub */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div1Ref}
            toRef={div6Ref}
            duration={3}
            delay={0}
            curvature={24}
            gradientStartColor="#f97316"
            gradientStopColor="#f59e0b"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div2Ref}
            toRef={div6Ref}
            duration={3}
            delay={0.5}
            curvature={-24}
            gradientStartColor="#06b6d4"
            gradientStopColor="#3b82f6"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div3Ref}
            toRef={div6Ref}
            duration={3}
            delay={1}
            curvature={24}
            gradientStartColor="#22d3ee"
            gradientStopColor="#38bdf8"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div4Ref}
            toRef={div6Ref}
            duration={3}
            delay={1.5}
            curvature={-24}
            gradientStartColor="#61dafb"
            gradientStopColor="#38bdf8"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div5Ref}
            toRef={div6Ref}
            duration={3}
            delay={2}
            curvature={24}
            gradientStartColor="#d948ae"
            gradientStopColor="#8b5cf6"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div6Ref}
            toRef={div7Ref}
            duration={3}
            delay={2.5}
            gradientStartColor="#818cf8"
            gradientStopColor="#c084fc"
          />
        </div>

        {/* Skills Grid */}
        <div className="mt-14 grid md:grid-cols-2 gap-6 lg:gap-8">
          {skills.map((skillGroup, index) => {
            const Icon = skillGroup.icon;
            const gradient = categoryColors[skillGroup.category as keyof typeof categoryColors];
            
            return (
              <div
                key={skillGroup.category}
                className="group relative backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-md -z-10`} />
                
                {/* Card Content */}
                <div className="relative p-6 sm:p-8">
                  {/* Header with Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${gradient} bg-opacity-10 shadow-sm`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
                        <p className="text-gray-400 text-sm mt-1">{skillGroup.description}</p>
                      </div>
                    </div>
                    
                    {/* Skill Count Badge */}
                    <div className="px-2 py-1 rounded-lg bg-white/10 border border-white/10">
                      <span className="text-xs font-medium text-gray-300">
                        {skillGroup.items.length} skills
                      </span>
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2.5">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="group/tag relative px-4 py-2 rounded-full bg-white/5 border border-white/10 
                                 text-gray-300 text-sm font-medium
                                 hover:border-white/30 hover:text-white
                                 transition-all duration-300 hover:transform hover:scale-105
                                 cursor-default"
                        style={{ transitionDelay: `${skillIndex * 50}ms` }}
                      >
                        <span className="relative z-10">{skill}</span>
                        {/* Hover Glow Effect */}
                        <span className={`absolute inset-0 rounded-full bg-gradient-to-r ${gradient} opacity-0 group-hover/tag:opacity-10 transition-opacity duration-300`} />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
