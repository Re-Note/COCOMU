import { BsChevronDown } from 'react-icons/bs';

import { useDropdown } from '@hooks/utils/useDropdown';

import Icon from '@components/_common/atoms/Icon';
import { FilterData } from '@customTypes/common';

import DropdownList from '../DropdownList';
import S from './style';

interface SelectDropdownProps {
  description?: string;
  items: FilterData[];
  values?: number[];
  isMultiSelect?: boolean;
  onSelect: (id: number[]) => void;
}

const DEFAULT_OPTION: FilterData = { id: 0, name: '전체', imageUrl: '' };

export default function SelectDropdown({
  description = '',
  items,
  values = [],
  isMultiSelect = false,
  onSelect,
}: SelectDropdownProps) {
  const { isOpen, toggle, handleBlur, dropdownRef } = useDropdown();

  const selectedNames =
    values.length > 0
      ? values
          .map((id) => items.find((item) => item.id === id)?.name)
          .filter(Boolean)
          .join(', ')
      : description;

  const handleSelectItem = (id: number) => {
    toggle();

    if (id === DEFAULT_OPTION.id) {
      return onSelect([]);
    }

    if (!isMultiSelect) {
      return onSelect(values.includes(id) ? [] : [id]);
    }

    onSelect(values.includes(id) ? values.filter((selectedId) => selectedId !== id) : [...values, id]);
  };

  return (
    <S.Container
      ref={dropdownRef}
      onBlur={handleBlur}
      tabIndex={-1}
    >
      <S.Header
        isOpen={isOpen}
        onClick={toggle}
      >
        <S.SelectedText>{selectedNames}</S.SelectedText>
        <Icon
          size='sm'
          color='950'
        >
          <BsChevronDown />
        </Icon>
      </S.Header>

      {isOpen && (
        <DropdownList
          items={[DEFAULT_OPTION, ...items]}
          values={values}
          size='lg'
          color='black'
          shape='round'
          onItemSelect={handleSelectItem}
        />
      )}
    </S.Container>
  );
}
