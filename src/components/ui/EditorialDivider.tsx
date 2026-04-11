interface EditorialDividerProps {
  className?: string;
  weight?: 'light' | 'medium' | 'heavy';
}

const EditorialDivider = ({
  className,
  weight = 'medium'
}: EditorialDividerProps) => {
  const thickness =
    weight === 'light' ? 'h-px' : weight === 'heavy' ? 'h-0.5' : 'h-px';
  const opacity =
    weight === 'light' ? 'opacity-70' : weight === 'heavy' ? 'opacity-90' : '';

  return (
    <div
      className={`mx-auto flex w-full items-center gap-4 ${className ?? ''}`}
      aria-hidden="true"
    >
      <div className={`bg-sakura-stone ${thickness} ${opacity} flex-1`} />
      <div className={`bg-sakura-stone ${thickness} ${opacity} flex-1`} />
    </div>
  );
};

export default EditorialDivider;
