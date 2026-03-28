import {
  TransitionProvider,
  useTransition
} from '@/components/ui/TransitionProvider';
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
    meta: [{ title: 'ARC Studio' }]
  }),
  component: RootLayout
});

const variants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: 20 }
};

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
        variants={variants}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
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
            <Navbar />
            <PageContent />
          </div>
        </TransitionProvider>
      </ThemeProvider>
    </>
  );
}

export default RootLayout;
