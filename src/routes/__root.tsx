import NotFound from '@/components/layout/NotFound';
import {
  TransitionProvider,
  useTransition
} from '@/components/ui/TransitionProvider';
import { pageVariants } from '@/data/motionVariants';
import {
  createRootRoute,
  HeadContent,
  Outlet,
  useLocation
} from '@tanstack/react-router';
import { AnimatePresence, motion } from 'motion/react';
import TopoBackground from '../components/effects/TopoBackground';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import { ThemeProvider } from '../components/ui/ThemeProvider';
import '../styles/fonts.css';
import '../styles/globals.css';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { title: 'ARC Studio' },
      { rel: 'canonical', href: 'https://arczenpulse.dev' }
    ]
  }),
  component: RootLayout,
  notFoundComponent: NotFound
});

function PageContent() {
  const location = useLocation();
  const { pendingPath, commitTransition } = useTransition();
  const displayPath = pendingPath || location.pathname;

  const handleExitComplete = () => {
    if (pendingPath) commitTransition();
    if (typeof window !== 'undefined') window.scrollTo({ top: 0 });
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      <motion.div
        key={displayPath}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="flex flex-col"
      >
        <Outlet />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

function RootLayout() {
  return (
    <>
      <HeadContent />
      <ThemeProvider defaultTheme="light" storageKey="ui-theme">
        <TopoBackground />
        <TransitionProvider>
          <div className="relative z-10">
            <a
              href="#main-content"
              className="focus:bg-sakura-accent focus:text-sakura-bg sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60 focus:rounded-md focus:px-4 focus:py-2 focus:outline-none"
            >
              Skip to Main Content
            </a>
            <Navbar />
            <div className="flex-1" id="main-content" tabIndex={-1}>
              <PageContent />
            </div>
          </div>
        </TransitionProvider>
      </ThemeProvider>
    </>
  );
}

export default RootLayout;
