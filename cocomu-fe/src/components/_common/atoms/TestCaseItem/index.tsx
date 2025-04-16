import { BsDash } from 'react-icons/bs';
import Icon from '@components/_common/atoms/Icon';
import { TestCaseData } from '@customTypes/space';
import S from './style';

interface TestCaseItemProps {
  testCase?: TestCaseData;
  isEditable?: boolean;
  handleRemoveTestCase?: (id: string | number) => void;
  handleInputChange?: (id: string | number, field: 'input' | 'output', newValue: string) => void;
}

export default function TestCaseItem({
  testCase,
  isEditable,
  handleRemoveTestCase,
  handleInputChange,
}: TestCaseItemProps) {
  return (
    <S.TestCaseItem>
      {isEditable && (
        <S.RemoveButton>
          <Icon
            size='md'
            color='950'
            onClick={() => handleRemoveTestCase(testCase.testCaseId)}
          >
            <BsDash />
          </Icon>
        </S.RemoveButton>
      )}
      <S.Input
        value={testCase.input}
        onChange={(e) => handleInputChange(testCase.testCaseId, 'input', e.target.value)}
        disabled={!isEditable}
        remove={isEditable}
      />
      <S.Output
        value={testCase.output}
        onChange={(e) => handleInputChange(testCase.testCaseId, 'output', e.target.value)}
        disabled={!isEditable}
      />
    </S.TestCaseItem>
  );
}
