import { motion } from 'motion/react';
import { useState } from 'react';
import ARCIcon from '../../assets/svg/ARC.svg?react';
import ARC_CN_Icon from '../../assets/svg/ARC_cn_char.svg?react';

const Brand = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      href="/"
      className="relative flex h-full w-auto cursor-pointer overflow-hidden py-2"
    >
      <motion.span
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: hovered ? 1 : 0,
          scale: hovered ? 1 : 0
        }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle, var(--sakura-bloom) 10%, transparent 90%',
          transformOrigin: 'center center'
        }}
      />

      <ARCIcon
        preserveAspectRatio="xMidYMid meet"
        style={{
          letterSpacing: '0.5px',
          transform: 'translateX(1px, 0)'
        }}
        className="fill-sakura-text z-10 h-auto w-40"
      />
      <ARC_CN_Icon className="fill-sakura-text z-10 -ml-9 h-auto w-14 p-2" />
    </a>
  );
};

export default Brand;
