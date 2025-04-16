import Radio from '@components/_common/atoms/Radio';
import S from './style';

interface RadioOptionProps {
  name?: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}

export default function RadioOption({ name, label, checked, onChange }: RadioOptionProps) {
  return (
    <S.Option>
      <Radio
        name={name}
        isChecked={checked}
        onToggle={onChange}
      />
      <S.Label>{label}</S.Label>
    </S.Option>
  );
}
