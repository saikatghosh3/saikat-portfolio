// import { useState, useEffect } from 'react';
// import { ArrowUp, Loader2 } from 'lucide-react';

// export const ScrollToTop = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.scrollY > 300) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener('scroll', toggleVisibility);
//     return () => window.removeEventListener('scroll', toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     setIsLoading(true);
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });

//     // Simulate loading for a short time
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 800);
//   };

//   return (
//     <button
//       className={`fixed bottom-8 right-8 p-3 rounded-full bg-black text-white shadow-lg 
//         hover:bg-black-400 transition-all duration-300 transform hover:scale-110 
//         focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
//         ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
//       onClick={scrollToTop}
//       aria-label="Scroll to top"
//     >
//       {isLoading ? (
//         <Loader2 className="w-6 h-6 animate-spin" />
//       ) : (
//         <ArrowUp className="w-6 h-6" />
//       )}
//     </button>
//   );
// };



// // Another example

// // import { useState, useEffect, useRef } from 'react';
// // import { ArrowUp, Loader2 } from 'lucide-react';

// // export const ScrollToTop = () => {
// //   const [isVisible, setIsVisible] = useState(false);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const timeoutRef = useRef(null);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsVisible(window.scrollY > 300);
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   const scrollToTop = () => {
// //     setIsLoading(true);
// //     window.scrollTo({ top: 0, behavior: 'smooth' });

// //     // Clear previous timeout (if any) and set a new one
// //     if (timeoutRef.current) clearTimeout(timeoutRef.current);
// //     timeoutRef.current = setTimeout(() => setIsLoading(false), 800);
// //   };

// //   return (
// //     <button
// //       className={`fixed bottom-8 right-8 p-3 rounded-full bg-indigo-600 text-white shadow-lg 
// //         transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
// //         ${isVisible ? 'opacity-100 scale-100 animate-bounce' : 'opacity-0 scale-75 pointer-events-none'}
// //         ${isLoading ? 'animate-pulse' : 'hover:animate-wiggle'}`}
// //       onClick={scrollToTop}
// //       aria-label="Scroll to top"
// //     >
// //       {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : <ArrowUp className="w-6 h-6" />}
// //     </button>
// //   );
// // };


import { useState, useEffect } from 'react';
import { ArrowUp, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    setIsLoading(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Scroll to top"
        >
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md" />
            
            {/* Main Button */}
            <div className="relative p-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <ArrowUp className="w-5 h-5 group-hover:animate-bounce transition-transform" />
              )}
            </div>
            
            {/* Tooltip */}
            <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
              <div className="bg-slate-900 text-gray-300 text-xs font-medium px-2 py-1 rounded-lg border border-white/10">
                Back to top
              </div>
            </div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
