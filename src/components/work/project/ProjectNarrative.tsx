import EditorialPullQuote from '@/components/about/EditorialPullQuote';
import type { Project } from '@/data/projects';
import { motion } from 'motion/react';

interface ProjectNarrativeProps {
  project: Project;
}

const ProjectNarrative = ({ project }: ProjectNarrativeProps) => {
  const body = project.longDescription;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="space-y-6"
    >
      {project.pullQuote && <EditorialPullQuote quote={project.pullQuote} />}

      <div className="space-y-4">
        {body.map((para, i) => (
          <p
            key={i}
            className="font-zenmaru text-sakura-text/90 text-lg leading-relaxed"
          >
            {para.trim()}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectNarrative;
