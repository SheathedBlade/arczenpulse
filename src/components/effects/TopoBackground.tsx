import { useEffect, useRef } from 'react';
import { useCanvasSizing } from './topo/useCanvasSizing';
import { useTopoWorker } from './topo/useTopoWorker';

const TopoBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resize, cleanup: cleanupSizing } = useCanvasSizing({ canvasRef });

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  const { pause, resume } = useTopoWorker({
    canvasRef,
    reducedMotion: prefersReducedMotion
  });

  useEffect(() => {
    resize();

    const handleResize = () => resize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [resize]);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        pause();
      } else {
        resume();
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () =>
      document.removeEventListener('visibilitychange', handleVisibility);
  }, [pause, resume]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          pause();
        } else {
          resume();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(canvas);

    return () => {
      observer.disconnect();
    };
  }, [pause, resume]);

  useEffect(() => {
    return () => {
      cleanupSizing();
      pause();
    };
  }, [cleanupSizing, pause]);

  return (
    <canvas ref={canvasRef} className="pointer-events-none fixed inset-0" />
  );
};

export default TopoBackground;
