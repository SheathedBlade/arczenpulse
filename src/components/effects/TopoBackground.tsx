import TopoWorker from '@/workers/topo.worker.ts?worker';
import { ContourMultiPolygon } from 'd3-contour';
import { geoPath, geoTransform } from 'd3-geo';
import { useEffect, useRef } from 'react';

const TopoBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const workerRef = useRef<Worker | null>(null);
  const frameRef = useRef<number>(0);
  const isDrawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      // Render a single static frame and stop
      const SCALE = 5;
      canvas.width = window.innerWidth + 40;
      canvas.height = window.innerHeight + 40;
      canvas.style.width = `${window.innerWidth + 40}px`;
      canvas.style.height = `${window.innerHeight + 40}px`;
      canvas.style.left = '-20px';
      canvas.style.top = '-20px';

      const worker = new TopoWorker();
      worker.onmessage = e => {
        const { contours } = e.data;
        const transform = geoTransform({
          point(px: number, py: number) {
            this.stream.point(px * SCALE, py * SCALE);
          }
        });
        const path = geoPath(transform, ctx);
        contours.forEach((contour: ContourMultiPolygon, i: number) => {
          const normalizedValue = i / contours.length;
          const opacity = 0.06 + normalizedValue * 0.09;
          ctx.beginPath();
          path(contour);
          ctx.strokeStyle = `rgba(201, 100, 120, ${opacity})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        });
        worker.terminate();
      };
      worker.postMessage({
        width: canvas.width,
        height: canvas.height,
        scale: SCALE
      });
      return;
    }

    const THROTTLE_MS = 16; // ~15fps compute rate — ambient without constant churn
    const SCALE = 5; // higher = cheaper

    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    let computeTimer: ReturnType<typeof setTimeout> | null = null;

    const resize = () => {
      if (resizeTimer) return;
      resizeTimer = setTimeout(() => {
        resizeTimer = null;
        const OVERFLOW = 20;
        canvas.width = window.innerWidth + OVERFLOW * 2;
        canvas.height = window.innerHeight + OVERFLOW * 2;
        canvas.style.width = `${window.innerWidth + OVERFLOW * 2}px`;
        canvas.style.height = `${window.innerHeight + OVERFLOW * 2}px`;
        canvas.style.left = `-${OVERFLOW}px`;
        canvas.style.top = `-${OVERFLOW}px`;
        requestCompute();
      }, 100);
    };

    resize();
    window.addEventListener('resize', resize);

    // Spawn worker
    workerRef.current = new TopoWorker();

    const requestCompute = () => {
      if (!isDrawing.current) {
        isDrawing.current = true;
        workerRef.current?.postMessage({
          width: canvas.width,
          height: canvas.height,
          scale: SCALE
        });
      }
    };

    workerRef.current.onmessage = e => {
      const { contours } = e.data;

      // Draw on next animation frame so it never blocks
      frameRef.current = requestAnimationFrame(() => {
        const transform = geoTransform({
          point(px, py) {
            this.stream.point(px * SCALE, py * SCALE);
          }
        });

        const path = geoPath(transform, ctx);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        contours.forEach((contour: ContourMultiPolygon, i: number) => {
          const normalizedValue = i / contours.length;
          const opacity = 0.06 + normalizedValue * 0.09;

          ctx.beginPath();
          path(contour);
          ctx.strokeStyle = `rgba(201, 100, 120, ${opacity})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        });

        isDrawing.current = false;

        // Schedule next compute after a delay for throttling
        computeTimer = setTimeout(requestCompute, THROTTLE_MS);
      });
    };

    // Start the loop
    requestCompute();

    // Pause when tab is not visible
    const handleVisibility = () => {
      if (document.hidden) {
        if (resizeTimer) clearTimeout(resizeTimer);
        if (computeTimer) clearTimeout(computeTimer);
        cancelAnimationFrame(frameRef.current);
        isDrawing.current = false;
      } else {
        requestCompute();
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);

    // Pause when scrolled out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          isDrawing.current = true; // prevent new computes
        } else {
          isDrawing.current = false;
          requestCompute();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(frameRef.current);
      if (resizeTimer) clearTimeout(resizeTimer);
      if (computeTimer) clearTimeout(computeTimer);
      workerRef.current?.terminate();
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibility);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="pointer-events-none fixed inset-0" />
  );
};

export default TopoBackground;
