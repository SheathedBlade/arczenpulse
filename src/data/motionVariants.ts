import { Variants } from 'motion';

// =============================================================================
// CORE VARIANTS
// =============================================================================

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

// =============================================================================
// ROUTE TRANSITIONS
// =============================================================================

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

// =============================================================================
// HOME PAGE CHOREOGRAPHY
// =============================================================================

/**
 * Portrait reveal — clip-path wipe from top, slow settle
 */
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

/**
 * Identity block — name, title, role
 */
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

/**
 * Name line — for word-by-word or line-by-line reveal
 */
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

/**
 * Statement paragraph
 */
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

/**
 * Navigation links — staggered entrance
 */
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

/**
 * Vertical label reveal — for editorial side labels
 */
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

/**
 * Mono kicker / metadata reveal
 */
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

export const homeNavLinkItemVariants: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
};

// =============================================================================
// LINK INTERACTIONS
// =============================================================================

/**
 * Link hover — subtle translate + opacity shift
 */
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

// =============================================================================
// PROJECT VARIANTS
// =============================================================================

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

// =============================================================================
// SECTION REVEALS
// =============================================================================

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

// =============================================================================
// TIMING HELPERS
// =============================================================================

/**
 * Base motion settings for cinematic restraint:
 * - Short durations (0.2–0.5s)
 * - easeOut preferred for natural deceleration
 * - No bounce/elastic
 */
export const motionConfig = {
  fast: { duration: 0.2, ease: 'easeOut' as const },
  normal: { duration: 0.35, ease: 'easeOut' as const },
  slow: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  cinematic: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }
};
