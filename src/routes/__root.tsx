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
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { AnimatePresence, motion, Variants } from 'motion/react';
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

const routeVariants: Record<string, Variants> = {
  slideUpThenDown: {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: 20 }
  }
};

function PageContent() {
  const location = useLocation();
  const { isTransitioning } = useTransition();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate={isTransitioning ? 'in' : 'out'}
        exit="out"
        variants={routeVariants['slideUpThenDown']}
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
          <div className="bg-sakura-bg scrollbar-thin scrollbar-thumb-sakura-stone/50 scrollbar-track-transparent">
            <Navbar />
            <PageContent />
          </div>
        </TransitionProvider>
      </ThemeProvider>
      <TanStackRouterDevtools />
    </>
  );
}

export default RootLayout;
