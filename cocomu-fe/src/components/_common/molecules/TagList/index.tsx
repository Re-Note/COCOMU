import Tag from '@components/_common/atoms/Tag';
import { TagColor } from '@components/_common/atoms/Tag/style';
import { FilterData } from '@customTypes/common';
import S from './style';

interface TagListProps {
  items: FilterData[];
  color?: TagColor;
  onRemove?: (id: number) => void;
}

export default function TagList({ items, color, onRemove }: TagListProps) {
  return (
    <S.ListContainer>
      {items.map((item) => (
        <Tag
          key={item.id}
          color={color}
          onRemove={onRemove ? () => onRemove(item.id) : undefined}
        >
          {item.name}
        </Tag>
      ))}
    </S.ListContainer>
  );
}
