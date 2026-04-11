import AppLink from '@/components/ui/AppLink';
import { homeHeroLinks } from '@/data/homeHeroLinks';
import { motion } from 'motion/react';

interface HomeHeroLinksProps {
  className?: string;
}

const HomeHeroLinks = ({ className }: HomeHeroLinksProps) => {
  return (
    <nav aria-label="Home navigation" className={className}>
      <p className="label-editorial text-sakura-cobble mb-3">Navigation</p>
      <ul className="flex flex-col gap-3">
        {homeHeroLinks.map((link, index) => (
          <li key={link.label}>
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.35 + index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="flex items-center gap-x-3"
            >
              <span className="index-mono text-sakura-accent w-8 leading-none">
                {String(index + 1).padStart(2, '0')}
              </span>
              <AppLink
                to={link.to}
                className="group inline-flex items-baseline gap-5"
              >
                <span className="font-zenmaru text-sakura-text group-hover:text-sakura-accent group-focus-visible:text-sakura-accent text-xl font-medium tracking-wide transition-colors">
                  {link.label}
                </span>
                <span className="meta-mono text-sakura-cobble translate-y-1.5 tracking-wide opacity-0 transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  {link.description}
                </span>
              </AppLink>
            </motion.div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HomeHeroLinks;
