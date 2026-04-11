import { motion } from 'motion/react';

const HomeMetaBlock = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: 0.25 }}
      className="mt-5"
    >
      <p className="font-dmmono text-sakura-text/80 text-xs tracking-widest uppercase">
        Developer · Artist · Maker
      </p>
      <p className="font-dmmono text-sakura-stone/90 mt-1.5 text-xs tracking-wide">
        Columbia, Maryland · Available for projects
      </p>
    </motion.div>
  );
};

export default HomeMetaBlock;
