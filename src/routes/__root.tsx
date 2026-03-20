import {
  createRootRoute,
  HeadContent,
  Outlet,
  useRouterState
} from '@tanstack/react-router';
import { AnimatePresence } from 'motion/react';
import TopoBackground from '../components/effects/TopoBackground';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import { ThemeProvider } from '../components/ui/ThemeProvider';
import '../styles/fonts.css';
import '../styles/globals.css';

export const Route = createRootRoute({
  head: () => ({
    meta: [{ title: 'ARC Studio' }]
  }),
  component: RootLayout
});

function RootLayout() {
  const { location } = useRouterState();
  return (
    <>
      <HeadContent />
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        <TopoBackground />
        <div className="bg-sakura-bg scrollbar-thin scrollbar-thumb-sakura-stone/50 scrollbar-track-transparent">
          <Navbar />
          <AnimatePresence mode="wait">
            <Outlet key={location.pathname} />
          </AnimatePresence>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default RootLayout;
