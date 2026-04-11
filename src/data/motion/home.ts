import { Variants } from 'motion';

export const homePortraitVariants: Variants = {
  hidden: { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
  visible: {
    clipPath: 'inset(0% 0 0 0)',
    opacity: 1,
    transition: {
      duration: 0.9,
      delay: 0.05,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const homeIdentityVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: 0.2,
      ease: 'easeOut'
    }
  }
};

export const homeNameLineVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const homeStatementVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.35,
      ease: 'easeOut'
    }
  }
};

export const homeNavLinksVariants: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      staggerChildren: 0.1,
      delayChildren: 0.45,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const homeNavLinkItemVariants: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
};
