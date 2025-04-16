import Tag from '@components/_common/atoms/Tag';
import { formatDate } from '@utils/formatDate';
import TagList from '@components/_common/molecules/TagList';
import TextEditor from '@components/_common/atoms/TextEditor';
import { StudyData } from '@customTypes/study';
import { useUserStore } from '@stores/useUserStore';

import S from './style';
import DescriptionHeader from './DescriptionHeader';

interface StudyDescriptionProps extends Omit<StudyData, 'currentUserCount' | 'joinable'> {
  isStudy?: boolean;
}

export default function StudyDescription({
  id,
  name,
  status,
  languages,
  workbooks,
  description,
  totalUserCount,
  createdAt,
  leader,
  isStudy,
}: StudyDescriptionProps) {
  const userId = useUserStore((state) => state.userId);

  return (
    <S.Container>
      <DescriptionHeader
        isLeader={leader.id === userId}
        isStudy={isStudy}
        leader={leader}
        studyId={id}
        name={name}
      />

      <S.Body>
        <S.StudyName>{name}</S.StudyName>

        <S.TagContainer>
          <S.Label>공개 여부</S.Label>
          <Tag color='primary'>{status === 'PUBLIC' ? '공개' : '비공개'}</Tag>

          <S.Label>모집 인원</S.Label>
          <Tag color='secondary'>{`${totalUserCount} 명`}</Tag>

          <S.Label>시작 날짜</S.Label>
          <Tag color='triadic'>{formatDate(createdAt) || '정보 없음'}</Tag>

          <S.Label>주력 언어</S.Label>
          <TagList
            items={languages}
            color='analogous'
          />

          <S.Label>사용 플랫폼</S.Label>
          <TagList
            items={workbooks}
            color='gray'
          />
        </S.TagContainer>

        <S.StudyIntro>스터디 소개</S.StudyIntro>
        <TextEditor
          value={description}
          readOnly
        />
      </S.Body>
    </S.Container>
  );
}
