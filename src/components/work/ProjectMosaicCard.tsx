import AppLink from '@/components/ui/AppLink';
import ImageWithSkeleton from '@/components/ui/ImageWithSkeleton';
import type { Project } from '@/data/projects';
import { ArrowSquareOutIcon } from '@phosphor-icons/react';
import { motion } from 'motion/react';

interface ProjectMosaicCardProps {
  project: Project;
  index: number;
}

const ProjectMosaicCard = ({ project, index }: ProjectMosaicCardProps) => {
  const indexLabel = String(index + 1).padStart(2, '0');

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group"
    >
      <AppLink
        to={`/works/${project.id}`}
        className="card-interactive flex h-full flex-col overflow-hidden rounded-md p-5"
      >
        <div className="relative -mx-5 -mt-5 mb-5 overflow-hidden rounded-t-md">
          <div className="aspect-video overflow-hidden">
            <ImageWithSkeleton
              src={project.image}
              alt={project.imageAlt}
              imgClassName="transition-transform duration-400 ease-out group-hover:scale-[1.03]"
              className="h-full"
            />
          </div>

          <div className="absolute top-3 left-3">
            <span className="bg-sakura-bg/90 font-dmmono text-sakura-accent rounded-sm px-1.5 py-0.5 text-xs tracking-widest">
              {indexLabel}
            </span>
          </div>

          {project.liveUrl && (
            <div className="absolute right-3 bottom-3">
              <span className="text-sakura-accent">
                <ArrowSquareOutIcon size={18} weight="bold" />
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col">
          <div className="mb-auto">
            <div className="mb-2 flex items-start justify-between gap-3">
              <h3 className="font-jost text-sakura-text group-hover:text-sakura-accent text-lg font-bold tracking-wide transition-colors">
                {project.title}
              </h3>
              {project.year && (
                <span className="font-dmmono text-sakura-cobble shrink-0 text-xs tracking-widest uppercase">
                  {project.year}
                </span>
              )}
            </div>
            {project.blurb && (
              <p className="font-zenmaru text-sakura-text/70 line-clamp-2 text-sm leading-relaxed">
                {project.blurb}
              </p>
            )}
          </div>

          {project.type && (
            <div className="mt-4">
              <span className="bg-sakura-bg font-dmmono text-sakura-cobble card-text-muted border-sakura-stone/30 rounded-sm border px-2 py-0.5 text-xs tracking-widest uppercase">
                {project.type}
              </span>
            </div>
          )}
        </div>
      </AppLink>
    </motion.article>
  );
};

export default ProjectMosaicCard;
