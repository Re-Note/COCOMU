import S, { DropDownItemStyleProps } from './style';

type DropdownItemProps = {
  item: string;
  onClick: (event: React.MouseEvent) => void;
} & DropDownItemStyleProps;

export default function DropdownItem({
  item,
  onClick,
  size = 'md',
  color = 'black',
  isSelected = false,
}: DropdownItemProps) {
  return (
    <S.DropdownItem
      isSelected={isSelected}
      onClick={onClick}
      color={color}
      size={size}
    >
      {item}
    </S.DropdownItem>
  );
}
