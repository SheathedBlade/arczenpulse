import { motion } from 'motion/react';

interface EditorialPullQuoteProps {
  quote: string;
}

const EditorialPullQuote = ({ quote }: EditorialPullQuoteProps) => {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative my-12 py-8 md:my-16"
    >
      <span
        aria-hidden="true"
        className="font-jost text-sakura-accent/30 absolute -top-2 -left-4 text-[6rem] leading-none md:-left-8 md:text-[8rem]"
      >
        &ldquo;
      </span>

      <p className="font-dmmono text-sakura-text relative z-10 px-6 text-2xl leading-snug tracking-tight md:px-10 md:text-3xl lg:text-4xl">
        {quote}
      </p>

      <span
        aria-hidden="true"
        className="font-jost text-sakura-accent/30 absolute right-0 -bottom-8 text-[6rem] leading-none md:text-[8rem]"
      >
        &rdquo;
      </span>
    </motion.blockquote>
  );
};

export default EditorialPullQuote;
