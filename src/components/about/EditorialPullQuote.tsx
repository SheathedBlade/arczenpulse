import { motion } from 'motion/react';

interface EditorialPullQuoteProps {
  quote: string;
}

const EditorialPullQuote = ({ quote }: EditorialPullQuoteProps) => {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative my-4 py-5 md:my-6"
    >
      <span
        aria-hidden="true"
        className="font-jost text-sakura-accent/20 absolute -top-3 left-0 text-5xl leading-none md:text-6xl"
      >
        &ldquo;
      </span>

      <p className="font-jost text-sakura-text relative z-10 px-6 text-xl leading-snug tracking-tight md:text-2xl lg:text-3xl">
        {quote}
      </p>

      <span
        aria-hidden="true"
        className="font-jost text-sakura-accent/20 absolute right-0 -bottom-3 text-5xl leading-none md:text-6xl"
      >
        &rdquo;
      </span>
    </motion.blockquote>
  );
};

export default EditorialPullQuote;
