import AppLink from '@/components/ui/AppLink';
import type { Project } from '@/data/projects';
import { ArrowLeftIcon, ArrowRightIcon } from '@phosphor-icons/react';
import { motion } from 'motion/react';

interface ProjectNavProps {
  previous?: Project;
  next?: Project;
}

const ProjectNav = ({ previous, next }: ProjectNavProps) => {
  if (!previous && !next) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="grid grid-cols-1 gap-3 sm:grid-cols-2"
    >
      {previous ? (
        <AppLink
          to={`/works/${previous.id}`}
          className="group card-interactive flex items-center gap-3 rounded-md p-4"
        >
          <span className="text-sakura-stone group-hover:text-sakura-accent transition-colors">
            <ArrowLeftIcon size={18} weight="bold" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-dmmono text-sakura-stone text-xs tracking-widest uppercase">
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

      {next ? (
        <AppLink
          to={`/works/${next.id}`}
          className="group card-interactive flex items-center justify-end gap-3 rounded-md p-4 text-right"
        >
          <div className="min-w-0 flex-1">
            <p className="font-dmmono text-sakura-stone text-xs tracking-widest uppercase">
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
      ) : (
        <div />
      )}
    </motion.div>
  );
};

export default ProjectNav;
