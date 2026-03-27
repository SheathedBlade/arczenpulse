import { Icon } from '@phosphor-icons/react';
import { Link } from '@tanstack/react-router';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

interface NavItemProps {
  item: {
    name: string;
    link: string;
    icon?: Icon;
  };
}

const NavItem = ({ item }: NavItemProps) => {
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;

  return (
    <li
      key={item.name}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="ease relative isolate flex h-full items-center hover:underline"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.15, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top center' }}
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex flex-col items-center"
          >
            <motion.div
              initial={{ height: 80 }}
              animate={{ height: 96 }}
              exit={{ height: 80 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-sakura-bloom h-20 w-full overflow-hidden"
            />
            <svg
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
              className="w-full"
              style={{ height: 16 }}
            >
              <polygon points="0,0 100,0 50,20" fill="var(--sakura-bloom)" />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
      <Link
        to={item.link}
        className="text-sakura-text font-dmmono relative inset-0 z-10 flex h-full w-full items-center justify-center px-6"
      >
        <motion.span
          animate={{ y: hovered ? 8 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="inline-flex items-center justify-center"
        >
          {Icon && (
            <Icon
              size={24}
              weight="duotone"
              className="relative mr-1.5 inline-block"
            />
          )}
          {item.name}
        </motion.span>
      </Link>
    </li>
  );
};

export default NavItem;
