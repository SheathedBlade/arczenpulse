import { CheckCircleIcon } from '@phosphor-icons/react';
import { motion } from 'motion/react';

interface ProjectProcessProps {
  processSteps?: string[];
  outcome?: string;
}

const ProjectProcess = ({ processSteps, outcome }: ProjectProcessProps) => {
  if (!processSteps?.length && !outcome) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="space-y-8"
    >
      {processSteps && processSteps.length > 0 && (
        <div>
          <p className="label-editorial text-sakura-cobble mb-4 text-xs tracking-widest uppercase">
            Process
          </p>
          <div className="space-y-3">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.06,
                  ease: 'easeOut'
                }}
                className="group flex items-start gap-3"
              >
                <CheckCircleIcon
                  size={16}
                  weight="fill"
                  className="text-sakura-accent mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <p className="font-zenmaru text-sakura-text/80 text-base leading-relaxed">
                  {step}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {outcome && (
        <div className="border-sakura-accent/50 rounded-md border-l-4 pl-5">
          <p className="label-editorial text-sakura-cobble mb-2 text-xs tracking-widest uppercase">
            Outcome
          </p>
          <p className="font-zenmaru text-sakura-text/80 text-base leading-relaxed">
            {outcome}
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectProcess;
