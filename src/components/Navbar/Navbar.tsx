import { useState } from 'react';

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Works', link: '/works' },
  { name: 'Contact', link: '/contact' }
];

const Navbar = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="bg-sakura-day-bg dark:bg-sakura-night-bg flex h-20 items-center justify-center">
      <h1 className="font-dmmono text-sakura-day-text dark:text-sakura-night-text text-3xl font-bold -tracking-wider">
        Terystal
      </h1>
      {/* <ThemeToggle /> */}
    </div>
  );
};

export default Navbar;
