import AppLink from '@/components/ui/AppLink';
import PageContainer from '@/components/ui/PageContainer';
import { childrenVariants, containerVariants } from '@/data/motionVariants';
import { Project, projects } from '@/data/projects';
import {
  ArrowLeftIcon,
  GithubLogoIcon,
  TagChevronIcon
} from '@phosphor-icons/react';
import {
  createFileRoute,
  notFound,
  useLoaderData
} from '@tanstack/react-router';
import { motion } from 'motion/react';

export const Route = createFileRoute('/works/$projectId')({
  loader: async ({ params: { projectId } }) => {
    const project = projects.find(p => p.id === projectId);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const { project } = loaderData as { project: Project };
    return { meta: [{ title: `${project.title} · ARC Studio` }] };
  },
  component: RouteComponent
});

function RouteComponent() {
  const { project } = useLoaderData({ from: '/works/$projectId' });

  return (
    <PageContainer>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mx-auto max-w-4xl px-6 py-16"
      >
        <motion.nav
          variants={childrenVariants}
          className="mb-8 flex items-center gap-2 text-sm"
        >
          <AppLink
            to="/works"
            className="font-dmmono text-sakura-accent hover:underline"
          >
            Works
          </AppLink>
          <TagChevronIcon
            size={14}
            weight="fill"
            className="text-sakura-stone"
          />
          <span className="font-dmmono text-sakura-text">{project.title}</span>
        </motion.nav>

        <motion.div variants={childrenVariants}>
          <img
            src={project.image}
            alt={project.title}
            className="mb-8 h-auto w-full rounded-lg object-cover"
          />
        </motion.div>

        <motion.h1
          variants={childrenVariants}
          className="font-jost mb-4 text-4xl font-bold"
        >
          {project.title}
        </motion.h1>

        {project.techStack && (
          <motion.div variants={childrenVariants} className="mb-6">
            <p className="font-dmmono text-sakura-cobble">
              {project.techStack.join(' · ')}
            </p>
          </motion.div>
        )}

        <motion.div variants={childrenVariants}>
          <p className="font-zenmaru text-sakura-text/80 mb-8 text-lg leading-relaxed whitespace-pre-line">
            {project.longDescription}
          </p>
        </motion.div>

        <motion.div
          variants={childrenVariants}
          className="flex flex-wrap gap-4"
        >
          {project.githubUrl && (
            <AppLink
              to={project.githubUrl}
              className="border-sakura-stone/50 bg-sakura-card font-dmmono text-sakura-text hover:bg-sakura-surface inline-flex items-center gap-2 rounded-md border px-6 py-3 transition-colors"
            >
              <GithubLogoIcon weight="duotone" size={24} />
              <span>View on GitHub</span>
            </AppLink>
          )}
          {project.liveUrl && (
            <AppLink
              to={project.liveUrl}
              className="bg-sakura-accent font-dmmono text-sakura-bg hover:bg-sakura-bloom inline-flex items-center gap-2 rounded-md px-6 py-3 transition-colors"
            >
              <span>Visit Live Site</span>
            </AppLink>
          )}
          <AppLink
            to="/works"
            className="border-sakura-stone/50 bg-sakura-card font-dmmono text-sakura-text hover:bg-sakura-surface inline-flex items-center gap-2 rounded-md border px-6 py-3 transition-colors"
          >
            <ArrowLeftIcon size={20} weight="bold" />
            <span>Back to Works</span>
          </AppLink>
        </motion.div>
      </motion.div>
    </PageContainer>
  );
}
