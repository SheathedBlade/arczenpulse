import { ArrowSquareOutIcon } from '@phosphor-icons/react';
import { CSSProperties, forwardRef, ReactNode } from 'react';

interface CardProps {
  title: string;
  titleLink?: string;
  description: ReactNode;
  image?: string;
  imageAlt?: string;
  className?: string;
  style?: CSSProperties;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { title, titleLink, description, image, imageAlt, className, style },
    ref
  ) => {
    return (
      <div
        className={`bg-sakura-card z-3 max-w-sm rounded-md p-4 transition-colors duration-200 ${className ?? ''}`}
        style={style}
        ref={ref}
      >
        {image && (
          <img
            src={image}
            alt={imageAlt ?? title}
            className="mb-4 w-full rounded-sm object-cover"
          />
        )}

        {titleLink ? (
          <a
            href={titleLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-row items-center"
          >
            <h2
              className="font-jost text-sakura-text mr-1 mb-2 text-xl font-bold tracking-wide underline"
              style={{ textDecorationThickness: '2px' }}
            >
              {title}
            </h2>
            <ArrowSquareOutIcon
              size={24}
              className="text-sakura-text mb-2 inline-block"
            />
          </a>
        ) : (
          <h2
            className="font-jost text-sakura-text mr-1 mb-2 text-xl font-bold tracking-wide underline"
            style={{ textDecorationThickness: '2px' }}
          >
            {title}
          </h2>
        )}

        <p className="font-zenmaru text-sakura-text mx-auto mb-2 max-w-prose text-base">
          {description}
        </p>
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
