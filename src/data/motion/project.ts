import { Variants } from 'motion';

export const projectCardImageVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] }
  },
  focus: {
    scale: 1.02,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] }
  }
};

export const projectHeroVariants: Variants = {
  hidden: { opacity: 0, scale: 0.965, y: 5 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const projectMetaVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: 'easeOut',
      delay: 0.1
    }
  }
};
