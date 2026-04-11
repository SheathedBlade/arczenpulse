import AppLink from '@/components/ui/AppLink';
import type { Project } from '@/data/projects';
import {
  GithubLogoIcon,
  ArrowSquareOutIcon,
  ArrowLeftIcon
} from '@phosphor-icons/react';
import { motion } from 'motion/react';

interface ProjectOutcomesProps {
  project: Project;
}

const ProjectOutcomes = ({ project }: ProjectOutcomesProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="flex flex-wrap gap-3"
    >
      {project.githubUrl && (
        <AppLink
          to={project.githubUrl}
          className="border-sakura-stone/50 bg-sakura-card font-dmmono text-sakura-text hover:bg-sakura-surface inline-flex items-center gap-2 rounded-md border px-6 py-3 transition-colors"
        >
          <GithubLogoIcon weight="duotone" size={20} />
          <span>Source</span>
        </AppLink>
      )}
      {project.liveUrl && (
        <AppLink
          to={project.liveUrl}
          className="bg-sakura-accent font-dmmono text-sakura-bg hover:bg-sakura-bloom inline-flex items-center gap-2 rounded-md px-6 py-3 transition-colors"
        >
          <span>View Live</span>
          <ArrowSquareOutIcon size={18} weight="bold" aria-hidden="true" />
        </AppLink>
      )}
      <AppLink
        to="/works"
        className="border-sakura-stone/50 bg-sakura-card font-dmmono text-sakura-text hover:bg-sakura-surface inline-flex items-center gap-2 rounded-md border px-6 py-3 transition-colors"
      >
        <ArrowLeftIcon size={18} weight="bold" aria-hidden="true" />
        <span>All Work</span>
      </AppLink>
    </motion.div>
  );
};

export default ProjectOutcomes;
