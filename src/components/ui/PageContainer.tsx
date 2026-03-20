import { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const PageContainer = ({ children, className, style }: PageContainerProps) => {
  return (
    <div
      className={`h-auto w-full xl:min-h-svh ${className ?? ''}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default PageContainer;
