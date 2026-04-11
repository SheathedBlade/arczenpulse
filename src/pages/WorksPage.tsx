import EditorialDivider from '@/components/ui/EditorialDivider';
import PageContainer from '@/components/ui/PageContainer';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { projects } from '@/data/projects';
import {
  FeaturedProjectCard,
  ProjectMosaicCard,
  ProjectArchiveRail,
  WorksIntro
} from '@/components/work';
import { motion } from 'motion/react';

function WorksPage() {
  useDocumentTitle('Work');

  const heroProject = projects.find(p => p.layout === 'hero');
  const archiveProjects = projects.filter(p => !p.layout);

  const featuredProject = heroProject ?? projects[0];
  const indexProjects = projects
    .filter(p => p.id !== featuredProject?.id && p.layout !== 'hero')
    .slice(0, 3);

  return (
    <PageContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-6xl px-6 py-16"
      >
        <WorksIntro />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mb-16"
        >
          <EditorialDivider weight="light" />
        </motion.div>

        {featuredProject && (
          <section className="mb-16">
            <FeaturedProjectCard project={featuredProject} index={0} />
          </section>
        )}

        {indexProjects.length > 0 && (
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="mb-8 flex items-center gap-4"
            >
              <h2 className="font-jost text-sakura-text text-xl font-bold tracking-wide">
                Project Index
              </h2>
              <div className="bg-sakura-stone/20 h-px flex-1" />
            </motion.div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {indexProjects.map((project, i) => (
                <ProjectMosaicCard
                  key={project.id}
                  project={project}
                  index={i + 1}
                />
              ))}
            </div>
          </section>
        )}

        {archiveProjects.length > 0 && (
          <ProjectArchiveRail projects={archiveProjects} />
        )}
      </motion.div>
    </PageContainer>
  );
}

export default WorksPage;
