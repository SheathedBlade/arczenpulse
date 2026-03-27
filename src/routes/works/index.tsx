import PageContainer from '@/components/ui/PageContainer';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/works/')({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <PageContainer>
      <p>Hello World</p>
    </PageContainer>
  );
}
