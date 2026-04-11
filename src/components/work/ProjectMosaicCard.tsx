import AppLink from '@/components/ui/AppLink';
import ImageWithSkeleton from '@/components/ui/ImageWithSkeleton';
import type { Project } from '@/data/projects';
import { motion } from 'motion/react';

interface ProjectMosaicCardProps {
  project: Project;
}

const ProjectMosaicCard = ({ project }: ProjectMosaicCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group"
    >
      <AppLink
        to={`/works/${project.id}`}
        className="group/card card-interactive block overflow-hidden rounded-md"
      >
        <div className="relative aspect-video overflow-hidden">
          <ImageWithSkeleton
            src={project.image}
            alt={project.imageAlt}
            imgClassName="transition-transform duration-500 ease-out group-hover/card:scale-[1.04]"
            className="h-full"
          />
        </div>
        <div className="p-4">
          <div className="mb-2 flex items-baseline justify-between gap-3">
            <h3 className="font-jost text-sakura-text group-hover/card:text-sakura-accent text-lg font-medium tracking-wide transition-colors">
              {project.title}
            </h3>
            {project.year && (
              <span className="font-dmmono text-sakura-stone shrink-0 text-xs tracking-widest">
                {project.year}
              </span>
            )}
          </div>
          {project.blurb && (
            <p className="font-zenmaru text-sakura-text/85 line-clamp-3 text-sm leading-relaxed">
              {project.blurb}
            </p>
          )}
        </div>
      </AppLink>
    </motion.article>
  );
};

export default ProjectMosaicCard;
