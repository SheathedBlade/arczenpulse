import AppLink from '@/components/ui/AppLink';
import { motion } from 'motion/react';
import type { Project } from '@/data/projects';

interface ProjectCardBaseProps {
  project: Project;
  children: React.ReactNode;
  className?: string;
  animationDelay?: number;
}

const ProjectCardBase = ({
  project,
  children,
  className = '',
  animationDelay = 0
}: ProjectCardBaseProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.4,
        delay: animationDelay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={`group ${className}`}
    >
      <AppLink
        to={`/works/${project.id}`}
        className="card-interactive flex h-full flex-col overflow-hidden rounded-md"
      >
        {children}
      </AppLink>
    </motion.article>
  );
};

export default ProjectCardBase;
