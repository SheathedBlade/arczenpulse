import { InfoIcon } from '@phosphor-icons/react';
import { useEffect } from 'react';
import AppLink from '../ui/AppLink';
import PageContainer from '../ui/PageContainer';

const NotFound = () => {
  useEffect(() => {
    document.title = 'Not Found · ARC Studio';
  }, []);

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
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <AppLink
          to="/"
          className="bg-sakura-accent text-sakura-bg font-dmmono hover:bg-sakura-bloom rounded-md px-8 py-3 transition-colors"
        >
          Return Home
        </AppLink>
      </div>
    </PageContainer>
  );
};

export default NotFound;
