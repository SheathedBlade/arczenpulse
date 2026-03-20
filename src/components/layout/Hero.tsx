import Divider from '../ui/Divider';

const Hero = () => {
  return (
    <div className="z-2 flex flex-col items-center">
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
        <p className="font-zenmaru text-sakura-text/90 bg-sakura-card mx-auto mt-6 max-w-sm rounded-md p-1 text-base leading-relaxed">
          Precise in development, passionate in design, thorough in craft.
        </p>
      </div>
      <Divider />
      <div className="px-12">
        <h1 className="font-jost mb-2 text-2xl underline">Bio:</h1>
        <p className="font-zenmaru mx-auto mb-2 max-w-prose text-base">
          Andrew (Ren-Jun) Chuah is a full-stack software engineer with a
          passion for . He got his start in cybersecurity and security
          operations internship roles, where he would gain the skills to shift
          his career into a full-time software engineer for the NSA.
        </p>
        <p className="font-zenmaru mx-auto mb-2 max-w-prose text-base">
          Andrew&apos;s main interests include 3D designing and printing,
          electronics, and digital art. He loves traveling, and by far his
          favorite places he visited are Malaysia, Thailand, and Japan
          (definitely has the best food).
        </p>
      </div>
    </div>
  );
};

export default Hero;
