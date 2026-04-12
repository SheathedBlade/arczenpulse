import AppLink from '@/components/ui/AppLink';
import type { Project } from '@/data/projects';
import { ArrowLeftIcon, ArrowRightIcon } from '@phosphor-icons/react';

interface ProjectNavProps {
  previous?: Project;
  next?: Project;
}

const ProjectNav = ({ previous, next }: ProjectNavProps) => {
  if (!previous && !next) return null;

  return (
    <nav
      aria-label="Project navigation"
      className="flex items-center justify-between gap-6"
    >
      {previous ? (
        <AppLink
          to={`/works/${previous.id}`}
          className="group flex items-center gap-4 py-3 pr-6"
        >
          <span className="text-sakura-stone group-hover:text-sakura-accent transition-colors">
            <ArrowLeftIcon size={18} weight="bold" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="font-dmmono text-sakura-cobble mb-0.5 text-xs tracking-widest uppercase">
              Previous
            </p>
            <p className="font-jost text-sakura-text group-hover:text-sakura-accent truncate text-base font-medium tracking-wide transition-colors">
              {previous.title}
            </p>
          </div>
        </AppLink>
      ) : (
        <div />
      )}

      {next && (
        <AppLink
          to={`/works/${next.id}`}
          className="group flex items-center gap-4 py-3 pl-6"
        >
          <div className="min-w-0 text-right">
            <p className="font-dmmono text-sakura-cobble mb-0.5 text-xs tracking-widest uppercase">
              Next
            </p>
            <p className="font-jost text-sakura-text group-hover:text-sakura-accent truncate text-base font-medium tracking-wide transition-colors">
              {next.title}
            </p>
          </div>
          <span className="text-sakura-stone group-hover:text-sakura-accent transition-colors">
            <ArrowRightIcon size={18} weight="bold" aria-hidden="true" />
          </span>
        </AppLink>
      )}
    </nav>
  );
};

export default ProjectNav;
