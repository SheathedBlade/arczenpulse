import ImageWithSkeleton from '@/components/ui/ImageWithSkeleton';
import portrait from '@/assets/images/placeholder_portrait.jpg';
import { motion } from 'motion/react';

interface HomePortraitProps {
  className?: string;
  showCaption?: boolean;
}

const HomePortrait = ({
  className,
  showCaption = false
}: HomePortraitProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`relative flex flex-col ${className ?? ''}`}
    >
      {/* Image — clipped reveal, never crops content */}
      <motion.div
        initial={{ clipPath: 'inset(100% 0 0 0)' }}
        whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden shadow-[0_8px_40px_-12px_rgba(58,40,48,0.35)]"
      >
        <ImageWithSkeleton
          src={portrait}
          alt="Andrew Chuah"
          priority
          className="h-full"
          imgClassName="object-center"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent"
          aria-hidden="true"
        />
        <motion.div
          className="from-sakura-bg/30 pointer-events-none absolute inset-0 bg-gradient-to-r to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          aria-hidden="true"
        />
      </motion.div>

      {/* Caption — outside the clip, never cropped */}
      {showCaption && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <div className="bg-sakura-surface/95 px-3 py-2 text-center">
            <p className="meta-mono text-sakura-text">Andrew Chuah — 2024</p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default HomePortrait;
