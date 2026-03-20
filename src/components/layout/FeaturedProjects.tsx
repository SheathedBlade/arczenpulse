import Card from '../ui/Card';

const FeaturedProjects = () => {
  return (
    <div className="sm: mx-25 px-12">
      <h1 className="font-jost mt-16 mb-6 text-center text-2xl underline xl:my-6 xl:text-left">
        Featured Projects:
      </h1>
      <div className="flex flex-col items-center justify-center gap-6 xl:flex-row xl:gap-12">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default FeaturedProjects;
