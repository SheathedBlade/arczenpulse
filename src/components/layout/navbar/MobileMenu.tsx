import AppLink from '@/components/ui/AppLink';
import type { NavItem } from './navItems';
import { motion } from 'motion/react';

interface MobileMenuProps {
  items: NavItem[];
  onClose: () => void;
  menuRef: React.RefObject<HTMLDivElement | null>;
  firstLinkRef: React.RefObject<HTMLAnchorElement | null>;
}

const MobileMenu = ({
  items,
  onClose,
  menuRef,
  firstLinkRef
}: MobileMenuProps) => {
  return (
    <motion.nav
      ref={menuRef}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
      className="bg-sakura-surface/95 fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col overflow-y-auto pt-8 backdrop-blur-sm transition-colors"
    >
      <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center gap-2 p-6">
        <AppLink
          ref={firstLinkRef}
          aria-label="Home"
          to="/"
          onClick={onClose}
          className="font-dmmono text-sakura-text hover:bg-sakura-card hover:text-sakura-accent w-full rounded-md py-4 text-center text-2xl transition-colors hover:underline focus:underline focus:outline-none"
        >
          Home
        </AppLink>
        {items.map(item => (
          <AppLink
            key={item.name}
            to={item.link}
            aria-label={item.name}
            onClick={onClose}
            className="font-dmmono text-sakura-text hover:bg-sakura-card hover:text-sakura-accent w-full rounded-md py-4 text-center text-2xl transition-colors hover:underline focus:underline focus:outline-none"
          >
            {item.name}
          </AppLink>
        ))}
      </div>
    </motion.nav>
  );
};

export default MobileMenu;
