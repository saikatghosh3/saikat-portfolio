
import { motion } from 'framer-motion';
import { Timeline1 } from '../components/sections/Timeline1';
import { education } from '../data/education';

export const EducationPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-2">Education and Qualifications</h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "31rem" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-1 bg-blue-500 mx-auto rounded"
        />
      </div>

      <Timeline1 education={education} />
    </div>
  );
};
