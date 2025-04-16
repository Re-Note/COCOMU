import S, { LoadingSpinnerStyleProps } from './style';

export default function LoadingSpinner({ color = 'triadic' }: LoadingSpinnerStyleProps) {
  return (
    <S.LoadingSpinner>
      <S.Dot
        delay='0s'
        color={color}
      />
      <S.Dot
        delay='0.2s'
        color={color}
      />
      <S.Dot
        delay='0.4s'
        color={color}
      />
    </S.LoadingSpinner>
  );
}
