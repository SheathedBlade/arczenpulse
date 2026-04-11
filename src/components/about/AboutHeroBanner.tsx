import ImageWithSkeleton from '@/components/ui/ImageWithSkeleton';
import { motion } from 'motion/react';

interface AboutHeroBannerProps {
  src: string;
  alt: string;
}

const AboutHeroBanner = ({ src, alt }: AboutHeroBannerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative -mx-6 mb-14 overflow-hidden rounded-lg sm:mx-0"
    >
      <div className="relative aspect-[3/1] overflow-hidden">
        <ImageWithSkeleton
          src={src}
          alt={alt}
          priority
          imgClassName="animate-ken-burns"
          className="h-full"
        />
        <div className="from-sakura-bg absolute inset-0 z-10 bg-gradient-to-t via-transparent to-transparent" />
        <div className="from-sakura-bg/30 absolute inset-0 z-10 bg-gradient-to-b via-transparent to-transparent" />
      </div>
    </motion.div>
  );
};

export default AboutHeroBanner;
