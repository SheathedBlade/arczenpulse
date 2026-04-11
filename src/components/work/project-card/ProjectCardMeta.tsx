import type { Project } from '@/data/projects';

interface ProjectCardMetaProps {
  project: Project;
  showTechStack?: boolean;
  titleSize?: 'lg' | 'xl';
  displayType?: 'inline' | 'block';
}

const ProjectCardMeta = ({
  project,
  showTechStack = false,
  titleSize = 'lg',
  displayType = 'block'
}: ProjectCardMetaProps) => {
  const TitleTag = titleSize === 'xl' ? 'h2' : 'h3';
  const titleClass =
    titleSize === 'xl'
      ? 'font-jost text-sakura-text group-hover:text-sakura-accent text-2xl font-bold tracking-wide transition-colors md:text-3xl'
      : 'font-jost text-sakura-text group-hover:text-sakura-accent text-lg font-bold tracking-wide transition-colors';

  return (
    <div className="flex flex-1 flex-col">
      <div className="mb-auto">
        <div className="mb-2 flex items-start justify-between gap-3">
          <TitleTag className={titleClass}>{project.title}</TitleTag>
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

      {showTechStack && project.techStack && project.techStack.length > 0 && (
        <p className="font-dmmono text-sakura-cobble card-text-meta mt-3 text-sm tracking-wide">
          {project.techStack.slice(0, 4).join(' · ')}
        </p>
      )}

      {displayType === 'block' && project.type && (
        <div className="mt-4">
          <span className="bg-sakura-bg font-dmmono text-sakura-cobble card-text-muted border-sakura-stone/30 rounded-sm border px-2 py-0.5 text-xs tracking-widest uppercase">
            {project.type}
          </span>
        </div>
      )}
    </div>
  );
};

export default ProjectCardMeta;
