import S from './style';

export interface FooterLabelProps {
  name: string;
  description?: string;
}

export default function FooterLabel({ name, description = '' }: FooterLabelProps) {
  return (
    <S.Label>
      <S.LabelText>{name}</S.LabelText>
      {description !== '' && <S.SmallLabelText>{`  :  ${description}`}</S.SmallLabelText>}
    </S.Label>
  );
}
