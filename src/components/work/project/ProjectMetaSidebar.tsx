import { motion } from 'motion/react';
import type { Project } from '@/data/projects';

interface ProjectMetaSidebarProps {
  project: Project;
}

const ProjectMetaSidebar = ({ project }: ProjectMetaSidebarProps) => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="space-y-5"
      aria-label="Project details"
    >
      {project.status && (
        <div>
          <p className="font-dmmono text-sakura-cobble/80 mb-1 text-xs tracking-widest uppercase">
            Status
          </p>
          <p className="font-dmmono text-sakura-stone text-sm tracking-wide">
            {project.status}
          </p>
        </div>
      )}

      {project.techStack && project.techStack.length > 0 && (
        <div>
          <p className="font-dmmono text-sakura-cobble/80 mb-2 text-xs tracking-widest uppercase">
            Built with
          </p>
          <div className="flex flex-col gap-1">
            {project.techStack.map(tech => (
              <span
                key={tech}
                className="font-dmmono text-sakura-stone/90 text-sm leading-snug"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {project.notes && project.notes.length > 0 && (
        <div className="border-sakura-stone/15 border-t pt-5">
          {project.notes.map((note, i) => (
            <div key={i} className="mb-3 last:mb-0">
              {note.label && (
                <p className="font-dmmono text-sakura-accent/70 mb-1 text-xs tracking-widest uppercase">
                  {note.label}
                </p>
              )}
              <p className="font-zenmaru text-sakura-stone/90 text-sm leading-relaxed">
                {note.text}
              </p>
            </div>
          ))}
        </div>
      )}
    </motion.aside>
  );
};

export default ProjectMetaSidebar;
