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
      <p className="meta-mono text-sakura-cobble tracking-wide uppercase">
        Developer · Artist · Maker
      </p>
      <p className="meta-mono text-sakura-stone mt-1 tracking-wide uppercase">
        Columbia, Maryland · Available for projects
      </p>
    </motion.div>
  );
};

export default HomeMetaBlock;
