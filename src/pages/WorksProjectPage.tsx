import { useParams } from 'react-router-dom';
import PageContainer from '@/components/ui/PageContainer';
import EditorialDivider from '@/components/ui/EditorialDivider';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { projects } from '@/data/projects';
import {
  ProjectHero,
  ProjectMetaSidebar,
  ProjectNarrative,
  ProjectProcess,
  ProjectOutcomes,
  ProjectNav
} from '@/components/work/project';
import NotFound from '@/components/layout/NotFound';

function WorksProjectPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find(p => p.id === projectId);

  useDocumentTitle(project?.title ?? 'Not Found');

  if (!project) {
    return <NotFound />;
  }

  const currentIndex = projects.findIndex(p => p.id === projectId);
  const previous = currentIndex > 0 ? projects[currentIndex - 1] : undefined;
  const next =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : undefined;

  return (
    <PageContainer>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <ProjectHero project={project} />

        <div className="mt-12">
          <EditorialDivider weight="light" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_280px] lg:gap-16">
          <div>
            <ProjectNarrative project={project} />
          </div>
          <div className="lg:sticky lg:top-8 lg:self-start">
            <ProjectMetaSidebar project={project} />
          </div>
        </div>

        {project.processSteps?.length || project.outcome ? (
          <>
            <div className="mt-12">
              <EditorialDivider weight="light" />
            </div>
            <div className="mt-12">
              <ProjectProcess
                processSteps={project.processSteps}
                outcome={project.outcome}
              />
            </div>
          </>
        ) : null}

        <div className="mt-12">
          <EditorialDivider weight="light" />
        </div>

        <div className="mt-12">
          <ProjectOutcomes project={project} />
        </div>

        <div className="mt-12">
          <EditorialDivider weight="light" />
        </div>

        <div className="mt-8">
          <ProjectNav previous={previous} next={next} />
        </div>
      </div>
    </PageContainer>
  );
}

export default WorksProjectPage;
