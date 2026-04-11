import { motion } from 'motion/react';
import { homeIdentityVariants } from '@/data/motionVariants';

const HomeIdentityBlock = () => {
  return (
    <motion.div
      variants={homeIdentityVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-3"
    >
      <h1 className="font-zenmaru text-sakura-text text-6xl leading-none tracking-tight lg:text-[5.5rem] lg:leading-none">
        Andrew
      </h1>
      <h1 className="font-zenmaru text-sakura-text mt-1 text-6xl leading-none tracking-tight lg:text-[5.5rem] lg:leading-none">
        Chuah.
      </h1>
    </motion.div>
  );
};

export default HomeIdentityBlock;
