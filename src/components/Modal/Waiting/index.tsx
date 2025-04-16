import LoadingSpinner from '@components/_common/atoms/LoadingSpinner';
import { useEffect } from 'react';
import { WaitingProps } from '@customTypes/modal';
import S from './style';

export default function Waiting({ label, description, navigate, onClose }: WaitingProps) {
  useEffect(() => {
    const waitingTime = setTimeout(() => {
      onClose();
      if (typeof navigate === 'function') navigate();
    }, 5000);

    return () => clearTimeout(waitingTime);
  }, [onClose, navigate]);

  return (
    <S.Container>
      <S.Description>{description}</S.Description>
      <S.Instruction>{`${label} 페이지로 이동합니다.`}</S.Instruction>
      <LoadingSpinner />
    </S.Container>
  );
}
