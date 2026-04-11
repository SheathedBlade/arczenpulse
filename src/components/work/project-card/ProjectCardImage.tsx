import ImageWithSkeleton from '@/components/ui/ImageWithSkeleton';
import { ArrowSquareOutIcon } from '@phosphor-icons/react';
import type { Project } from '@/data/projects';

interface ProjectCardImageProps {
  project: Project;
  index: number;
  aspectRatio?: '16/10' | 'video';
  padding?: string;
  imageClassName?: string;
}

const ProjectCardImage = ({
  project,
  index,
  aspectRatio = 'video',
  padding = 'p-5',
  imageClassName = ''
}: ProjectCardImageProps) => {
  const indexLabel = String(index).padStart(2, '0');
  const aspectClass = aspectRatio === '16/10' ? 'aspect-16/10' : 'aspect-video';
  const gradientOverlay =
    aspectRatio === '16/10' ? (
      <div className="from-sakura-bg/50 absolute inset-0 bg-linear-to-t via-transparent to-transparent" />
    ) : null;

  return (
    <div
      className={`relative -mx-5 -mt-5 mb-5 overflow-hidden rounded-t-md ${padding}`}
    >
      <div className={`overflow-hidden ${aspectClass}`}>
        <ImageWithSkeleton
          src={project.image}
          alt={project.imageAlt}
          imgClassName={`transition-transform duration-400 ease-out group-hover:scale-[1.03] ${imageClassName}`}
          className="h-full"
        />
      </div>

      {gradientOverlay}

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
  );
};

export default ProjectCardImage;
