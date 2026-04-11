import { useRef, useCallback, useEffect, useState } from 'react';
import TopoWorker from '@/workers/topo.worker.ts?worker';
import { ContourMultiPolygon } from 'd3-contour';
import { geoPath, geoTransform } from 'd3-geo';
import {
  SCALE,
  MIN_OPACITY,
  MAX_OPACITY,
  LINE_WIDTH,
  THROTTLE_MS
} from './constants';

interface UseTopoWorkerOptions {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  reducedMotion: boolean;
}

export function useTopoWorker({
  canvasRef,
  reducedMotion
}: UseTopoWorkerOptions) {
  const workerRef = useRef<Worker | null>(null);
  const frameRef = useRef<number>(0);
  const isDrawingRef = useRef(false);
  const computeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [contours, setContours] = useState<ContourMultiPolygon[]>([]);

  const draw = useCallback(
    (drawnContours: ContourMultiPolygon[]) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const transform = geoTransform({
        point(px: number, py: number) {
          this.stream.point(px * SCALE, py * SCALE);
        }
      });
      const path = geoPath(transform, ctx);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawnContours.forEach((contour: ContourMultiPolygon, i: number) => {
        const normalizedValue = i / drawnContours.length;
        const opacity = MIN_OPACITY + normalizedValue * MAX_OPACITY;
        ctx.beginPath();
        path(contour);
        ctx.strokeStyle = `rgba(201, 100, 120, ${opacity})`;
        ctx.lineWidth = LINE_WIDTH;
        ctx.stroke();
      });
    },
    [canvasRef]
  );

  const requestCompute = useCallback(() => {
    if (isDrawingRef.current || !workerRef.current) return;
    isDrawingRef.current = true;
    const canvas = canvasRef.current;
    if (!canvas) return;
    workerRef.current.postMessage({
      width: canvas.width,
      height: canvas.height,
      scale: SCALE
    });
  }, [canvasRef]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (reducedMotion) {
      workerRef.current = new TopoWorker();
      workerRef.current.onmessage = e => {
        draw(e.data.contours);
        workerRef.current?.terminate();
        workerRef.current = null;
      };
      workerRef.current.postMessage({
        width: canvas.width,
        height: canvas.height,
        scale: SCALE
      });
      return;
    }

    workerRef.current = new TopoWorker();

    workerRef.current.onmessage = e => {
      frameRef.current = requestAnimationFrame(() => {
        draw(e.data.contours);
        setContours(e.data.contours);
        isDrawingRef.current = false;
        computeTimerRef.current = setTimeout(requestCompute, THROTTLE_MS);
      });
    };

    requestCompute();

    return () => {
      cancelAnimationFrame(frameRef.current);
      if (computeTimerRef.current) clearTimeout(computeTimerRef.current);
      workerRef.current?.terminate();
      workerRef.current = null;
    };
  }, [reducedMotion, canvasRef, draw, requestCompute]);

  const pause = useCallback(() => {
    if (computeTimerRef.current) clearTimeout(computeTimerRef.current);
    cancelAnimationFrame(frameRef.current);
    isDrawingRef.current = true;
  }, []);

  const resume = useCallback(() => {
    isDrawingRef.current = false;
    requestCompute();
  }, [requestCompute]);

  return { pause, resume, contours };
}
