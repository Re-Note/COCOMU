import { useEffect, useState } from 'react';
import { RUNNER_TAB } from '@constants/space';
import S from './style';

interface ExecutionPanelProps {
  setInput?: (input: string) => void;
  output?: string;
  disabled?: boolean;
  isExcution?: boolean;
  setIsExcution?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ExecutionPanel({ setInput, output, disabled, isExcution, setIsExcution }: ExecutionPanelProps) {
  const [selectedTab, setSelectedTab] = useState<keyof typeof RUNNER_TAB>('INPUT');

  useEffect(() => {
    if (isExcution) {
      setSelectedTab('OUTPUT');
    } else {
      setSelectedTab('INPUT');
    }
  }, [isExcution]);

  return (
    <S.Container disabled={disabled}>
      <S.TabList>
        {Object.entries(RUNNER_TAB).map(([key, label]) => (
          <S.Tab
            key={key}
            select={selectedTab === key}
            onClick={() => {
              setSelectedTab(key as keyof typeof RUNNER_TAB);
              if (key === 'INPUT') {
                setIsExcution(false);
              }
            }}
          >
            {label}
          </S.Tab>
        ))}
      </S.TabList>

      {selectedTab === 'INPUT' ? (
        <S.Runner
          placeholder='여기에 입력하세요.'
          onChange={(e) => setInput && setInput(e.target.value)}
        />
      ) : (
        <S.RunnerResult>{output || '실행 결과가 여기에 표시됩니다.'}</S.RunnerResult>
      )}
    </S.Container>
  );
}
