import type { Project } from '@/data/projects';
import { ArrowLeftIcon } from '@phosphor-icons/react';
import ImageWithSkeleton from '@/components/ui/ImageWithSkeleton';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface ProjectHeroProps {
  project: Project;
}

const ProjectHero = ({ project }: ProjectHeroProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="relative"
    >
      <div className="mb-6">
        <Link
          to="/works"
          className="font-dmmono text-sakura-cobble hover:text-sakura-accent inline-flex items-center gap-2 text-xs transition-colors"
        >
          <ArrowLeftIcon size={14} weight="bold" aria-hidden="true" />
          All Work
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05, ease: 'easeOut' }}
        className="mb-8"
      >
        <div className="mb-3 flex flex-wrap items-center gap-3">
          {project.accentWord && (
            <span className="font-dmmono text-sakura-accent text-xs tracking-widest uppercase">
              {project.accentWord}
            </span>
          )}
          {project.type && (
            <span className="bg-sakura-surface border-sakura-stone/30 font-dmmono text-sakura-cobble rounded-sm border px-2 py-0.5 text-xs tracking-widest uppercase">
              {project.type}
            </span>
          )}
          {project.status && (
            <span className="bg-sakura-surface border-sakura-stone/30 font-dmmono text-sakura-stone rounded-sm border px-2 py-0.5 text-xs tracking-widest uppercase">
              {project.status}
            </span>
          )}
        </div>

        <h1 className="font-jost text-sakura-text text-4xl font-bold tracking-wide md:text-5xl lg:text-6xl">
          {project.title}
        </h1>

        {project.blurb && (
          <p className="font-zenmaru text-sakura-text/70 mt-3 text-lg leading-relaxed md:text-xl lg:text-2xl">
            {project.blurb}
          </p>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.965 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-md"
      >
        <div className="relative aspect-video overflow-hidden">
          <ImageWithSkeleton
            src={project.image}
            alt={project.imageAlt}
            priority
            imgClassName="animate-ken-burns"
            className="h-full"
          />
          <div className="from-sakura-bg/40 absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent" />
          <div className="from-sakura-bg/20 absolute inset-0 z-10 bg-linear-to-b via-transparent to-transparent" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectHero;
