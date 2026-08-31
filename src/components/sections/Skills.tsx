import { Code2, Palette, Wrench, TestTube2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedBeam, Circle } from '../ui/animated-beam';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiMui,
  SiSass,
  SiAntdesign,
  SiGit,
  SiVite,
  SiWebpack,
  SiJest,
  SiCypress,
  SiTestinglibrary,
} from 'react-icons/si';
import type { IconType } from 'react-icons';

type Brand = { name: string; Icon: IconType; color: string };

const brandLogos: Brand[] = [
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Framer', Icon: SiFramer, color: '#0055FF' },
  { name: 'Vite', Icon: SiVite, color: '#646CFF' },
  { name: 'MUI', Icon: SiMui, color: '#007FFF' },
  { name: 'Sass', Icon: SiSass, color: '#CC6699' },
  { name: 'Ant Design', Icon: SiAntdesign, color: '#0170FE' },
  { name: 'Git', Icon: SiGit, color: '#F05032' },
  { name: 'Webpack', Icon: SiWebpack, color: '#8DD6F9' },
  { name: 'Jest', Icon: SiJest, color: '#C21325' },
  { name: 'Cypress', Icon: SiCypress, color: '#17202C' },
  { name: 'Testing Library', Icon: SiTestinglibrary, color: '#E33332' },
];

const beamLogos = [
  brandLogos.find((b) => b.name === 'React')!,
  brandLogos.find((b) => b.name === 'TypeScript')!,
  brandLogos.find((b) => b.name === 'Next.js')!,
  brandLogos.find((b) => b.name === 'Tailwind CSS')!,
  brandLogos.find((b) => b.name === 'JavaScript')!,
  brandLogos.find((b) => b.name === 'MUI')!,
];

const beamColors = [
  ['#61DAFB', '#3B82F6'],
  ['#3178C6', '#6366F1'],
  ['#FFFFFF', '#94A3B8'],
  ['#06B6D4', '#38BDF8'],
  ['#F7DF1E', '#FBBF24'],
  ['#007FFF', '#3B82F6'],
];

const ringPositions = [
  { left: '85%', top: '50%' },
  { left: '67.5%', top: '80.3%' },
  { left: '32.5%', top: '80.3%' },
  { left: '15%', top: '50%' },
  { left: '32.5%', top: '19.7%' },
  { left: '67.5%', top: '19.7%' },
];

const timeline: Brand[] = [
  brandLogos.find((b) => b.name === 'React')!,
  brandLogos.find((b) => b.name === 'TypeScript')!,
  brandLogos.find((b) => b.name === 'JavaScript')!,
  brandLogos.find((b) => b.name === 'Next.js')!,
  brandLogos.find((b) => b.name === 'Tailwind CSS')!,
  brandLogos.find((b) => b.name === 'Framer')!,
  brandLogos.find((b) => b.name === 'Vite')!,
  brandLogos.find((b) => b.name === 'MUI')!,
  brandLogos.find((b) => b.name === 'Sass')!,
  brandLogos.find((b) => b.name === 'Git')!,
];

const skills = [
  {
    category: 'Frontend',
    icon: Code2,
    items: ['React', 'TypeScript', 'JavaScript', 'Next.js'],
    description: 'Building modern, reactive user interfaces',
  },
  {
    category: 'Styling',
    icon: Palette,
    items: ['Tailwind CSS', 'MUI', 'Sass', 'Ant Design'],
    description: 'Creating beautiful, responsive designs',
  },
  {
    category: 'Tools',
    icon: Wrench,
    items: ['Git', 'VS Code', 'Webpack', 'Vite'],
    description: 'Streamlining development workflow',
  },
  {
    category: 'Testing',
    icon: TestTube2,
    items: ['Jest', 'React Testing Library', 'Cypress'],
    description: 'Ensuring code reliability and quality',
  },
];

const categoryColors: Record<string, string> = {
  Frontend: 'from-cyan-500 to-blue-500',
  Styling: 'from-purple-500 to-pink-500',
  Tools: 'from-orange-500 to-red-500',
  Testing: 'from-emerald-500 to-teal-500',
};

