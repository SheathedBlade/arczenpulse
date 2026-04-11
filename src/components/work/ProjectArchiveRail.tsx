import { ArrowRightIcon } from '@phosphor-icons/react';
import AppLink from '@/components/ui/AppLink';
import { motion } from 'motion/react';
import type { Project } from '@/data/projects';

interface ProjectArchiveRailProps {
  projects: Project[];
}

const ProjectArchiveRail = ({ projects }: ProjectArchiveRailProps) => {
  return (
    <section className="mt-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-8 flex items-center gap-6"
      >
        <h2 className="font-jost text-sakura-text text-2xl font-bold tracking-wide">
          Earlier Work
        </h2>
        <div className="bg-sakura-stone/30 h-px flex-1" />
      </motion.div>

      <div className="space-y-1">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, delay: i * 0.06, ease: 'easeOut' }}
          >
            <AppLink
              to={`/works/${project.id}`}
              className="group hover:bg-sakura-card/50 flex items-center justify-between gap-4 rounded-sm py-3 pr-4 pl-2 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="font-dmmono text-sakura-stone w-8 text-xs tracking-widest">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-jost text-sakura-text group-hover:text-sakura-accent text-base font-medium tracking-wide transition-colors">
                  {project.title}
                </span>
              </div>
              <div className="flex items-center gap-3">
                {project.type && (
                  <span className="font-dmmono text-sakura-stone text-xs tracking-widest uppercase">
                    {project.type}
                  </span>
                )}
                {project.year && (
                  <span className="font-dmmono text-sakura-stone text-xs tracking-widest">
                    {project.year}
                  </span>
                )}
                <span className="text-sakura-cobble opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
                  <ArrowRightIcon size={16} weight="bold" />
                </span>
              </div>
            </AppLink>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectArchiveRail;
