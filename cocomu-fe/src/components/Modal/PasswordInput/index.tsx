import { useState } from 'react';
import InputField from '@components/_common/molecules/InputField';
import Button from '@components/_common/atoms/Button';
import { PasswordInputProps } from '@customTypes/modal';
import useJoinStudy from '@hooks/study/useJoinStudy';
import S from './style';

export default function PasswordInput({ studyId, navigate, onClose }: PasswordInputProps) {
  const [password, setPassword] = useState('');
  const { joinPrivateStudyMutate } = useJoinStudy({ navigate });

  const handleConfirm = () => {
    joinPrivateStudyMutate.mutate({ studyId, password });
    onClose();
  };

  return (
    <S.Container>
      <S.Description>암호를 입력해주세요</S.Description>
      <InputField
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <S.ButtonWrapper>
        <Button
          color='primary'
          size='md'
          onClick={handleConfirm}
        >
          확인
        </Button>
        <Button
          color='white'
          size='md'
          onClick={onClose}
        >
          취소
        </Button>
      </S.ButtonWrapper>
    </S.Container>
  );
}
