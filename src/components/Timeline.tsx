// import { Experience } from '../types';
// import { Briefcase } from 'lucide-react';

// interface TimelineProps {
//   experiences: Experience[];
// }

// export const Timeline = ({ experiences }: TimelineProps) => {
//   return (
//     <div className="relative">
//       <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
//       <div className="space-y-12">
//         {experiences.map((exp, index) => (
//           <div
//             key={`${exp.company}-${index}`}
//             className="relative pl-12 animate-slide-up"
//             style={{ animationDelay: `${index * 0.1}s` }}
//           >
//             <div className="absolute left-0 p-2 bg-white dark:bg-gray-800 rounded-full border-2 border-indigo-500 dark:border-indigo-400">
//               <Briefcase className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
//             </div>
//             <div className="card p-6 ml-2">
//               <div className="flex flex-wrap justify-between items-start mb-4">
//                 <div>
//                   <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
//                     {exp.position}
//                   </h3>
//                   <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
//                 </div>
//                 <span className="text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full">
//                   {exp.period}
//                 </span>
//               </div>
//               <ul className="space-y-2">
//                 {exp.description.map((item, i) => (
//                   <li
//                     key={i}
//                     className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
//                   >
//                     <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-indigo-500 dark:bg-indigo-400" />
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

import React from 'react';
import { Briefcase } from 'lucide-react';

// Type definitions
interface Experience {
  position: string;
  company: string;
  period: string;
  description: string[];
}

interface TimelineProps {
  experiences: Experience[];
}

// Component
export const Timeline = ({ experiences }: TimelineProps) => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
      
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={`${exp.company}-${index}`}
            className={`relative pl-12 ${
              index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
            }`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Icon */}
            <div className="absolute left-0 p-2 bg-white dark:bg-gray-800 rounded-full border-2 border-indigo-500 dark:border-indigo-400">
              <Briefcase className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
            </div>
            
            {/* Card Content */}
            <div
            style={{ backgroundColor: 'rgba(152, 251, 152, 0.4)' }}
            className="card p-6 ml-2 bg-mintGreen ">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                    {exp.position}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                </div>
                <span className="text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                  >
                    <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Embedded Styles */}
      <style>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

// Example usage
const experiences = [
  {
    position: 'Software Engineer',
    company: 'Tech Corp',
    period: 'Jan 2020 - Present',
    description: [
      'Developed scalable web applications.',
      'Led a team of 5 engineers.',
      'Improved system performance by 30%.',
    ],
  },
  {
    position: 'Frontend Developer',
    company: 'Web Solutions',
    period: 'Jan 2018 - Dec 2019',
    description: [
      'Designed and implemented responsive UI components.',
      'Collaborated with backend teams to integrate APIs.',
    ],
  },
];

const App = () => (
  <div className="container mx-auto p-4">
    <Timeline experiences={experiences} />
  </div>
);

export default App;
