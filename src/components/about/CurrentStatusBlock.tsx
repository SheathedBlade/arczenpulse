import { motion } from 'motion/react';

interface CurrentStatusBlockProps {
  description: string;
}

const CurrentStatusBlock = ({ description }: CurrentStatusBlockProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="relative"
    >
      <div className="flex items-start gap-4">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-sakura-accent h-8 w-px origin-top"
            style={{ transformOrigin: 'top' }}
          />
          <div className="bg-sakura-accent mt-2 flex h-2 w-2 items-center justify-center rounded-full">
            <div className="bg-sakura-bg h-1 w-1 animate-pulse rounded-full" />
          </div>
        </div>

        <div className="flex-1 pb-8">
          <p className="label-editorial text-sakura-accent mb-2">Right Now</p>
          <p className="font-zenmaru text-sakura-text text-base leading-relaxed md:text-lg">
            {description}
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default CurrentStatusBlock;
