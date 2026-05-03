// import { FileDown, Eye } from 'lucide-react';
// import { useState } from 'react';

// export const CVDownload = () => {
//   const [isPreviewOpen, setIsPreviewOpen] = useState(false);

//   const handleDownload = () => {
//     // Replace with your actual CV file URL
//     // const cvUrl = 'https://drive.google.com/file/d/15IyCzJW29r-QqOZZYpzluifSqfw_SsHG/view?usp=sharing';
//     const cvUrl = 'https://drive.google.com/file/d/1wcHphxL-q_6GPMn1rauDZuMBxSJvK0om/view?usp=sharing';
//     const link = document.createElement('a');
//     link.href = cvUrl;
//     link.download = 'Saikat Ghosh-CV.pdf';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <section className="py-20 bg-[#30121B]">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="card p-8 rounded-3xl shadow-2xl bg-white/10 border border-white/10 backdrop-blur-xl">
//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-bold text-white mb-4">Download My CV</h2>
//             <p className="text-gray-300">
//               Get a detailed overview of my skills, experience, and qualifications
//             </p>
//           </div>

//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <button
//               onClick={handleDownload}
//               className="btn-primary flex items-center justify-center gap-2 group"
//             >
//               <FileDown className="w-5 h-5 group-hover:animate-bounce" />
//               Download CV
//             </button>
//             <button
//               onClick={() => setIsPreviewOpen(!isPreviewOpen)}
//               className="btn-outline flex items-center justify-center gap-2"
//             >
//               <Eye className="w-5 h-5" />
//               Quick Preview
//             </button>
//           </div>

//           {isPreviewOpen && (
//             <div className="mt-8 p-6 border rounded-lgbg-[#30121B] dark:bg-gray-700 animate-fade-in">
//               <h3 className="font-semibold mb-4">CV Highlights</h3>
//               <div className="space-y-4">
//                 <div>
//                   <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Latest Position</h4>
//                   <p className="text-indigo-600 dark:text-indigo-400">Software Engineer(React.js) at Roxnor,Dhaka,Bangladesh.</p>
//                 </div>
//                 <div>
//                   <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Education</h4>
//                   <p>Bachelors of Technology  in  computer science and engineering - Jawaharlal Nehru Technological University Anantapur</p>
//                 </div>
//                 <div>
//                   <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Key Skills</h4>
//                   <div className="flex flex-wrap gap-2 mt-1">
//                     {[ 'JavaScript','React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Bootstrp', 'Express.js', 'MySql', 'Php', 'Laravel'].map((skill) => (
//                       <span key={skill} className="skill-tag">
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };


import { FileDown, Eye, Download, FileText, Award, GraduationCap, Code2, X } from 'lucide-react';
import { useState } from 'react';

export const CVDownload = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleDownload = () => {
    const cvUrl = 'https://drive.google.com/file/d/1wcHphxL-q_6GPMn1rauDZuMBxSJvK0om/view?usp=sharing';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Saikat Ghosh-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      {/* Background - Matching other sections */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent" />
      
      {/* Animated Background Orbs */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-indigo-500/5 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4">
            <FileText className="w-3 h-3 text-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium">RESUME</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Download My CV
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto" />
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Get a detailed overview of my skills, experience, and professional qualifications
          </p>
        </div>

        {/* Main Card */}
        <div className="group relative">
          {/* Card Glow Effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-md" />
          
          <div className="relative backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 p-8 sm:p-10 hover:border-white/20 transition-all duration-500">
            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10 pb-8 border-b border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  5+
                </div>
                <div className="text-xs text-gray-500 mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  20+
                </div>
                <div className="text-xs text-gray-500 mt-1">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  15+
                </div>
                <div className="text-xs text-gray-500 mt-1">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  100%
                </div>
                <div className="text-xs text-gray-500 mt-1">Client Satisfaction</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <button
                onClick={handleDownload}
                className="group/btn relative overflow-hidden px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Download className="w-5 h-5 group-hover/btn:animate-bounce" />
                <span>Download CV (PDF)</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
              </button>
              
              <button
                onClick={() => setIsPreviewOpen(!isPreviewOpen)}
                className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium flex items-center justify-center gap-2 hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300"
              >
                <Eye className="w-5 h-5" />
                <span>{isPreviewOpen ? 'Hide Preview' : 'Quick Preview'}</span>
              </button>
            </div>

            {/* Quick Preview Section */}
            {isPreviewOpen && (
              <div className="relative mt-8 pt-8 border-t border-white/10 animate-fade-in">
                <button
                  onClick={() => setIsPreviewOpen(false)}
                  className="absolute top-8 right-0 p-1 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
                
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-indigo-400" />
                  CV Highlights
                </h3>
                
                <div className="space-y-6">
                  {/* Latest Position */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10">
                      <Award className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Current Position</h4>
                      <p className="text-white">Software Engineer (React.js) at Roxnor, Dhaka, Bangladesh</p>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10">
                      <GraduationCap className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Education</h4>
                      <p className="text-white">Bachelor of Technology in Computer Science & Engineering</p>
                      <p className="text-gray-400 text-sm mt-1">Jawaharlal Nehru Technological University, Anantapur</p>
                    </div>
                  </div>

                  {/* Key Skills */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10">
                      <Code2 className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-400 mb-3">Technical Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {['JavaScript', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Bootstrap', 'Express.js', 'MySQL', 'PHP', 'Laravel'].map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium hover:border-indigo-500/50 hover:text-indigo-400 transition-all duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA inside preview */}
                <div className="mt-8 pt-6 text-center">
                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
                  >
                    <FileDown className="w-4 h-4" />
                    Download full CV for complete details
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* File Format Info */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-500">
            PDF format • Last updated: December 2024 • Size: ~250KB
          </p>
        </div>
      </div>
    </section>
  );
};
