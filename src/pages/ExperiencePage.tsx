import { Timeline } from '../components/Timeline';
import { experiences } from '../data/experience';

export const ExperiencePage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-center mb-16 animate-fade-in">Professional Experience</h1>
      <Timeline experiences={experiences} />
    </div>
  );
};