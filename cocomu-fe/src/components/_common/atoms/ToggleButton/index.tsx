import React, { useEffect, useState } from 'react';
import S, { ToggleButtonStyleProps } from './style';

interface ToggleButtonProps extends ToggleButtonStyleProps {
  isActive?: boolean;
  onToggle?: (isActive: boolean) => void;
  children: React.ReactNode;
}

export default function ToggleButton({
  isActive = false,
  size = 'md',
  shape = 'default',
  onToggle,
  children,
}: ToggleButtonProps) {
  const [active, setActive] = useState(isActive);

  useEffect(() => {
    setActive(isActive);
  }, [isActive]);

  const handleClick = () => {
    const newActiveState = !active;
    setActive(newActiveState);
    onToggle?.(newActiveState);
  };

  return (
    <S.ToggleButton
      onClick={handleClick}
      size={size}
      shape={shape}
      isActive={active}
    >
      {children}
    </S.ToggleButton>
  );
}
