import { motion } from 'motion/react';
import { ReactNode } from 'react';

const PageTransition = ({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
