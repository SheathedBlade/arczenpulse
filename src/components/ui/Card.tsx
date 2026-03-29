import { ArrowSquareOutIcon } from '@phosphor-icons/react';
import { CSSProperties, forwardRef, ReactNode } from 'react';
import AppLink from './AppLink';

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
        className={`bg-sakura-card hoverable-card z-10 min-h-87.5 max-w-sm cursor-pointer overflow-hidden rounded-md p-4 ${className ?? ''}`}
        style={style}
        ref={ref}
      >
        {image && (
          <img
            src={image}
            alt={imageAlt ?? title}
            loading="lazy"
            onLoad={e => {
              e.currentTarget.classList.remove('opacity-0');
            }}
            className="mb-4 h-48 w-full rounded-sm object-cover opacity-0 transition-opacity duration-500"
          />
        )}

        {titleLink ? (
          <AppLink to={titleLink} className="inline-flex flex-row items-center">
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
          </AppLink>
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
