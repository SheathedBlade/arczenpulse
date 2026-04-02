import pfp from '@/assets/images/placeholder_me.webp';
import Divider from '@/components/ui/Divider';

const Hero = () => {
  return (
    <div className="z-2 flex flex-col items-center">
      <div className="mb-2">
        <img
          src={pfp}
          alt="Andrew Chuah profile pic"
          loading="lazy"
          className="border-sakura-surface h-32 w-32 rounded-xl border-4 object-cover shadow-lg"
        />
      </div>
      <div className="mb-2 text-center">
        <h1 className="text-sakura-text font-zenmaru text-6xl leading-snug font-bold">
          Andrew Chuah.
        </h1>
        <p className="text-sakura-cobble font-dmmono text-2xl tracking-widest uppercase">
          Digital Craftsman
        </p>
        <p className="text-sakura-text/70 font-dmmono text-base tracking-wider uppercase">
          [ Developer · Artist · Maker ]
        </p>
      </div>
      <Divider />
      <div className="md:px-12">
        <p className="font-zenmaru mx-auto mb-3 max-w-prose text-base">
          I&apos;m a full-stack software engineer with experience building
          mission-critical, robust applications for the NSA, where everything
          must work the first time, every time. Such discipline originates from
          my start in cybersecurity and SOC roles, where I developed automations
          and scripts to ensure smooth operations.
        </p>
        <p className="font-zenmaru mx-auto mb-3 max-w-prose text-base">
          Outside of work, I satisfy my creative itch by keeping my hands busy
          with electronics, digital art, and 3D modeling. For me, every project
          is a chance to build something memorable, whether it&apos;s digital or
          physical.
        </p>
        <p className="font-zenmaru mx-auto mb-3 max-w-prose text-base">
          I love traveling and experiencing all that a culture has to offer, and
          some of my favorite trips have been through Malaysia, Thailand, and
          Japan. Those journeys are what inspire my design sensibility and
          encourage me to keep creating.
        </p>
      </div>
    </div>
  );
};

export default Hero;
