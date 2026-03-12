import { useState } from "react";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Works", link: "/works" },
  { name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [hovered, setHovered] = useState(null);


  return (
    <div className="flex items-center justify-center bg-sakura-day-bg h-20 dark:bg-sakura-night-bg">
      <h1 className="font-dmmono text-3xl font-bold -tracking-wider text-sakura-day-text dark:text-sakura-night-text">Terystal</h1>
    </div>
  )
}

export default Navbar;