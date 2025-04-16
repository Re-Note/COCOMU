import { useState } from 'react';
import Icon from '@components/_common/atoms/Icon';
import { BsChevronDown } from 'react-icons/bs';
import { FilterData } from '@customTypes/common';
import { useDropdown } from '@hooks/utils/useDropdown';

import TagList from '../TagList';
import DropdownList from '../DropdownList';
import S from './style';

interface InputDropdownProps {
  label?: string;
  description?: string;
  items: FilterData[];
  values?: number[];
  error?: string;
  isMultiSelect?: boolean;
  onSelect: (value: number[]) => void;
  onBlur: () => void;
}

export default function InputDropdown({
  label = '',
  description = '',
  items,
  values = [],
  error,
  isMultiSelect = false,
  onSelect,
  onBlur,
}: InputDropdownProps) {
  const { isOpen, toggle, handleBlur, dropdownRef } = useDropdown(onBlur);
  const [search, setSearch] = useState('');

  const selectedItems = items.filter((item) => values.includes(item.id));
  const availableItems = items.filter(
    (item) => !values.includes(item.id) && item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const handleAddItem = (id: number) => {
    toggle();
    setSearch('');

    if (!isMultiSelect) {
      return onSelect([id]);
    }

    onSelect(values.includes(id) ? values.filter((selectedId) => selectedId !== id) : [...values, id]);
  };

  const handleRemoveTag = (id: number) => {
    onSelect(values.filter((selectedId) => selectedId !== id));
  };

  return (
    <S.Container>
      <S.DropdownContainer
        ref={dropdownRef}
        onBlur={handleBlur}
        tabIndex={-1}
      >
        {label && <S.Label>{label}</S.Label>}

        <S.InputContainer
          isOpen={isOpen}
          isError={!!error}
          onClick={toggle}
        >
          {isMultiSelect && selectedItems.length > 0 && (
            <TagList
              items={selectedItems}
              color='primary'
              onRemove={handleRemoveTag}
            />
          )}
          <S.Input
            type='text'
            placeholder={selectedItems.length > 0 ? '' : description}
            value={isMultiSelect ? search : (selectedItems[0]?.name ?? '')}
            onChange={(e) => isMultiSelect && setSearch(e.target.value)}
            disabled={!isMultiSelect}
          />
          <Icon
            size='sm'
            color='950'
          >
            <BsChevronDown />
          </Icon>
        </S.InputContainer>

        {isOpen && (
          <DropdownList
            items={availableItems}
            values={values}
            size='md'
            color='black'
            onItemSelect={handleAddItem}
          />
        )}
      </S.DropdownContainer>

      {error && <S.ErrorText role='alert'>{error}</S.ErrorText>}
    </S.Container>
  );
}
