import { Variants } from 'motion';

export const verticalLabelVariants: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.15,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const monoLabelVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      delay: 0.1,
      ease: 'easeOut'
    }
  }
};

export const linkHoverVariants: Variants = {
  rest: { x: 0, opacity: 1 },
  hover: {
    x: 4,
    opacity: 1,
    transition: { duration: 0.2, ease: 'easeOut' }
  }
};

export const linkDescriptionVariants: Variants = {
  rest: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } }
};

export const sectionRevealVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut'
    }
  }
};

export const chineseCharVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const chineseCharContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
};
