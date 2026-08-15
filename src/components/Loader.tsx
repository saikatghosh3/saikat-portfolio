import { motion } from 'framer-motion';

const letters = "Saikat's Portfolio".split('');

export const Loader = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      aria-label="Loading"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative flex flex-col items-center px-6">
        {/* Logo Mark */}
        <div className="relative mb-8">
          <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 opacity-30 blur-2xl animate-pulse" />
          <div className="absolute -inset-1.5 rounded-full border-2 border-transparent border-t-indigo-400 border-r-indigo-400/50 animate-spin" />
          <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 shadow-[0_0_40px_-10px_rgba(129,140,248,0.9)]">
            <span className="text-2xl sm:text-3xl font-extrabold text-white">S</span>
          </div>
        </div>

        {/* Animated Letters */}
        <div className="flex">
          {letters.map((letter, i) => (
            <motion.span
              key={`${letter}-${i}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 + i * 0.05, duration: 0.35, ease: 'easeOut' }}
              className="text-xl sm:text-3xl font-bold text-white"
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-8 h-1 w-44 sm:w-56 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.4, ease: 'easeInOut' }}
            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-gray-400"
        >
          Loading
        </motion.p>
      </div>
    </motion.div>
  );
};
