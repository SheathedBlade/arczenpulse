import { createFileRoute } from '@tanstack/react-router';
import PageContainer from '../components/layout/PageContainer';

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [{ title: 'Contact · ARC Studio' }]
  }),
  component: RouteComponent
});

function RouteComponent() {
  return <PageContainer>Hello /contact!</PageContainer>;
}
