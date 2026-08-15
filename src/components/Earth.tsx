import createGlobe from 'cobe';
import { memo, useEffect, useRef } from 'react';

interface EarthProps {
  className?: string;
  theta?: number;
  dark?: number;
  scale?: number;
  diffuse?: number;
  mapSamples?: number;
  mapBrightness?: number;
  baseColor?: [number, number, number];
  markerColor?: [number, number, number];
  glowColor?: [number, number, number];
}

export const Earth: React.FC<EarthProps> = memo(({
  className,
  theta = 0.25,
  dark = 1,
  scale = 1.1,
  diffuse = 1.2,
  mapSamples = 40000,
  mapBrightness = 6,
  baseColor = [0.4, 0.6509, 1],
  markerColor = [1, 0, 0],
  glowColor = [0.2745, 0.5765, 0.898],
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const configRef = useRef({ theta, dark, scale, diffuse, mapSamples, mapBrightness, baseColor, markerColor, glowColor });

  configRef.current = { theta, dark, scale, diffuse, mapSamples, mapBrightness, baseColor, markerColor, glowColor };

  useEffect(() => {
    let phi = 0;
    let animationFrameId: number;
    let globe: ReturnType<typeof createGlobe> | undefined;

    const renderGlobe = () => {
      if (!canvasRef.current) return;
      const { theta, dark, scale, diffuse, mapSamples, mapBrightness, baseColor, markerColor, glowColor } = configRef.current;
      const width = canvasRef.current.offsetWidth || 320;
      const created = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: width * 2,
        height: width * 2,
        phi: 0,
        theta,
        dark,
        scale,
        diffuse,
        mapSamples,
        mapBrightness,
        baseColor,
        markerColor,
        glowColor,
        opacity: 1,
        offset: [0, 0],
        markers: [],
      });

      const animate = () => {
        phi += 0.003;
        created.update({ phi });
        animationFrameId = requestAnimationFrame(animate);
      };
      animationFrameId = requestAnimationFrame(animate);

      return created;
    };

    globe = renderGlobe();

    const onResize = () => {
      if (globe) {
        cancelAnimationFrame(animationFrameId);
        globe.destroy();
      }
      globe = renderGlobe();
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
      globe?.destroy();
    };
  }, []);

  return (
    <div
      className={['flex items-center justify-center z-10 w-full mx-auto', className]
        .filter(Boolean)
        .join(' ')}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          aspectRatio: '1',
        }}
      />
    </div>
  );
});
