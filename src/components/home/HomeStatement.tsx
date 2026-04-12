import { homeStatementVariants } from '@/data/motionVariants';
import { motion } from 'motion/react';

const HomeStatement = () => {
  return (
    <motion.div
      variants={homeStatementVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-6"
    >
      <p className="font-zenmaru text-sakura-text text-xl leading-relaxed lg:text-2xl">
        I create digital work shaped by visual impact, functionality, and
        careful refinement. Currently building tools at the NSA that help
        analysts perform their best work.
      </p>
    </motion.div>
  );
};

export default HomeStatement;
