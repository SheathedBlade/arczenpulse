import ARCIcon from '../../assets/svg/ARC.svg?react';
import ARC_CN_Icon from '../../assets/svg/ARC_cn_char.svg?react';

const Brand = () => {
  return (
    <div className="flex h-full w-auto py-2">
      <ARCIcon
        preserveAspectRatio="xMidYMid meet"
        style={{
          letterSpacing: '0.5px',
          transform: 'translateX(1px, 0)'
        }}
        className="fill-sakura-day-text dark:fill-sakura-night-text h-auto w-40"
      />
      <ARC_CN_Icon className="fill-sakura-day-text dark:fill-sakura-night-text -ml-9 h-auto w-14 p-2" />
    </div>
  );
};

export default Brand;
