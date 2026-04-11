import { Variants } from 'motion';

export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.1
    }
  }
};

export const childrenVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: 'easeOut'
    }
  }
};

export const motionConfig = {
  fast: { duration: 0.2, ease: 'easeOut' as const },
  normal: { duration: 0.35, ease: 'easeOut' as const },
  slow: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  cinematic: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }
};
