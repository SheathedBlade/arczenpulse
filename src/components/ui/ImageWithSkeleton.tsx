import { useState } from 'react';

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  skeletonClassName?: string;
}

const ImageWithSkeleton = ({
  src,
  alt,
  className,
  imgClassName,
  priority = false,
  skeletonClassName
}: ImageWithSkeletonProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${className ?? ''}`}>
      {!loaded && (
        <div
          className={`animate-shimmer absolute inset-0 z-10 ${skeletonClassName ?? ''}`}
          aria-hidden="true"
        />
      )}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={e => {
          setLoaded(true);
          e.currentTarget.classList.remove('opacity-0');
        }}
        className={`h-full w-full object-cover transition-opacity duration-500 ${!loaded ? 'opacity-0' : ''} ${imgClassName ?? ''}`}
      />
    </div>
  );
};

export default ImageWithSkeleton;
