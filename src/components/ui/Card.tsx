import { CSSProperties, forwardRef, ReactNode } from 'react';

interface CardProps {
  title: string;
  description: ReactNode;
  image?: string;
  imageAlt?: string;
  className?: string;
  style?: CSSProperties;
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
      style,
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
        style={style}
        ref={ref}
      >
        {image && (
          <div className="mb-4 aspect-video overflow-hidden rounded-sm">
            <img
              src={image}
              alt={imageAlt ?? title}
              loading="lazy"
              width={384}
              className="h-full w-full cursor-pointer object-cover"
            />
          </div>
        )}

        {meta && (
          <p className="font-dmmono text-sakura-cobble mb-2 text-xs tracking-widest uppercase">
            {meta}
          </p>
        )}
        <h2 className="font-jost text-sakura-text mr-1 mb-2 text-xl font-bold tracking-wide underline decoration-2">
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
                className="font-dmmono text-sakura-cobble border-sakura-stone/30 bg-sakura-day-bg rounded-sm border px-1.5 py-0.5 text-xs"
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
