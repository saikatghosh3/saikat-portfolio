import { motion } from 'framer-motion';
import { forwardRef, useEffect, useId, useState, type RefObject, type ReactNode, type SVGProps, type CSSProperties } from 'react';

interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement | null>;
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

export const AnimatedBeam = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  pathColor = 'gray',
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = '#ffaa40',
  gradientStopColor = '#9c40ff',
  delay = 0,
  duration = 5,
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}: AnimatedBeamProps) => {
  const id = useId();
  const [pathD, setPathD] = useState('');
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updatePath = () => {
      if (!containerRef.current || !fromRef.current || !toRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const rectA = fromRef.current.getBoundingClientRect();
      const rectB = toRef.current.getBoundingClientRect();

      const svgWidth = containerRect.width;
      const svgHeight = containerRect.height;
      setSvgDimensions({ width: svgWidth, height: svgHeight });

      const startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
      const startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
      const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
      const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

      const controlY = startY - curvature;
      const d = `M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`;

      setPathD(d);
    };

    updatePath();
    window.addEventListener('resize', updatePath);
    return () => window.removeEventListener('resize', updatePath);
  }, [containerRef, fromRef, toRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset]);

  if (!pathD) return null;

  const gradientId = `gradient-${id}`;

  return (
    <svg
      width={svgDimensions.width}
      height={svgDimensions.height}
      className={className}
      style={{
        pointerEvents: 'none',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          x1={svgDimensions.width / 2}
          y1="0"
          x2={svgDimensions.width / 2}
          y2={svgDimensions.height}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop stopColor={gradientStopColor} />
          <stop offset="1" stopColor={gradientStartColor} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Static faint path */}
      <path
        d={pathD}
        strokeWidth={pathWidth}
        stroke={pathColor}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
        fill="none"
      />

      {/* Traveling light beam */}
      <motion.path
        d={pathD}
        strokeWidth={pathWidth}
        stroke={`url(#${gradientId})`}
        strokeLinecap="round"
        strokeOpacity="1"
        fill="none"
        transition={{
          delay,
          duration,
          ease: [0.16, 1, 0.3, 1],
          repeat: Infinity,
          repeatDelay: 2,
        }}
        initial={{ pathLength: reverse ? 1 : 0 }}
        animate={{ pathLength: reverse ? 0 : 1 }}
      />
    </svg>
  );
};

interface CircleProps {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

export const Circle = forwardRef<HTMLDivElement, CircleProps>(({ className, children, style }, ref) => {
  return (
    <div
      ref={ref}
      style={style}
      className={[
        'z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/30 bg-slate-900/90 shadow-[0_0_20px_-10px_rgba(129,140,248,0.8)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  );
});

const ReactIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true" {...props}>
    <circle cx="12" cy="12" r="1.9" fill="#61DAFB" stroke="none" />
    <ellipse cx="12" cy="12" rx="9.2" ry="3.8" />
    <ellipse cx="12" cy="12" rx="9.2" ry="3.8" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="9.2" ry="3.8" transform="rotate(120 12 12)" />
  </svg>
);

const TypeScriptIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="#3178C6" aria-hidden="true" {...props}>
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0h-21.75zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444.192.14.428.275.708.406.28.13.595.274.945.429.377.166.73.353 1.058.561.28.18.52.386.718.61.199.223.354.468.465.735.112.266.168.573.168.92 0 .435-.083.82-.249 1.158a2.322 2.322 0 0 1-.679.855c-.28.23-.61.402-.99.517-.379.115-.786.173-1.221.173-.369 0-.753-.05-1.15-.148a5.27 5.27 0 0 1-1.15-.416v-2.562c.36.2.762.373 1.205.518.442.144.894.216 1.354.216.32 0 .6-.033.84-.098.24-.066.44-.16.598-.28.16-.12.277-.267.354-.443a1.403 1.403 0 0 0 .122-.57c0-.253-.06-.467-.18-.643a1.527 1.527 0 0 0-.46-.477c-.184-.133-.396-.254-.635-.361-.24-.108-.494-.22-.762-.336-.346-.151-.671-.326-.976-.523a2.6 2.6 0 0 1-.713-.617 2.63 2.63 0 0 1-.436-.826 2.95 2.95 0 0 1-.15-1.024c0-.451.092-.856.276-1.214.184-.357.43-.66.739-.908.308-.247.667-.435 1.078-.565.411-.13.845-.195 1.302-.195zm-4.31 9.68H9.028v-9.264H6.075V7.275h8.253v2.891h-2.96v9.264z" />
  </svg>
);

const TailwindIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="#06B6D4" aria-hidden="true" {...props}>
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
  </svg>
);

const FramerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
  </svg>
);

const NextIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 128 128" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.9h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64 128 28.7 99.3 0 64 0z" />
    <path fill="#0b1120" d="M86.1 84.6l-7.5-11.3V41.9h7.5v42.7z" />
  </svg>
);

const UserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4.418 0-8 2.239-8 5v3h16v-3c0-2.761-3.582-5-8-5z" />
  </svg>
);

export const Icons = {
  reactjs: ReactIcon,
  typescript: TypeScriptIcon,
  tailwindcss: TailwindIcon,
  framer: FramerIcon,
  nextjs: NextIcon,
  user: UserIcon,
};
