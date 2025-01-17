import { Education } from '../../types';
import { GraduationCap } from 'lucide-react';

interface TimelineProps {
  education: Education[];
}

export const Timeline1= ({ education }: TimelineProps) => {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
      <div className="space-y-12">
        {education.map((edu, index) => (
          <div
            key={`${edu.institution}-${index}`}
            className="relative pl-12 animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="absolute left-0 p-2 bg-white dark:bg-gray-800 rounded-full border-2 border-indigo-500 dark:border-indigo-400">
              <GraduationCap className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
            </div>
            <div
            style={{ backgroundColor: 'rgba(152, 251, 152, 0.4)' }}
            className="card p-6 ml-2">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                </div>
                <span className="text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full">
                  {edu.passingYear}
                </span>
              </div>
              <ul className="space-y-2">
                {edu.description.map((item, i) => (
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
    </div>
  );
};
