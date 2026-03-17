import { GithubLogoIcon } from '@phosphor-icons/react';
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
    <div className="bg-sakura-surface ease flex h-20 items-center justify-center transition-colors duration-300">
      <Brand />
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
