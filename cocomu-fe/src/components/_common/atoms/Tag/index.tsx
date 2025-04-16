import { PropsWithChildren } from 'react';
import { BsX } from 'react-icons/bs';
import S, { TagStyleProps } from './style';
import Icon from '../Icon';

export type TagProps = PropsWithChildren<
  React.ComponentProps<'div'> &
    TagStyleProps & {
      onRemove?: () => void;
    }
>;

export default function Tag({ children, color = 'gray', onRemove }: TagProps) {
  return (
    <S.Tag color={color}>
      {children}
      {onRemove && (
        <Icon
          size='sm'
          color='950'
          onClick={onRemove}
        >
          <BsX />
        </Icon>
      )}
    </S.Tag>
  );
}
