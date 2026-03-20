import endfieldThumb from '@/assets/images/endfield_thumbnail.png';
import Card from '@/components/ui/Card';
import { motion, Variants } from 'motion/react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.25
    }
  }
};

const childrenVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

const MotionCard = motion.create(Card);

const FeaturedProjects = () => {
  return (
    <div className="sm: mx-25 px-12">
      <h1
        className="font-jost mt-16 mb-6 text-center text-2xl underline xl:my-6 xl:text-left"
        style={{ textDecorationThickness: '3px' }}
      >
        Featured Projects:
      </h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 justify-items-center gap-6 lg:grid-cols-3"
      >
        <MotionCard
          variants={childrenVariants}
          title="Endfield Architect"
          description={
            <>
              {/* Endfield Architect is an app based on the game{' '}
              <span className="font-bold">Arknights:Endfield</span> that
              simulates a production plan onto a grid, with all machines, items,
              and recipes. It uses A* pathfinding to find the most optimal
              placements of machines, belts, and pipes in order to reach the
              requested item&apos;s production rate per minute. */}
              An app based on the game{' '}
              <span className="font-bold">Arknights: Endfield</span> that
              simulates a production plan onto an in-game factory layout, being
              as efficient as possible with limited space and resources.
            </>
          }
          image={endfieldThumb}
        />
        <MotionCard
          variants={childrenVariants}
          title="WindTrace"
          description={
            <>
              An app that uses image recognition to score a Mahjong hand based
              on selected rulesets.
            </>
          }
          image={endfieldThumb}
        />
        <MotionCard
          variants={childrenVariants}
          title="Vantage"
          description={
            <>
              An esports management platform for organizers to manage teams,
              players, and matches of various online games.
            </>
          }
          image={endfieldThumb}
        />
      </motion.div>
    </div>
  );
};

export default FeaturedProjects;
