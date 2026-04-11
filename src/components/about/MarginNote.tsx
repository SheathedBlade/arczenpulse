import { motion } from 'motion/react';

interface MarginNoteProps {
  children: React.ReactNode;
  label?: string;
}

const MarginNote = ({ children, label }: MarginNoteProps) => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="group border-sakura-accent/40 relative border-l-2 pl-4"
    >
      {label && (
        <p className="label-editorial text-sakura-accent/70 mb-1">{label}</p>
      )}
      <div className="font-dmmono text-sakura-stone text-xs leading-relaxed tracking-wide">
        {children}
      </div>
    </motion.aside>
  );
};

export default MarginNote;
