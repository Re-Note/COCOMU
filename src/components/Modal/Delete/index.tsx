import Button from '@components/_common/atoms/Button';
import useDeleteStudy from '@hooks/study/useDeleteStudy';
import { DeleteProps } from '@customTypes/modal';
import S from './style';

export default function DeleteModal({ studyId, name, onClose, navigate }: DeleteProps) {
  const { deleteStudyMutate } = useDeleteStudy({ navigate });

  const handleConfirm = () => {
    deleteStudyMutate.mutate(studyId);
    onClose();
  };

  return (
    <S.Container>
      <S.Description>{name}</S.Description>
      <S.Instruction>스터디를 삭제하시겠습니까?</S.Instruction>
      <S.ButtonWrapper>
        <Button
          color='triadic'
          size='md'
          onClick={handleConfirm}
        >
          확인
        </Button>
        <Button
          color='white'
          size='md'
          borderColor='triadic'
          onClick={onClose}
        >
          취소
        </Button>
      </S.ButtonWrapper>
    </S.Container>
  );
}
