import Brand from '@/components/ui/Brand';
import NavItem from '@/components/ui/NavItem';
import ThemeSwitcher from '@/components/ui/ThemeSwitcher';
import { GithubLogoIcon, ListIcon, XIcon } from '@phosphor-icons/react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import AppLink from '../ui/AppLink';

const navItems = [
  { name: 'About', link: '/about' },
  { name: 'Works', link: '/works' },
  {
    name: 'Source',
    link: 'https://github.com/SheathedBlade/arc-studio',
    icon: GithubLogoIcon
  }
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMobileMenu = () => setMobileMenu(prev => !prev);
  const menuRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Closes mobile menu when window size is above mobile size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenu(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Exits mobile menu when Esc is pressed
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenu) setMobileMenu(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [mobileMenu]);

  // Focus trap / management
  useEffect(() => {
    if (!mobileMenu) return;

    const menu = menuRef.current;
    if (!menu) return;

    const timer = setTimeout(() => {
      const focusEls = menu.querySelectorAll<HTMLElement>(
        'a[href], button, [tabindex]:not([tabindex="-1"])'
      );
      if (focusEls.length > 0) (firstLinkRef.current || focusEls[0])?.focus();

      const handleTab = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;

        const focusArray = Array.from(focusEls);
        const first = focusArray[0];
        const last = focusArray[focusArray.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      };

      window.addEventListener('keydown', handleTab);
      return () => window.removeEventListener('keydown', handleTab);
    }, 100);
    return () => clearTimeout(timer);
  }, [mobileMenu]);

  // Locks scrolling the main content when mobile menu is active
  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileMenu]);

  return (
    <>
      <AnimatePresence>
        {mobileMenu && (
          <motion.nav
            ref={menuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className="bg-sakura-surface/95 fixed inset-x-0 top-20 bottom-0 z-40 flex flex-col overflow-y-auto pt-8 backdrop-blur-sm transition-colors"
          >
            <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center gap-2 p-6">
              <AppLink
                ref={firstLinkRef}
                aria-label="Home"
                to="/"
                onClick={() => setMobileMenu(false)}
                className="font-dmmono text-sakura-text hover:bg-sakura-card hover:text-sakura-accent w-full rounded-md py-4 text-center text-2xl transition-colors hover:underline focus:underline focus:outline-none"
              >
                Home
              </AppLink>
              {navItems.map(item => (
                <AppLink
                  key={item.name}
                  to={item.link}
                  aria-label={item.name}
                  onClick={() => setMobileMenu(false)}
                  className="font-dmmono text-sakura-text hover:bg-sakura-card hover:text-sakura-accent w-full rounded-md py-4 text-center text-2xl transition-colors hover:underline focus:underline focus:outline-none"
                >
                  {item.name}
                </AppLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      <nav
        className="bg-sakura-surface/80 ease border-sakura-stone/20 sticky top-0 z-50 flex h-20 border-b backdrop-blur-sm transition-colors"
        aria-label="main navigation"
      >
        <div className="flex items-center pl-4 md:flex-1 md:pl-0">
          <button
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenu}
            aria-controls="mobile-menu"
            aria-label={mobileMenu ? 'Close menu' : 'Open menu'}
            className="text-sakura-text hover:bg-sakura-bloom/70 focus:ring-sakura-accent flex items-center justify-center rounded-md p-2 transition-colors focus:ring-2 focus:outline-none md:hidden"
          >
            {mobileMenu ? (
              <XIcon aria-hidden="true" size={24} weight="bold" />
            ) : (
              <ListIcon aria-hidden="true" size={24} weight="bold" />
            )}
          </button>
        </div>
        <div className="flex flex-1 items-center justify-center gap-4 md:flex-initial md:justify-start">
          <AppLink
            to="/"
            className="flex h-full shrink-0 items-center"
            aria-label="Home"
          >
            <Brand animation="staggerBack" />
          </AppLink>
          <ul className="hidden h-full flex-1 list-none items-center gap-8 md:flex md:gap-4">
            {navItems.map(item => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
        </div>
        <div className="hidden flex-1 md:flex" />
        <div className="flex items-center pr-4">
          <ThemeSwitcher />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
