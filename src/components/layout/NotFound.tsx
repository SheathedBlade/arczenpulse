import { InfoIcon } from '@phosphor-icons/react';
import AppLink from '../ui/AppLink';
import PageContainer from '../ui/PageContainer';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

const NotFound = () => {
  useDocumentTitle('Not Found');

  return (
    <PageContainer>
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <InfoIcon
          size={64}
          weight="duotone"
          className="text-sakura-accent mb-6"
        />
        <h1 className="font-jost mb-4 text-4xl font-bold">404</h1>
        <p className="font-zenmaru text-sakura-text/70 mb-8 max-w-md">
          This page doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col items-center gap-4">
          <AppLink
            to="/"
            className="bg-sakura-accent text-sakura-bg font-dmmono hover:bg-sakura-bloom rounded-md px-8 py-3 transition-colors"
          >
            Return Home
          </AppLink>
          <nav className="flex gap-6" aria-label="Section navigation">
            <AppLink
              to="/works"
              className="font-dmmono text-sakura-cobble hover:text-sakura-accent text-xs tracking-widest uppercase transition-colors"
            >
              Work
            </AppLink>
            <AppLink
              to="/experience"
              className="font-dmmono text-sakura-cobble hover:text-sakura-accent text-xs tracking-widest uppercase transition-colors"
            >
              Experience
            </AppLink>
            <AppLink
              to="/about"
              className="font-dmmono text-sakura-cobble hover:text-sakura-accent text-xs tracking-widest uppercase transition-colors"
            >
              About
            </AppLink>
          </nav>
        </div>
      </div>
    </PageContainer>
  );
};

export default NotFound;
