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
      className="space-y-6"
    >
      {project.year && (
        <div>
          <p className="label-editorial text-sakura-cobble mb-1 text-xs tracking-widest uppercase">
            Year
          </p>
          <p className="font-dmmono text-sakura-text text-sm">{project.year}</p>
        </div>
      )}

      {project.type && (
        <div>
          <p className="label-editorial text-sakura-cobble mb-1 text-xs tracking-widest uppercase">
            Type
          </p>
          <p className="font-dmmono text-sakura-text text-sm capitalize">
            {project.type}
          </p>
        </div>
      )}

      {project.status && (
        <div>
          <p className="label-editorial text-sakura-cobble mb-1 text-xs tracking-widest uppercase">
            Status
          </p>
          <p className="font-dmmono text-sakura-text text-sm capitalize">
            {project.status}
          </p>
        </div>
      )}

      {project.techStack && project.techStack.length > 0 && (
        <div>
          <p className="label-editorial text-sakura-cobble mb-2 text-xs tracking-widest uppercase">
            Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map(tech => (
              <span
                key={tech}
                className="bg-sakura-surface font-dmmono text-sakura-cobble rounded-sm px-2 py-1 text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {project.notes && project.notes.length > 0 && (
        <div className="border-sakura-stone/20 space-y-3 border-t pt-5">
          {project.notes.map((note, i) => (
            <div key={i} className="border-sakura-accent/40 border-l-2 pl-3">
              {note.label && (
                <p className="label-editorial text-sakura-accent/70 mb-1 text-xs tracking-widest uppercase">
                  {note.label}
                </p>
              )}
              <p className="font-dmmono text-sakura-stone text-xs leading-relaxed tracking-wide">
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
