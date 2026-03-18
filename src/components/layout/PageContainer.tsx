import { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

const PageContainer = ({ children, className }: PageContainerProps) => {
  return (
    <div className={`min-h-svh w-full ${className ?? ''}`}>{children}</div>
  );
};

export default PageContainer;
