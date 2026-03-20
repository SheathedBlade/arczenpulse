import { createFileRoute } from '@tanstack/react-router';
import Scene from '../components/canvas/Scene';
import FeaturedProjects from '../components/layout/FeaturedProjects';
import Hero from '../components/layout/Hero';
import PageContainer from '../components/ui/PageContainer';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [{ title: 'ARC Studio · Homepage' }]
  }),
  component: RouteComponent
});

function RouteComponent() {
  return (
    <>
      <PageContainer className="ease mt-12 flex flex-col transition-colors duration-300 lg:flex-row lg:justify-center xl:-mt-12">
        <div className="relative hidden min-h-100 xl:inline xl:min-h-svh xl:w-7/12">
          <Scene />
        </div>
        <div className="flex w-auto flex-col items-center justify-center px-12 xl:w-5/12 xl:px-16">
          <Hero />
        </div>
      </PageContainer>
      <FeaturedProjects />
    </>
  );
}
