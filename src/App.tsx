import Footer from '@/components/layout/Footer';
import NotFound from '@/components/layout/NotFound';
import RootLayout from '@/components/layout/RootLayout';
import { pageVariants } from '@/data/motionVariants';
import AboutPage from '@/pages/AboutPage';
import BehindTheCurtainPage from '@/pages/BehindTheCurtainPage';
import HomePage from '@/pages/HomePage';
import WorksPage from '@/pages/WorksPage';
import WorksProjectPage from '@/pages/WorksProjectPage';
import { AnimatePresence, motion } from 'motion/react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}

function AnimatedRoutes() {
  const location = useLocation();

  const handleExitComplete = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0 });
      document.getElementById('main-content')?.focus();
    }
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="flex min-h-screen flex-col"
      >
        <div className="flex-1">
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/works" element={<WorksPage />} />
            <Route path="/works/:projectId" element={<WorksProjectPage />} />
            <Route
              path="/behind-the-curtain"
              element={<BehindTheCurtainPage />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <AnimatedRoutes />
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
