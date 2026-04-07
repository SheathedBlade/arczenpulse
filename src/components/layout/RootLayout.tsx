import TopoBackground from '@/components/effects/TopoBackground';
import Navbar from '@/components/layout/Navbar';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import '@/styles/fonts.css';
import '@/styles/globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="ui-theme">
        <TopoBackground />
        <div className="relative z-10 flex min-h-screen flex-col">
          <a
            href="#main-content"
            className="focus:bg-sakura-accent focus:text-sakura-bg sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60 focus:rounded-md focus:px-4 focus:py-2 focus:outline-none"
          >
            Skip to Main Content
          </a>
          <Navbar />
          <div id="main-content" tabIndex={-1}>
            {children}
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default RootLayout;
