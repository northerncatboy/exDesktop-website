import React from 'react';

export type IconName =
  | 'sun'
  | 'moon'
  | 'menu'
  | 'close'
  | 'download'
  | 'code'
  | 'check'
  | 'arrow_right'
  | 'arrow_external'
  | 'arrow_down'
  | 'arrow_left'
  | 'terminal'
  | 'github'
  | 'telegram'
  | 'chat'
  | 'changelog'
  | 'mail'
  | 'help'
  | 'tune'
  | 'shield'
  | 'work';

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({ name, size = 22, className = '', color = 'currentColor' }) => {
  return (
    <span
      className={`inline-icon ${className}`}
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
        backgroundColor: color,
        WebkitMaskImage: `url(/assets/icons/${name}.svg)`,
        maskImage: `url(/assets/icons/${name}.svg)`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain'
      }}
      aria-hidden="true"
    />
  );
};
