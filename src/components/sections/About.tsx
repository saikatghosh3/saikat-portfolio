// import image1 from '../../assets/Saikat.jpg';


// export const About = () => {
//   return (
//     <section id="about" className="min-h-screen flex items-center justify-center py-20">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-center mb-8 text-white animate-fade-in">About Me</h2>
//         <div className="grid md:grid-cols-2 gap-8 items-center">
//           <div className="space-y-4 animate-slide-in-left">
//             <div className="glass-card p-6">
//               <p className="text-white">
//                 Hi! I'm a passionate Frontend Developer with expertise in building modern web applications
//                 using React, TypeScript, next.js, MUI, taiwindcss and other cutting-edge technologies.
//               </p>
//               <p className="text-lg text-white mt-4">
//                 With a strong foundation in web development and a keen eye for design, I create
//                 responsive and user-friendly interfaces that deliver exceptional user experiences.
//               </p>
//             </div>
//           </div>
//           {/* <div className="animate-slide-in-right">
//             <div className="glass-card p-2">
//               <img
//                 src={image1}
//                 alt="Frontend  developer"
//                 className="rounded-lg"
//               />
//             </div>
//           </div> */}

// <div className="animate-slide-in-right">
//   <div className="glass-card p-2 glow-effect">
//     <img
//       src={image1}
//       alt="Frontend developer"
//       className="rounded-lg"
//     />
//   </div>
// </div>

//         </div>
//       </div>
//     </section>
//   );
// };


import image1 from '../../assets/Saikat.jpg';
import { Code2, Sparkles, Rocket, Zap } from 'lucide-react';
import { useEffect, useState } from "react";


export const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Modern Tech Stack',
      description: 'React, TypeScript, Next.js, TailwindCSS'
    },
    {
      icon: Sparkles,
      title: 'Pixel Perfect',
      description: 'Attention to detail in every component'
    },
    {
      icon: Rocket,
      title: 'Performance Focused',
      description: 'Optimized loading & smooth interactions'
    },
    {
      icon: Zap,
      title: 'Rapid Development',
      description: 'Efficient workflow & clean code'
    }
  ];
 const text = "Hi, I am Saikat Ghosh";
const [displayText, setDisplayText] = useState("");
const [index, setIndex] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);
const [loopCount, setLoopCount] = useState(0);

 
useEffect(() => {
  if (loopCount >= 25) return; 

 let timeout: any;

  if (!isDeleting && index < text.length) {
    timeout = setTimeout(() => {
      setDisplayText((prev) => prev + text[index]);
      setIndex(index + 1);
    }, 80);
  } 
  else if (isDeleting && index > 0) {
    timeout = setTimeout(() => {
      setDisplayText((prev) => prev.slice(0, -1));
      setIndex(index - 1);
    }, 40);
  } 
  else if (index === text.length) {
    timeout = setTimeout(() => setIsDeleting(true), 800);
  } 
  else if (index === 0 && isDeleting) {
    setIsDeleting(false);
    setLoopCount((prev) => prev + 1); // ✅ count loop
  }

  return () => clearTimeout(timeout);
}, [index, isDeleting, loopCount]);

  return (
    <section id="about" className="relative py-16 sm:py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4">
            <span className="text-indigo-400 text-xs font-medium">GET TO KNOW ME</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl">
              <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                   {displayText}
            <span className="animate-pulse">|</span>
             <br />
                 a passionate <span className="text-indigo-400 font-semibold">Frontend Developer</span> 
                with expertise in building modern web applications using React, TypeScript, Next.js, 
                MUI, TailwindCSS, and other cutting-edge technologies.
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-6" />
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                With a strong foundation in web development and a keen eye for design, I create 
                responsive and user-friendly interfaces that deliver exceptional user experiences. 
                I believe in writing clean, maintainable code that scales beautifully.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10 group-hover:bg-indigo-500/15 transition-colors">
                      <item.icon className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-xs">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl blur-lg opacity-10 group-hover:opacity-15 transition-opacity" />
            <div className="relative backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-2 border border-white/20 shadow-xl">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={image1}
                  alt="Frontend Developer"
                  className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/50 via-transparent to-transparent" />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-indigo-500/10 rounded-full blur-lg" />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/10 rounded-full blur-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};
