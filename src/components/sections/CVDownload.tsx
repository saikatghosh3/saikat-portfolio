import { FileDown, Eye } from 'lucide-react';
import { useState } from 'react';

export const CVDownload = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleDownload = () => {
    // Replace with your actual CV file URL
    // const cvUrl = 'https://drive.google.com/file/d/15IyCzJW29r-QqOZZYpzluifSqfw_SsHG/view?usp=sharing';
    const cvUrl = 'https://drive.google.com/file/d/1wcHphxL-q_6GPMn1rauDZuMBxSJvK0om/view?usp=sharing';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Saikat Ghosh-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card p-8 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Download My CV</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Get a detailed overview of my skills, experience, and qualifications
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={handleDownload}
              className="btn-primary flex items-center justify-center gap-2 group"
            >
              <FileDown className="w-5 h-5 group-hover:animate-bounce" />
              Download CV
            </button>
            <button
              onClick={() => setIsPreviewOpen(!isPreviewOpen)}
              className="btn-outline flex items-center justify-center gap-2"
            >
              <Eye className="w-5 h-5" />
              Quick Preview
            </button>
          </div>

          {isPreviewOpen && (
            <div className="mt-8 p-6 border rounded-lg bg-white dark:bg-gray-700 animate-fade-in">
              <h3 className="font-semibold mb-4">CV Highlights</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Latest Position</h4>
                  <p className="text-indigo-600 dark:text-indigo-400">Front end developer Intern at Itransition Group.</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Education</h4>
                  <p>Bachelors of Technology  in  computer science and engineering - Jawaharlal Nehru Technological University Anantapur</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Key Skills</h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {['React', 'TypeScript', 'Node.js', 'Tailwind CSS, Bootstrp, material-ui, Express .js, Redux'].map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};