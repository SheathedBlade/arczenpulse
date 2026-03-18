import { createFileRoute } from '@tanstack/react-router';
import Scene from '../components/canvas/Scene';
import PageContainer from '../components/layout/PageContainer';
import Hero from '../components/ui/Hero';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [{ title: 'ARC Studio · Homepage' }]
  }),
  component: RouteComponent
});

function RouteComponent() {
  return (
    <PageContainer className="ease flex flex-col transition-colors duration-300 md:flex-row">
      <div className="relative min-h-100 md:min-h-svh md:w-7/12">
        <Scene />
      </div>
      <div className="flex flex-col justify-center gap-6 px-12 py-16 md:w-5/12 md:px-16">
        <Hero />
      </div>
    </PageContainer>
  );
}
