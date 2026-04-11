import AppLink from '@/components/ui/AppLink';
import ImageWithSkeleton from '@/components/ui/ImageWithSkeleton';
import type { Project } from '@/data/projects';
import { ArrowSquareOutIcon } from '@phosphor-icons/react';
import { motion } from 'motion/react';

interface FeaturedProjectCardProps {
  project: Project;
  index: number;
}

const FeaturedProjectCard = ({ project, index }: FeaturedProjectCardProps) => {
  const indexLabel = String(index + 1).padStart(2, '0');

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <AppLink
        to={`/works/${project.id}`}
        className="card-interactive flex h-full flex-col overflow-hidden rounded-md p-6"
      >
        <div className="relative -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-md">
          <div className="aspect-16/10 overflow-hidden">
            <ImageWithSkeleton
              src={project.image}
              alt={project.imageAlt}
              imgClassName="transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              className="h-full"
            />
            <div className="from-sakura-bg/50 absolute inset-0 bg-linear-to-t via-transparent to-transparent" />
          </div>

          <div className="absolute top-4 left-4">
            <span className="bg-sakura-bg/90 font-dmmono text-sakura-accent rounded-sm px-1.5 py-0.5 text-xs tracking-widest">
              {indexLabel}
            </span>
          </div>

          {project.type && (
            <div className="absolute top-4 right-4">
              <span className="bg-sakura-bg/90 font-dmmono text-sakura-cobble card-text-muted rounded-sm px-2 py-1 text-xs tracking-widest uppercase">
                {project.type}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-1 items-start justify-between gap-6">
          <div className="flex-1">
            <h2 className="font-jost text-sakura-text group-hover:text-sakura-accent text-2xl font-bold tracking-wide transition-colors md:text-3xl">
              {project.title}
            </h2>
            {project.blurb && (
              <p className="font-zenmaru text-sakura-text/70 mt-2 text-base leading-relaxed md:text-lg">
                {project.blurb}
              </p>
            )}
            {project.techStack && project.techStack.length > 0 && (
              <p className="font-dmmono text-sakura-cobble card-text-meta mt-3 text-sm tracking-wide">
                {project.techStack.slice(0, 4).join(' · ')}
              </p>
            )}
          </div>

          <div className="flex flex-col items-end gap-3">
            {project.year && (
              <span className="font-dmmono text-sakura-cobble card-text-meta text-xs tracking-widest uppercase">
                {project.year}
              </span>
            )}
            {project.liveUrl && (
              <span className="text-sakura-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <ArrowSquareOutIcon size={20} weight="bold" />
              </span>
            )}
          </div>
        </div>
      </AppLink>
    </motion.article>
  );
};

export default FeaturedProjectCard;
