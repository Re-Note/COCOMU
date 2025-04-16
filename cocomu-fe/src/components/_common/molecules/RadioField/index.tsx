import { FilterData } from '@customTypes/common';
import RadioOption from '../RadioOption';
import S from './style';

interface RadioFieldProps<T extends FilterData[]> {
  name?: string;
  options: T;
  selectedValue?: T[number]['id'];
  optionsGap?: string;
  onChange: (value: T[number]['id']) => void;
}

export default function RadioField<T extends FilterData[]>({
  name,
  options,
  selectedValue,
  optionsGap = '4rem',
  onChange,
}: RadioFieldProps<T>) {
  return (
    <S.Container optionsGap={optionsGap}>
      {options.map((option) => (
        <RadioOption
          key={option.id}
          name={name}
          label={option.name}
          checked={selectedValue === option.id}
          onChange={() => onChange(option.id)}
        />
      ))}
    </S.Container>
  );
}
