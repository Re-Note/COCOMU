import { ReactNode } from 'react';
import S, { IconStyleProps } from './style';

interface IconProps extends IconStyleProps {
  children?: ReactNode;
  onClick?: () => void;
}

export default function Icon({ children, size = 'sm', color = '950', onClick }: IconProps) {
  return (
    <S.Icon
      size={size}
      color={color}
      onClick={onClick}
    >
      {children}
    </S.Icon>
  );
}
