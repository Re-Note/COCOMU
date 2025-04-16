import IconButton from '@components/_common/atoms/IconButton';
import { BsPlus } from 'react-icons/bs';
import TestCaseItem from '@components/_common/atoms/TestCaseItem';
import { TestCaseData } from '@customTypes/space';
import S from './style';

interface TestCaseListProps {
  testCases: TestCaseData[];
  isEditable: boolean;
  handleInputChange: (id: string, field: 'input' | 'output', value: string) => void;
  handleRemoveTestCase: (id: string) => void;
  handleAddTestCase: () => void;
}

export default function TestCaseList({
  testCases,
  isEditable,
  handleInputChange,
  handleRemoveTestCase,
  handleAddTestCase,
}: TestCaseListProps) {
  return (
    <S.Container>
      <S.Description>테스트 케이스</S.Description>
      <S.ItemWrapper>
        {testCases.map((testCase) => (
          <TestCaseItem
            key={testCase.testCaseId}
            testCase={testCase}
            isEditable={isEditable && testCase.type === 'CUSTOM'}
            handleInputChange={handleInputChange}
            handleRemoveTestCase={handleRemoveTestCase}
          />
        ))}
        {isEditable && (
          <IconButton
            align='center'
            content='추가하기'
            onClick={handleAddTestCase}
          >
            <BsPlus />
          </IconButton>
        )}
      </S.ItemWrapper>
    </S.Container>
  );
}
