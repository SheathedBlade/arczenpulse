import { motion } from 'motion/react';
import { homeStatementVariants } from '@/data/motionVariants';

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
        I make digital work that feels intentional — from first impression to
        last detail. Currently building tools at the NSA that help keep things
        running.
      </p>
    </motion.div>
  );
};

export default HomeStatement;
