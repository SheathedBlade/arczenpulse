import ARCIcon from '@/assets/svg/ARC.svg?react';
import ARC_CN_Icon from '@/assets/svg/ARC_cn_char.svg?react';
import { motion, stagger, Variants } from 'motion/react';
import { useState } from 'react';

type BrandAnimVariant = 'staggerForward' | 'staggerBack' | 'none';
interface BrandProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  animation?: BrandAnimVariant;
  className?: string;
}

const animateVariants: Record<BrandAnimVariant, Variants> = {
  staggerForward: {
    idle: { x: 0 },
    hovered: { x: 8 }
  },
  staggerBack: {
    idle: { x: 0 },
    hovered: { x: -8 }
  },
  none: {
    idle: {},
    hovered: {}
  }
};

const Brand = ({
  onMouseEnter,
  onMouseLeave,
  animation = 'none',
  className
}: BrandProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const childVariant: Variants = animateVariants[animation];

  return (
    <motion.div
      onMouseEnter={() => {
        setIsHovered(true);
        onMouseEnter?.();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onMouseLeave?.();
      }}
      animate={isHovered ? 'hovered' : 'idle'}
      variants={{
        idle: {
          transition: {
            delayChildren: stagger(0.05)
          }
        },
        hovered: {
          transition: {
            delayChildren: stagger(0.05)
          }
        }
      }}
      className={`flex h-full w-auto py-2 ${className || ''}`}
    >
      <motion.span
        key={1}
        variants={childVariant}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="flex items-center justify-center"
      >
        <ARCIcon
          preserveAspectRatio="xMidYMid meet"
          style={{
            letterSpacing: '0.5px',
            transform: 'translateX(1px)'
          }}
          className="fill-sakura-text z-10 h-20 w-40"
          aria-hidden="true"
        />
      </motion.span>
      <motion.span
        key={2}
        variants={childVariant}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="flex items-center justify-center"
      >
        <ARC_CN_Icon
          className="fill-sakura-text z-10 -mr-2 -ml-4 h-auto w-14"
          aria-hidden="true"
        />
      </motion.span>
    </motion.div>
  );
};

export default Brand;
