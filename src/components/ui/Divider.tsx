import { FlowerIcon } from '@phosphor-icons/react';
import { motion } from 'motion/react';

interface DividerProps {
  className?: string;
  weight?: 'light' | 'medium' | 'heavy';
  animated?: boolean;
  animationDelay?: number;
}

const Divider = ({
  className,
  weight = 'medium',
  animated = false,
  animationDelay = 0.3
}: DividerProps) => {
  const thickness =
    weight === 'light' ? 'h-px' : weight === 'heavy' ? 'h-0.5' : 'h-px';
  const opacity =
    weight === 'light'
      ? 'opacity-30'
      : weight === 'heavy'
        ? 'opacity-60'
        : 'opacity-40';

  const lineClasses = `bg-sakura-stone ${thickness} ${opacity} flex-1`;
  const transition = {
    duration: 0.5,
    delay: animationDelay,
    ease: [0.22, 1, 0.36, 1] as const
  };

  return (
    <div
      className={`mx-auto flex w-full items-center gap-4 ${className ?? ''}`}
      aria-hidden="true"
    >
      {animated ? (
        <>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={transition}
            className={`${lineClasses} origin-left`}
          />
          <span className="text-sakura-accent font-zenmaru text-sm">
            <FlowerIcon weight="fill" size={18} aria-hidden="true" />
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={transition}
            className={`${lineClasses} origin-right`}
          />
        </>
      ) : (
        <>
          <div className={lineClasses} />
          <span className="text-sakura-accent font-zenmaru text-sm">
            <FlowerIcon weight="fill" size={18} aria-hidden="true" />
          </span>
          <div className={lineClasses} />
        </>
      )}
    </div>
  );
};

export default Divider;
