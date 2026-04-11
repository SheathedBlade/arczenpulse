import AppLink from '@/components/ui/AppLink';
import ImageWithSkeleton from '@/components/ui/ImageWithSkeleton';
import type { Project } from '@/data/projects';
import { motion } from 'motion/react';

interface FeaturedProjectCardProps {
  project: Project;
}

const FeaturedProjectCard = ({ project }: FeaturedProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group/card"
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
          <div className="from-sakura-bg/50 absolute inset-0 z-0 bg-linear-to-t via-transparent to-transparent" />
        </div>

        <div className="p-6">
          <div className="mb-3 flex items-baseline justify-between gap-3">
            <h2 className="font-jost text-sakura-text group-hover/card:text-sakura-accent text-2xl font-bold tracking-wide transition-colors md:text-3xl">
              {project.title}
            </h2>
            {project.year && (
              <span className="font-dmmono text-sakura-stone shrink-0 text-xs tracking-widest">
                {project.year}
              </span>
            )}
          </div>
          {project.blurb && (
            <p className="font-zenmaru text-sakura-text/85 text-base leading-relaxed md:text-lg">
              {project.blurb}
            </p>
          )}
        </div>
      </AppLink>
    </motion.article>
  );
};

export default FeaturedProjectCard;
