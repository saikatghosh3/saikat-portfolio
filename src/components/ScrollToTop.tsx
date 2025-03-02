// import { useState, useEffect } from 'react';
// import { ArrowUp } from 'lucide-react';

// export const ScrollToTop = () => {
//   const [isVisible, setIsVisible] = useState(false);

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
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   return (
//     <button
//       className={`fixed bottom-8 right-8 p-3 rounded-full bg-indigo-600 text-white shadow-lg 
//         hover:bg-indigo-700 transition-all duration-300 transform hover:scale-110 
//         focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
//         ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
//       onClick={scrollToTop}
//       aria-label="Scroll to top"
//     >
//       <ArrowUp className="w-6 h-6" />
//     </button>
//   );
// };

// Another example

import { useState, useEffect } from 'react';
import { ArrowUp, Loader2 } from 'lucide-react';

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

    // Simulate loading for a short time
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  return (
    <button
      className={`fixed bottom-8 right-8 p-3 rounded-full bg-indigo-600 text-white shadow-lg 
        hover:bg-indigo-700 transition-all duration-300 transform hover:scale-110 
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      {isLoading ? (
        <Loader2 className="w-6 h-6 animate-spin" />
      ) : (
        <ArrowUp className="w-6 h-6" />
      )}
    </button>
  );
};



// Another example

// import { useState, useEffect, useRef } from 'react';
// import { ArrowUp, Loader2 } from 'lucide-react';

// export const ScrollToTop = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const timeoutRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsVisible(window.scrollY > 300);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     setIsLoading(true);
//     window.scrollTo({ top: 0, behavior: 'smooth' });

//     // Clear previous timeout (if any) and set a new one
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     timeoutRef.current = setTimeout(() => setIsLoading(false), 800);
//   };

//   return (
//     <button
//       className={`fixed bottom-8 right-8 p-3 rounded-full bg-indigo-600 text-white shadow-lg 
//         transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
//         ${isVisible ? 'opacity-100 scale-100 animate-bounce' : 'opacity-0 scale-75 pointer-events-none'}
//         ${isLoading ? 'animate-pulse' : 'hover:animate-wiggle'}`}
//       onClick={scrollToTop}
//       aria-label="Scroll to top"
//     >
//       {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : <ArrowUp className="w-6 h-6" />}
//     </button>
//   );
// };
