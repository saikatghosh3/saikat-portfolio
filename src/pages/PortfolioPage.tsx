
import { motion } from 'framer-motion';
import { Portfolio } from '../components/sections/Portfolio';

export const PortfolioPage = () => {
  return (
    <div className="pt-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-2">My Creative Portfolio</h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '23rem' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="h-1 bg-blue-500 mx-auto rounded"
        />
      </div>

      <Portfolio />
    </div>
  );
};
