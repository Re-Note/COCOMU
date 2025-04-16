import TextEditor from '@components/_common/atoms/TextEditor';
import S from './style';

interface ProblemDescriptionProps {
  description: string;
  workbookUrl: string;
}

export default function ProblemDescription({ description, workbookUrl }: ProblemDescriptionProps) {
  return (
    <S.ProblemDescription>
      <TextEditor
        value={description}
        readOnly
      />
      <S.ReferenceContainer>
        출처 :
        <a
          href={workbookUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          {workbookUrl}
        </a>
      </S.ReferenceContainer>
    </S.ProblemDescription>
  );
}
