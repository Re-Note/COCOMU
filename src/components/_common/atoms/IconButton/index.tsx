import { PropsWithChildren, useEffect, useState } from 'react';
import S, { IconButtonStyleProps } from './style';
import Icon from '../Icon';

type IconButtonComponentProps = PropsWithChildren<
  React.ComponentProps<'div'> &
    IconButtonStyleProps & {
      content?: string;
      onClick?: () => void;
    }
>;

export default function IconButton({
  children,
  color = 'white',
  align = 'left',
  content,
  shape = 'default',
  onClick,
}: IconButtonComponentProps) {
  const [iconColor, setIconColor] = useState<'50' | '950'>('950');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (color === 'white') {
      if (isHovered) {
        setIconColor('50');
      } else {
        setIconColor('950');
      }
    } else {
      setIconColor('950');
    }
  }, [color, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <S.IconButtonContainer
      color={color}
      align={align}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      shape={shape}
      onClick={onClick}
    >
      <Icon
        color={iconColor}
        size='md'
      >
        {children}
      </Icon>
      {content}
    </S.IconButtonContainer>
  );
}
