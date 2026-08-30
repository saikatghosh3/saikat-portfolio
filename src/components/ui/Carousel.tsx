import { useState, useEffect, useRef, useCallback, ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: ReactNode[];
  autoScroll?: boolean;
  interval?: number;
  className?: string;
}

const MAX_VISIBLE = 3;

export const Carousel = ({
  children,
  autoScroll = true,
  interval = 3000,
  className = '',
}: CarouselProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(1);
  const maxIndex = Math.max(0, children.length - cardsPerView);

  useEffect(() => {
    const update = () => {
      const width = trackRef.current?.offsetWidth || 0;
      const perView = Math.max(1, Math.min(MAX_VISIBLE, Math.floor(width / 300)));
      setCardsPerView(perView);
      setIndex((prev) => Math.min(prev, Math.max(0, children.length - perView)));
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [children.length]);

  const goTo = useCallback(
    (i: number) => setIndex(Math.max(0, Math.min(i, maxIndex))),
    [maxIndex]
  );

  const next = useCallback(() => goTo(index === maxIndex ? 0 : index + 1), [index, maxIndex, goTo]);
  const prev = useCallback(() => goTo(index === 0 ? maxIndex : index - 1), [index, maxIndex, goTo]);

  useEffect(() => {
    if (!autoScroll || isPaused || maxIndex === 0) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [autoScroll, isPaused, interval, maxIndex, next]);

  const slideWidth = trackRef.current
    ? trackRef.current.offsetWidth / cardsPerView
    : 0;

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Track */}
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * slideWidth}px)` }}
        >
          {children.map((child, i) => (
            <div
              key={i}
              className="shrink-0 px-3"
              style={{ width: `${100 / cardsPerView}%` }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {children.length > cardsPerView && (
        <>
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute -left-4 sm:-left-5 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-sm hover:bg-indigo-500 hover:border-indigo-500 hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute -right-4 sm:-right-5 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-sm hover:bg-indigo-500 hover:border-indigo-500 hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Dots */}
      {maxIndex > 0 && (
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === i
                  ? 'w-8 bg-gradient-to-r from-indigo-500 to-purple-500'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