const logoFor = (name: string) =>
  brandLogos.find((b) => b.name.toLowerCase() === name.toLowerCase());

export const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const logoRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

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
          className="relative mx-auto w-[300px] sm:w-[420px] lg:w-[480px] aspect-square rounded-full border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
        >
          {/* Center Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/20 rounded-full blur-2xl" />

          {/* Hub */}
          <div
            ref={hubRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full border-2 border-indigo-400/40 bg-slate-900/90 shadow-[0_0_60px_-10px_rgba(129,140,248,0.9)]"
          >
            <span className="text-base sm:text-lg font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Skills
            </span>
          </div>

          {/* Orbiting Ring */}
          <div className="absolute inset-0 animate-orbit">
            {/* Logos arranged on a ring */}
            {beamLogos.map((brand, i) => (
              <div
                key={brand.name}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                style={{ left: ringPositions[i].left, top: ringPositions[i].top }}
              >
                <Circle
                  ref={logoRefs[i]}
                  className="h-12 w-12 sm:h-14 sm:w-14 p-2.5 border-white/20 hover:border-white/50 transition-all duration-300 hover:scale-110 animate-counter-orbit"
                  style={{ boxShadow: `0 0 22px -6px ${brand.color}88` }}
                >
                  <brand.Icon className="w-full h-full" style={{ color: brand.color }} />
                </Circle>
              </div>
            ))}
          </div>

          {/* Animated Beams from logos to hub */}
          {beamLogos.map((brand, i) => (
            <AnimatedBeam
              key={brand.name}
              containerRef={containerRef}
              fromRef={logoRefs[i]}
              toRef={hubRef}
              duration={3}
              delay={i * 0.4}
              curvature={i % 2 === 0 ? 24 : -24}
              gradientStartColor={beamColors[i][0]}
              gradientStopColor={beamColors[i][1]}
            />
          ))}
        </div>

        {/* Scrolling Logo Marquee */}
        <div className="relative mt-12 py-5 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm animate-ticker-glow">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent z-10" />
          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          >
            {[...timeline, ...timeline].map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="flex flex-col items-center gap-2.5 shrink-0 group/ticker"
              >
                <div
                  className="p-3 rounded-xl border border-white/10 bg-white/5 group-hover/ticker:scale-110 group-hover/ticker:border-white/30 transition-all duration-300"
                  style={{ boxShadow: `0 0 12px -4px ${brand.color}66` }}
                >
                  <brand.Icon className="w-8 h-8" style={{ color: brand.color }} />
                </div>
                <span className="text-xs text-gray-400 font-medium group-hover/ticker:text-white transition-colors duration-300">{brand.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="mt-14 grid md:grid-cols-2 gap-6 lg:gap-8">
          {skills.map((skillGroup, index) => {
            const Icon = skillGroup.icon;
            const gradient = categoryColors[skillGroup.category];

            return (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 hover:border-white/25 transition-all duration-500 hover:transform hover:-translate-y-2"
              >
                {/* Card Gradient Border Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-md -z-10`}
                />

                {/* Card Content */}
                <div className="relative p-6 sm:p-8">
                  {/* Header with Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${gradient} bg-opacity-10 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
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

                  {/* Skills Tags with Brand Logos */}
                  <div className="flex flex-wrap gap-2.5">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.08 }}
                        className="group/tag relative flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:border-white/30 hover:text-white transition-all duration-300 hover:scale-105 cursor-default"
                      >
                        {(() => {
                          const brand = logoFor(skill);
                          return brand ? (
                            <brand.Icon
                              className="w-4 h-4"
                              style={{ color: brand.color }}
                            />
                          ) : null;
                        })()}
                        <span className="relative z-10">{skill}</span>
                        <span className={`absolute inset-0 rounded-full bg-gradient-to-r ${gradient} opacity-0 group-hover/tag:opacity-15 transition-opacity duration-300`} />
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
