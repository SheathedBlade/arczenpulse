import Brand from '@/components/ui/Brand';
import NavItem from '@/components/ui/NavItem';
import ThemeSwitcher from '@/components/ui/ThemeSwitcher';
import { navItems } from './navbar/navItems';
import MobileMenu from './navbar/MobileMenu';
import { ListIcon, XIcon } from '@phosphor-icons/react';
import { AnimatePresence } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AppLink from '../ui/AppLink';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMobileMenu = () => setMobileMenu(prev => !prev);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const closeMobileMenu = () => {
    setMobileMenu(false);
    menuToggleRef.current?.focus();
  };
  const menuRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname.startsWith(path);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) closeMobileMenu();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenu) closeMobileMenu();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [mobileMenu]);

  useFocusTrap({
    enabled: mobileMenu,
    containerRef: menuRef,
    firstFocusRef: firstLinkRef
  });

  useBodyScrollLock(mobileMenu);

  return (
    <>
      <AnimatePresence>
        {mobileMenu && (
          <MobileMenu
            items={navItems}
            onClose={closeMobileMenu}
            menuRef={menuRef}
            firstLinkRef={firstLinkRef}
          />
        )}
      </AnimatePresence>
      <nav
        className="bg-sakura-surface/60 sticky top-0 z-50 backdrop-blur-sm"
        aria-label="main navigation"
      >
        <div className="flex h-16 items-center justify-between">
          <AppLink
            to="/"
            className="flex shrink-0 items-center"
            aria-label="Home"
          >
            <Brand animation="staggerForward" />
          </AppLink>

          <div className="flex items-center gap-6">
            <div className="hidden items-center gap-8 md:flex">
              {navItems.map(item => (
                <NavItem
                  key={item.name}
                  item={item}
                  isActive={isActive(item.link)}
                />
              ))}
            </div>
            <ThemeSwitcher />
            <button
              ref={menuToggleRef}
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenu}
              aria-controls="mobile-menu"
              aria-label={mobileMenu ? 'Close menu' : 'Open menu'}
              className="text-sakura-text hover:bg-sakura-bloom/70 focus:ring-sakura-accent mr-2 flex items-center justify-center rounded-md p-2 transition-colors focus:ring-2 focus:outline-none md:hidden"
            >
              {mobileMenu ? (
                <XIcon aria-hidden="true" size={24} weight="bold" />
              ) : (
                <ListIcon aria-hidden="true" size={24} weight="bold" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
