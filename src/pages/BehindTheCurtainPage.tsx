import AppLink from '@/components/ui/AppLink';
import PageContainer from '@/components/ui/PageContainer';
import { ArrowLeftIcon } from '@phosphor-icons/react';
import { motion } from 'motion/react';

function BehindTheCurtainPage() {
  return (
    <PageContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-auto max-w-2xl py-16"
      >
        {/* Header */}
        <header className="mb-16">
          <h1 className="font-jost text-sakura-text text-4xl font-bold md:text-5xl">
            Behind the Curtain
          </h1>
          <p className="font-zenmaru text-sakura-cobble mt-4 text-lg">
            A few notes on why this place looks and feels the way it does.
          </p>
        </header>

        {/* Personal Preface */}
        <section className="mb-16">
          <div className="font-zenmaru text-sakura-text/80 space-y-4 text-lg leading-relaxed">
            <p>
              [Placeholder — Personal preface: why making this site mattered to
              you personally. What space were you trying to create? What made
              you want something beyond a standard portfolio?]
            </p>
          </div>
        </section>

        {/* Design Thesis */}
        <section className="mb-16">
          <div className="font-zenmaru text-sakura-text/80 space-y-4 text-lg leading-relaxed">
            <p>
              [Placeholder — Design thesis: the core feeling you were chasing.
              Softness, restraint, texture, atmosphere. What should the site
              feel like when you land on it?]
            </p>
          </div>
        </section>

        {/* Mood Fragments */}
        <section className="mb-16 space-y-8">
          <div className="font-zenmaru text-sakura-text/80 space-y-4 text-lg leading-relaxed">
            <p>
              [Placeholder — Mood fragment: color and the dual-theme feeling.
              Day and night as two moods of the same place, not just a toggle.]
            </p>
          </div>

          {/* Artifact placeholder */}
          <div className="bg-sakura-card rounded-lg p-8 text-center">
            <p className="font-dmmono text-sakura-cobble text-sm">
              [Mood artifact — e.g. a cropped screenshot of the day/night theme
              contrast, a close-up of typography, a spacing detail]
            </p>
          </div>

          <div className="font-zenmaru text-sakura-text/80 space-y-4 text-lg leading-relaxed">
            <p>
              [Placeholder — Mood fragment: typography and the choice of Zen
              Maru Gothic as the voice of the site.]
            </p>
          </div>
        </section>

        {/* Design Decisions */}
        <section className="mb-16">
          <div className="font-zenmaru text-sakura-text/80 space-y-4 text-lg leading-relaxed">
            <p>
              [Placeholder — Design decisions: why the navbar stays minimal. Why
              the site resists over-explaining itself. Why certain interactions
              are quiet rather than loud.]
            </p>
            <p>
              [Placeholder — Why the footer became a place for deeper discovery
              rather than a utility bar.]
            </p>
          </div>
        </section>

        {/* Build Fragments */}
        <section className="mb-16">
          <div className="font-zenmaru text-sakura-text/80 space-y-4 text-lg leading-relaxed">
            <p>
              [Placeholder — Build fragment: stack choices and why they serve
              the feeling. React Router, motion, the topo background as
              atmosphere rather than spectacle.]
            </p>
            <p>
              [Placeholder — Build fragment: the topo background and perlin
              noise as a quiet texture, not a visual feature. Web workers,
              throttling, reduced-motion handling.]
            </p>
          </div>
        </section>

        {/* What Changed */}
        <section className="mb-16">
          <div className="font-zenmaru text-sakura-text/80 space-y-4 text-lg leading-relaxed">
            <p>
              [Placeholder — What changed: ideas that were removed. Rough edges
              that remain. Tradeoffs made. Placeholders still waiting to be
              filled.]
            </p>
          </div>
        </section>

        {/* Looking Forward */}
        <section className="mb-16">
          <div className="font-zenmaru text-sakura-text/80 space-y-4 text-lg leading-relaxed">
            <p>
              [Placeholder — Looking forward: what still feels unfinished. What
              you want to improve next. What kind of place you want the site to
              become over time.]
            </p>
          </div>
        </section>

        {/* Return Link */}
        <section className="border-sakura-stone/30 border-t pt-12">
          <AppLink
            to="/"
            className="font-dmmono text-sakura-cobble hover:text-sakura-text inline-flex items-center gap-2 transition-colors"
          >
            <ArrowLeftIcon size={20} weight="bold" aria-hidden="true" />
            <span>Back to Home</span>
          </AppLink>
        </section>
      </motion.div>
    </PageContainer>
  );
}

export default BehindTheCurtainPage;
