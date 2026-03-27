import PageContainer from '@/components/ui/PageContainer';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [{ title: 'Contact · ARC Studio' }]
  }),
  component: RouteComponent
});

function RouteComponent() {
  return <PageContainer>Hello /contact!</PageContainer>;
}
