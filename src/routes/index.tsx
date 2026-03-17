import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <div className="ease h-auto transition-colors duration-300">Hello /!</div>
  );
}
