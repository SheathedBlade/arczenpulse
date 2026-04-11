import { useCallback, useRef } from 'react';
import { OVERFLOW, RESIZE_DEBOUNCE_MS } from './constants';

interface UseCanvasSizingOptions {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
}

export function useCanvasSizing({ canvasRef }: UseCanvasSizingOptions) {
  const resizeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resize = useCallback(() => {
    if (resizeTimerRef.current) return;
    resizeTimerRef.current = setTimeout(() => {
      resizeTimerRef.current = null;
      const canvas = canvasRef.current;
      if (!canvas) return;

      canvas.width = window.innerWidth + OVERFLOW * 2;
      canvas.height = window.innerHeight + OVERFLOW * 2;
      canvas.style.width = `${window.innerWidth + OVERFLOW * 2}px`;
      canvas.style.height = `${window.innerHeight + OVERFLOW * 2}px`;
      canvas.style.left = `-${OVERFLOW}px`;
      canvas.style.top = `-${OVERFLOW}px`;
    }, RESIZE_DEBOUNCE_MS);
  }, [canvasRef]);

  const cleanup = useCallback(() => {
    if (resizeTimerRef.current) {
      clearTimeout(resizeTimerRef.current);
      resizeTimerRef.current = null;
    }
  }, []);

  return { resize, cleanup };
}
