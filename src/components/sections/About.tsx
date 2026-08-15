import image1 from '../../assets/Saikat.jpg';
import { Code2, Sparkles, Rocket, Zap, ArrowRight, Mail } from 'lucide-react';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Earth } from '../Earth';

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
  if (loopCount >= 25) {
    setDisplayText(text);
    return;
  }

  let timeout: ReturnType<typeof setTimeout>;

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
    setLoopCount((prev) => prev + 1);
  }

  return () => clearTimeout(timeout);
}, [index, isDeleting, loopCount]);

  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 sm:pb-20">
      {/* Background - Matching other sections */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent" />

      {/* Animated Background Orbs */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-indigo-500/5 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-1000" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-indigo-400 text-xs font-medium tracking-wider">GET TO KNOW ME</span>
            </div>

            {/* Typewriter Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-white leading-tight">
              {displayText}
              <span className="text-indigo-400 animate-pulse">|</span>
            </h1>

            {/* Role */}
            <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
              a passionate{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-semibold">
                Frontend Developer
              </span>{" "}
              with expertise in building modern web applications using React, TypeScript, Next.js,
              MUI, TailwindCSS, and other cutting-edge technologies.
            </p>

            {/* Description */}
            <p className="mt-4 text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              With a strong foundation in web development and a keen eye for design, I create
              responsive and user-friendly interfaces that deliver exceptional user experiences.
              I believe in writing clean, maintainable code that scales beautifully.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                to="/portfolio"
                className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/contact"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/15 text-gray-200 text-sm font-semibold hover:bg-indigo-500/10 hover:border-indigo-500/50 hover:text-white transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </Link>
            </div>

            {/* Highlights Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-xl mx-auto lg:mx-0 text-left">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-3.5 hover:border-indigo-500/50 hover:bg-white/[0.08] transition-all duration-300"
                >
                  <div className="p-2 rounded-lg bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors">
                    <item.icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                    <p className="text-gray-400 text-xs truncate">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-[260px] sm:w-[300px] lg:w-[340px]">
              {/* 3D Globe Background */}
              <div className="absolute -top-16 -right-12 sm:-right-16 w-72 sm:w-80 lg:w-[380px] opacity-70 pointer-events-none select-none">
                <Earth dark={1} />
              </div>

              {/* Glow Behind Portrait */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-indigo-500/40 to-purple-500/30 blur-2xl" />

              {/* Portrait */}
              <div className="relative rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[3px] shadow-2xl shadow-indigo-500/30">
                <div className="relative rounded-full overflow-hidden bg-slate-900 aspect-square">
                  <img
                    src={image1}
                    alt="Frontend Developer"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating Badge - Tech Stack */}
              <div className="absolute -left-6 bottom-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 shadow-lg">
                <p className="text-[10px] text-gray-300 uppercase tracking-wide">Crafting with</p>
                <p className="text-sm font-semibold text-white">React & TypeScript</p>
              </div>

              {/* Floating Badge - Status */}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
