import ImageTag from '@components/_common/atoms/ImageTag';
import { FilterData } from '@customTypes/common';
import S from './style';

interface ImageTagListProps {
  items: FilterData[];
}

export default function ImageTagList({ items }: ImageTagListProps) {
  return (
    <S.ListContainer>
      {items.map((item) => (
        <ImageTag
          key={item.id}
          imageUrl={item.imageUrl}
        />
      ))}
    </S.ListContainer>
  );
}
