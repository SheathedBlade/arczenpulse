import { Variants } from 'motion';

export const pageVariants: Variants = {
  initial: { opacity: 0, y: 8 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -8 }
};

export const routeTransitionVariants: Variants = {
  initial: { opacity: 0 },
  in: { opacity: 1, transition: { duration: 0.35, ease: 'easeOut' } },
  out: { opacity: 0, transition: { duration: 0.25, ease: 'easeIn' } }
};
