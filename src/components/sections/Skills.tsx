const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'] },
  { category: 'Styling', items: ['Tailwind CSS', 'Bootstrap', 'MUI','Sass'] },
  { category: 'Tools', items: ['Git', 'VS Code', 'Webpack', 'Vite'] },
  { category: 'Testing', items: ['Jest', 'React Testing Library', 'Cypress'] },
];

const gradients = [
  'card-gradient-1',
  'card-gradient-2',
  'card-gradient-3',
  'card-gradient-4',
];

export const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 section-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6  lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12  text-gray-700 animate-fade-in">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8  ">
          {skills.map((skillGroup, index) => (
            <div
              key={skillGroup.category}
              className={`animated-card ${gradients[index]} p-6    bg-blue-500/20 rounded-lg`} 
              // on the above line we should add the class for glowing effect 
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold mb-4  text-gray-700">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-white/30 backdrop-blur-sm
                             border border-white/20 text-gray-700 text-sm
                             hover:scale-110 transition-transform duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};