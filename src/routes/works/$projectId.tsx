import PageTransition from '@/components/effects/PageTransition';
import PageContainer from '@/components/ui/PageContainer';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/works/$projectId')({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <PageTransition>
      <PageContainer>
        <p>Hello World</p>
      </PageContainer>
    </PageTransition>
  );
}
