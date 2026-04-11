import { ArrowSquareOutIcon } from '@phosphor-icons/react';
import AppLink from '@/components/ui/AppLink';
import { motion } from 'motion/react';

interface ElsewhereLink {
  label: string;
  url: string;
  description?: string;
}

const elsewhereLinks: ElsewhereLink[] = [
  {
    label: 'Luciradis',
    url: 'https://luciradis.terystal.dev',
    description: 'Worldbuilding & creative writing'
  }
];

const ElsewhereLinks = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="py-6"
    >
      <p className="label-editorial text-sakura-cobble mb-4">Elsewhere</p>

      <div className="space-y-3">
        {elsewhereLinks.map(link => (
          <motion.div
            key={link.label}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="group cursor-pointer"
          >
            <AppLink
              to={link.url}
              target="_blank"
              className="flex flex-col gap-1"
            >
              <div className="inline-flex items-center gap-2">
                <span className="font-jost text-sakura-text group-hover:text-sakura-accent text-base font-medium tracking-wide transition-colors">
                  {link.label}
                </span>
                <ArrowSquareOutIcon
                  size={14}
                  weight="bold"
                  className="text-sakura-stone group-hover:text-sakura-accent transition-colors"
                />
              </div>
              {link.description && (
                <span className="font-dmmono text-sakura-stone ml-14 text-xs tracking-wide">
                  {link.description}
                </span>
              )}
            </AppLink>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ElsewhereLinks;
