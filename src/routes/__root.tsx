import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Footer, Navbar } from '../components';
import '../styles/fonts.css';
import '../styles/globals.css';

export const Route = createRootRoute({
  component: RootLayout
});

function RootLayout() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light");

  return (
    <div className="bg-sakura-day-bg dark:bg-sakura-night-bg">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
