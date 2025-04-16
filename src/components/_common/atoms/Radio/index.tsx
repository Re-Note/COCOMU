import S from './style';

interface RadioProps {
  isChecked: boolean;
  onToggle: (checked: boolean) => void;
  name?: string;
}

export default function Radio({ isChecked, onToggle, name }: RadioProps) {
  return (
    <S.RadioContainer onClick={() => onToggle(!isChecked)}>
      <S.HiddenRadio
        type='radio'
        checked={isChecked}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onToggle(e.target.checked)}
        name={name}
      />
      <S.RadioOuter checked={isChecked}>
        <S.RadioInner checked={isChecked} />
      </S.RadioOuter>
    </S.RadioContainer>
  );
}
