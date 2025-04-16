import { BsSearch } from 'react-icons/bs';
import Icon from '../Icon';
import S from './style';

interface SearchInputProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

export default function SearchInput({ placeholder = '', value, onChange, onSearch }: SearchInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <S.Container>
      <Icon
        size='md'
        color='700'
        onClick={onSearch}
      >
        <BsSearch />
      </Icon>
      <S.Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </S.Container>
  );
}
