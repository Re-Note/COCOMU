import { ReactNode } from 'react';
import { BsPlus } from 'react-icons/bs';

import { TestCaseData } from '@customTypes/space';

import { useModalStore } from '@stores/useModalStore';

import IconButton from '@components/_common/atoms/IconButton';

import S from './style';

interface SpaceFooterProps {
  codingSpaceId: string;
  isEditable?: boolean;
  testCases: TestCaseData;
  children?: ReactNode;
}

export default function SpaceFooter({ codingSpaceId, isEditable, testCases, children }: SpaceFooterProps) {
  const { open } = useModalStore();

  const handleOpenTestCase = () => {
    open('testCase', {
      codingSpaceId,
      isEditable,
      testCases,
    });
  };

  return (
    <S.Container>
      <S.TestCaseButton>
        <IconButton
          content={isEditable ? '테스트 케이스 추가하기' : '테스트 케이스 확인하기'}
          align='center'
          shape='round'
          onClick={handleOpenTestCase}
        >
          {isEditable && <BsPlus />}
        </IconButton>
      </S.TestCaseButton>

      {children}
    </S.Container>
  );
}
