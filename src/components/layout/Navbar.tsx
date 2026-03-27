import Brand from '@/components/ui/Brand';
import NavItem from '@/components/ui/NavItem';
import ThemeSwitcher from '@/components/ui/ThemeSwitcher';
import { GithubLogoIcon } from '@phosphor-icons/react';
import AnimatedLink from '../ui/AnimatedLink';

const navItems = [
  { name: 'About', link: '/about' },
  { name: 'Works', link: '/works' },
  { name: 'Contact', link: '/contact' },
  {
    name: 'Source',
    link: 'https://github.com/SheathedBlade/arczenpulse',
    icon: GithubLogoIcon
  }
];

const Navbar = () => {
  return (
    <div className="bg-sakura-surface/80 ease border-sakura-stone/20 sticky top-0 z-50 flex h-20 border-b backdrop-blur-sm transition-colors duration-300">
      <div className="flex-1" />
      <div className="flex h-full items-center gap-4">
        <AnimatedLink to="/" className="flex h-full shrink-0 items-center">
          <Brand animation="staggerBack" />
        </AnimatedLink>
        <ul className="flex h-full flex-1 list-none">
          {navItems.map(item => (
            <NavItem key={item.name} item={item} />
          ))}
        </ul>
      </div>
      <div className="flex-1" />
      <div className="flex shrink-0 items-center pr-4">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
