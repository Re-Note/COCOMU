import { PropsWithChildren } from 'react';
import S, { ButtonStyleProps } from './style';

export type ButtonProps = PropsWithChildren<
  React.ComponentProps<'button'> &
    Omit<ButtonStyleProps, 'borderColor'> & { borderColor?: ButtonStyleProps['borderColor'] }
>;

export default function Button({
  children,
  onClick,
  type = 'button',
  size = 'md',
  color = 'white',
  shape = 'default',
  borderColor = 'primary',
}: ButtonProps) {
  return (
    <S.Button
      onClick={onClick}
      type={type}
      size={size}
      color={color}
      shape={shape}
      borderColor={borderColor}
    >
      {children}
    </S.Button>
  );
}
