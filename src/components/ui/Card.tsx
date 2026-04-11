import { forwardRef, ReactNode } from 'react';
import ImageWithSkeleton from '@/components/ui/ImageWithSkeleton';

interface CardProps {
  title: string;
  description: ReactNode;
  image?: string;
  imageAlt?: string;
  className?: string;
  category?: string;
  year?: string;
  techStack?: string[];
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      title,
      description,
      image,
      imageAlt,
      className,
      category,
      year,
      techStack
    },
    ref
  ) => {
    const meta = [category, year].filter(Boolean).join(' · ');

    return (
      <div
        className={`bg-sakura-card hoverable-card z-10 flex flex-col overflow-hidden rounded-md p-4 ${className ?? ''}`}
        ref={ref}
      >
        {image && (
          <div className="mb-4 aspect-video overflow-hidden rounded-sm">
            <ImageWithSkeleton
              src={image}
              alt={imageAlt ?? title}
              className="h-full"
              imgClassName="cursor-pointer"
            />
          </div>
        )}

        {meta && (
          <p className="font-dmmono text-sakura-cobble mb-2 text-xs tracking-widest uppercase">
            {meta}
          </p>
        )}
        <h2 className="font-jost text-sakura-text mr-1 mb-2 text-xl font-bold tracking-wide underline decoration-1 underline-offset-4">
          {title}
        </h2>
        <p className="font-zenmaru text-sakura-text mx-auto mb-3 line-clamp-2 text-base">
          {description}
        </p>
        {techStack && techStack.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-1.5">
            {techStack.slice(0, 3).map(tag => (
              <span
                key={tag}
                className="font-dmmono text-sakura-cobble bg-sakura-bg border-sakura-stone/30 rounded-sm border px-1.5 py-0.5 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
