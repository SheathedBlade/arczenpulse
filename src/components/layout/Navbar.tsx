import { GithubLogoIcon } from '@phosphor-icons/react';
import { Link } from '@tanstack/react-router';
import Brand from '../ui/Brand';
import NavItem from '../ui/NavItem';
import ThemeSwitcher from '../ui/ThemeSwitcher';

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
    <div className="bg-sakura-surface/80 ease border-sakura-stone/20 sticky top-0 z-50 flex h-20 items-center justify-center border-b backdrop-blur-sm transition-colors duration-300">
      <Link to="/" className="h-full">
        <Brand animation="staggerBack" />
      </Link>
      <ul className="flex h-full list-none items-center justify-center">
        {navItems.map(item => (
          <NavItem key={item.name} item={item} />
        ))}
      </ul>
      <ThemeSwitcher />
    </div>
  );
};

export default Navbar;
