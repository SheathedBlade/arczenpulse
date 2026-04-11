import { Icon } from '@phosphor-icons/react';
import { motion } from 'motion/react';
import AppLink from './AppLink';

interface NavItemProps {
  item: {
    name: string;
    link: string;
    icon?: Icon;
  };
  isActive?: boolean;
}

const NavItem = ({ item, isActive }: NavItemProps) => {
  const Icon = item.icon;

  return (
    <li className="ease relative flex h-full items-center">
      <AppLink
        to={item.link}
        className={`font-dmmono hover:text-sakura-accent focus:text-sakura-accent group relative flex h-full items-center justify-center px-4 text-sm tracking-wider transition-colors duration-200 ${
          isActive ? 'text-sakura-accent' : 'text-sakura-text'
        }`}
      >
        {Icon && (
          <Icon
            size={16}
            weight="duotone"
            className={`mr-1.5 inline-block transition-transform duration-200 group-hover:-translate-y-px ${
              isActive ? 'text-sakura-accent' : ''
            }`}
            aria-hidden="true"
          />
        )}
        <span className="relative">{item.name}</span>
        <motion.div
          className="bg-sakura-accent absolute right-0 bottom-0 left-0 h-px origin-left transition-transform duration-200 group-hover:scale-x-100 group-focus-visible:scale-x-100"
          style={{ transform: isActive ? 'scaleX(1)' : undefined }}
          animate={{ scaleX: isActive ? 1 : 0 }}
          aria-hidden="true"
        />
      </AppLink>
    </li>
  );
};

export default NavItem;
