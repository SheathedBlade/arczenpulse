import { useState } from 'react';
import Brand from '../ui/Brand';

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Works', link: '/works' },
  { name: 'Contact', link: '/contact' }
];

const Navbar = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="bg-sakura-day-surface dark:bg-sakura-night-surface flex h-20 items-center justify-center">
      <Brand />
      {/* <ThemeToggle /> */}
    </div>
  );
};

export default Navbar;
