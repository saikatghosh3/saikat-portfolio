import { experiences } from '../../data/experience';

export const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className="card p-6 animate-slide-up hover:border-l-4 hover:border-blue-500 dark:hover:border-blue-400"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {exp.position}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                </div>
                <span className="text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded-full text-sm">
                  {exp.period}
                </span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {exp.description.map((item, i) => (
                  <li key={i} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};