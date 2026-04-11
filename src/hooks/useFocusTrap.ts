import { useCallback, useEffect } from 'react';

interface UseFocusTrapOptions {
  enabled: boolean;
  containerRef: React.RefObject<HTMLElement | null>;
  firstFocusRef?: React.RefObject<HTMLElement | null>;
}

export function useFocusTrap({
  enabled,
  containerRef,
  firstFocusRef
}: UseFocusTrapOptions) {
  const handleTab = useCallback(
    (e: KeyboardEvent) => {
      if (!enabled || e.key !== 'Tab') return;

      const container = containerRef.current;
      if (!container) return;

      const focusEls = container.querySelectorAll<HTMLElement>(
        'a[href], button, [tabindex]:not([tabindex="-1"])'
      );

      if (focusEls.length === 0) return;

      const focusArray = Array.from(focusEls);
      const first = focusArray[0];
      const last = focusArray[focusArray.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    },
    [enabled, containerRef]
  );

  useEffect(() => {
    if (!enabled) return;

    const timer = setTimeout(() => {
      const el =
        firstFocusRef?.current ??
        containerRef.current?.querySelector<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
        );
      el?.focus();
    }, 100);

    window.addEventListener('keydown', handleTab);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleTab);
    };
  }, [enabled, handleTab, firstFocusRef, containerRef]);
}
