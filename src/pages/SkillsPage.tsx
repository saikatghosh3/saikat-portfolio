import { skills } from '../data/skills';
import { Code, Database, Palette, Terminal } from 'lucide-react';

const icons = {
  Frontend: Code,
  Backend: Database,
  Design: Palette,
  Tools: Terminal,
};

export const SkillsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-center mb-16 animate-fade-in">My Skills & Expertise</h1>
      
      <div className="grid gap-12">
        {Object.entries(skills).map(([category, items], index) => {
          const Icon = icons[category] || Code;
          return (
            <div
              key={category}
              className="card p-8 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900">
                  <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h2 className="text-2xl font-semibold">{category}</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {items.map((skill) => (
                  <div key={skill.name} className="group">
                    <h3 className="text-lg font-medium mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {skill.name}
                    </h3>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-600 dark:bg-indigo-400 rounded-full transition-all duration-1000 ease-out group-hover:opacity-80"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};