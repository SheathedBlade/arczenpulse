import EditorialDivider from '@/components/ui/EditorialDivider';
import PageContainer from '@/components/ui/PageContainer';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { projects } from '@/data/projects';
import {
  FeaturedProjectCard,
  ProjectMosaicCard,
  WorksIntro
} from '@/components/work';
import { motion } from 'motion/react';

function WorksPage() {
  useDocumentTitle('Work');

  const heroProject = projects.find(p => p.layout === 'hero');
  const featuredProject = heroProject ?? projects[0];
  const indexProjects = projects.filter(p => p.id !== featuredProject?.id);

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
            <FeaturedProjectCard project={featuredProject} />
          </section>
        )}

        {indexProjects.length > 0 && (
          <section>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="mb-12"
            >
              <div className="mb-10 flex items-baseline justify-between">
                <h2 className="font-jost text-sakura-text text-2xl font-bold tracking-tight md:text-3xl">
                  More work
                </h2>
                <span className="font-dmmono text-sakura-stone text-xs tracking-widest uppercase">
                  {indexProjects.length}
                </span>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              {indexProjects.map(project => (
                <ProjectMosaicCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}
      </motion.div>
    </PageContainer>
  );
}

export default WorksPage;
