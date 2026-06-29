
import { motion } from 'framer-motion';
import { Portfolio } from '../components/sections/Portfolio';
import { Layers } from 'lucide-react';

export const PortfolioPage = () => {
  return (
    <div className="pt-16">
      <div className="text-center mb-8 sm:mb-10 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4">
          <Layers className="w-3 h-3 text-indigo-400" />
          <span className="text-indigo-400 text-xs font-medium">MY WORK</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">My Creative Portfolio</h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full max-w-[12rem] sm:max-w-[16rem] md:max-w-[20rem]"
        />
      </div>

      <Portfolio />
    </div>
  );
};
