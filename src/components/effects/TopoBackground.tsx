import * as d3 from 'd3';
import { useEffect, useRef } from 'react';
import TopoWorker from '../../workers/topo.worker.ts?worker';

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

    const SCALE = 5; // higher = cheaper

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // Spawn worker
    workerRef.current = new TopoWorker();
    console.log('✅ Worker created:', workerRef.current);

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
      const { contours, w, h } = e.data;

      // Draw on next animation frame so it never blocks
      frameRef.current = requestAnimationFrame(() => {
        const transform = d3.geoTransform({
          point(px, py) {
            this.stream.point(px * SCALE, py * SCALE);
          }
        });

        const path = d3.geoPath(transform, ctx);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        contours.forEach((contour: d3.ContourMultiPolygon, i: number) => {
          const normalizedValue = i / contours.length;
          const opacity = 0.04 + normalizedValue * 0.09;

          ctx.beginPath();
          path(contour);
          ctx.strokeStyle = `rgba(201, 100, 120, ${opacity})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        });

        isDrawing.current = false;

        // Schedule next compute after a delay for throttling
        setTimeout(requestCompute, 16); // ~60fps compute rate
      });
    };

    // Start the loop
    requestCompute();

    // Pause when tab is not visible
    const handleVisibility = () => {
      if (document.hidden) {
        clearTimeout(frameRef.current);
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
      { threshold: 0 }
    );

    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(frameRef.current);
      workerRef.current?.terminate();
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibility);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-1" />
  );
};

export default TopoBackground;
