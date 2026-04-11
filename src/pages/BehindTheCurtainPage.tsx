import EditorialDivider from '@/components/ui/EditorialDivider';
import AppLink from '@/components/ui/AppLink';
import PageContainer from '@/components/ui/PageContainer';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { ArrowLeftIcon } from '@phosphor-icons/react';
import { motion } from 'motion/react';

function BehindTheCurtainPage() {
  useDocumentTitle('Behind the Curtain');

  return (
    <PageContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-2xl px-6 py-16"
      >
        {/* Back nav */}
        <div className="mb-12">
          <AppLink
            to="/"
            className="font-dmmono text-sakura-cobble hover:text-sakura-accent inline-flex items-center gap-2 text-xs transition-colors"
          >
            <ArrowLeftIcon size={14} weight="bold" aria-hidden="true" />
            Home
          </AppLink>
        </div>

        {/* Header */}
        <header className="mb-12">
          <h1 className="font-jost text-sakura-text text-4xl font-bold tracking-tight md:text-5xl">
            The Craft
          </h1>
          <p className="font-zenmaru text-sakura-cobble/90 mt-3 text-lg leading-relaxed">
            Notes on the design decisions, the why behind the what.
          </p>
        </header>

        <EditorialDivider weight="light" className="mb-12" />

        {/* Section: The Sakura Theme */}
        <section className="mb-14">
          <h2 className="font-jost text-sakura-text mb-4 text-xl font-bold tracking-tight">
            The Sakura palette
          </h2>
          <div className="space-y-4">
            <p className="font-zenmaru text-sakura-text/90 text-base leading-relaxed">
              The sakura (桜, cherry blossom) palette came from a desire to
              build a portfolio that felt warm and considered, not cold and
              technical. Japanese color names carry specific moods — this
              isn&apos;t just &quot;pink,&quot; it&apos;s the specific pink of
              late-spring petals against worn paper.
            </p>
            <p className="font-zenmaru text-sakura-text/90 text-base leading-relaxed">
              Day mode uses parchment and stone-ash tones. Night mode keeps the
              same hue relationships but shifts toward deep plum and midnight —
              the palette of a temple garden after the sun goes down. The
              transitions between modes use the same color family so the shift
              never feels jarring.
            </p>
          </div>
        </section>

        <EditorialDivider weight="light" className="mb-12" />

        {/* Section: Editorial Layout */}
        <section className="mb-14">
          <h2 className="font-jost text-sakura-text mb-4 text-xl font-bold tracking-tight">
            Typography as design
          </h2>
          <div className="space-y-4">
            <p className="font-zenmaru text-sakura-text/90 text-base leading-relaxed">
              Jost for headings — a geometric sans that reads as confident
              without being corporate. Zen Maru Gothic for body — warm, rounded,
              slightly playful in a way that suits a personal site. DM Mono for
              labels and metadata — technical precision without looking like
              code.
            </p>
            <p className="font-zenmaru text-sakura-text/90 text-base leading-relaxed">
              Pull quotes use oversized, subtle quotation marks in Jost rather
              than DM Mono — it makes them feel like editorial typography rather
              than system output. That distinction is small but matters.
            </p>
          </div>
        </section>

        <EditorialDivider weight="light" className="mb-12" />

        {/* Section: The Topo Background */}
        <section className="mb-14">
          <h2 className="font-jost text-sakura-text mb-4 text-xl font-bold tracking-tight">
            The Perlin topology
          </h2>
          <div className="space-y-4">
            <p className="font-zenmaru text-sakura-text/90 text-base leading-relaxed">
              The animated background on the home page is a Perlin noise
              topology mesh — three.js rendering a slowly shifting topographic
              map. It started as a test of simplex-noise generation and stayed
              because it sets an immediate mood: this site is interested in
              systems and structure.
            </p>
            <p className="font-zenmaru text-sakura-text/90 text-base leading-relaxed">
              The canvas pauses when it leaves the viewport (Intersection
              Observer), runs on a Web Worker so it doesn&apos;t block the main
              thread, and lives at 25% opacity so it reads as atmosphere rather
              than focal point.
            </p>
          </div>
        </section>

        <EditorialDivider weight="light" className="mb-12" />

        {/* Closing beat */}
        <div className="mb-8">
          <p className="font-zenmaru text-sakura-text/80 text-sm italic">
            Questions about any of this — reach out.
          </p>
        </div>

        {/* Back link */}
        <div>
          <AppLink
            to="/"
            className="font-dmmono text-sakura-cobble hover:text-sakura-accent inline-flex items-center gap-2 text-xs transition-colors"
          >
            <ArrowLeftIcon size={14} weight="bold" aria-hidden="true" />
            Back to Home
          </AppLink>
        </div>
      </motion.div>
    </PageContainer>
  );
}

export default BehindTheCurtainPage;
