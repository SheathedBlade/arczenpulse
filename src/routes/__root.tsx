import { createRootRoute, HeadContent, Outlet } from '@tanstack/react-router';
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
  return (
    <>
      <HeadContent />
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        <div className="bg-sakura-bg">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default RootLayout;
