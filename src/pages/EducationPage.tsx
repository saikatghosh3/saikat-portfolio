import{ Timeline1} from '../components/sections/Timeline1';
import { education } from '../data/education';

export const EducationPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-center mb-16 animate-fade-in">Education and Qualifications</h1>
      <Timeline1 education ={education} />
    </div>
  );
};