
import { motion } from 'framer-motion';
import { Portfolio } from '../components/sections/Portfolio';
import { FrontendDesign } from '../components/sections/FrontendDesign';
import { Layers } from 'lucide-react';

export const PortfolioPage = () => {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      {/* Background - Matching other sections */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent" />

      {/* Animated Background Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-indigo-500/5 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4">
            <Layers className="w-3 h-3 text-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium">MY WORK</span>
          </div>
          <div className="w-fit mx-auto mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 text-center">
              My Creative Portfolio
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
            />
          </div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            A curated collection of projects and designs crafted with care
          </p>
        </div>

        <Portfolio />
        <FrontendDesign />
      </div>
    </section>
  );
};
