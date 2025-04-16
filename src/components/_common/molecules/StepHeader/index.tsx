import S from './style';

interface StepHeaderProps {
  step: number;
  description: string;
}

export default function StepHeader({ step, description }: StepHeaderProps) {
  return (
    <S.Container>
      <S.StepMarker>{step}</S.StepMarker>
      <S.Description>{description}</S.Description>
    </S.Container>
  );
}
