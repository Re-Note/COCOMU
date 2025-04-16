import { useDraggable } from '@hooks/utils/useDraggable';

import ProblemDescription from './ProblemDescription';
import ResizablePanel from './ResizablePanel';
import CodeExecutor, { CodeExecutorProps } from './CodeExecutor';

import S from './style';

interface CodingWorkspaceProps extends CodeExecutorProps {
  description: string;
  workbookUrl: string;
}

export default function CodingWorkspace({
  description,
  workbookUrl,
  activeTabs,
  language,
  code,
  onCodeChange,
  disabled,
  activeUsers,
  totalUserCount,
  setInput,
  output,
  selectUser,
  finish,
  isSubmission,
  codeSubmit,
  testCaseLegnth,
  isExcution,
  setIsExcution,
}: CodingWorkspaceProps) {
  const { value: width, containerRef, handleMouseDown } = useDraggable({ direction: 'x' });

  return (
    <S.Container ref={containerRef}>
      <ProblemDescription
        description={description}
        workbookUrl={workbookUrl}
      />

      <ResizablePanel
        direction='y'
        onMouseDown={handleMouseDown}
      />

      <S.CodeSection width={100 - width}>
        <CodeExecutor
          activeTabs={activeTabs}
          language={language}
          code={code}
          onCodeChange={onCodeChange}
          disabled={disabled}
          activeUsers={activeUsers}
          totalUserCount={totalUserCount}
          setInput={setInput}
          output={output}
          selectUser={selectUser}
          finish={finish}
          isSubmission={isSubmission}
          codeSubmit={codeSubmit}
          testCaseLegnth={testCaseLegnth}
          isExcution={isExcution}
          setIsExcution={setIsExcution}
        />
      </S.CodeSection>
    </S.Container>
  );
}
