import DropdownItem from '@components/_common/atoms/DropdownItem';
import { DropDownItemStyleProps } from '@components/_common/atoms/DropdownItem/style';
import { FilterData } from '@customTypes/common';
import S, { DropdownListStyleProps } from './style';

interface DropdownListProps extends DropDownItemStyleProps, DropdownListStyleProps {
  items: FilterData[];
  values?: number[];
  onItemSelect: (id: number) => void;
}

export default function DropdownList({
  items,
  values = [],
  size,
  color,
  shape = 'default',
  onItemSelect,
}: DropdownListProps) {
  return (
    <S.DropdownList shape={shape}>
      {items.map((item) => (
        <DropdownItem
          key={item.id}
          item={item.name}
          size={size}
          color={color}
          onClick={() => onItemSelect(item.id)}
          isSelected={values.includes(item.id)}
        />
      ))}
    </S.DropdownList>
  );
}
