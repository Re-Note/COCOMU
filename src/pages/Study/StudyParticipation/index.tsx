import { useNavigate, useParams } from 'react-router-dom';

import { BsArrowLeft } from 'react-icons/bs';

import { ROUTES } from '@constants/path';

import { useModalStore } from '@stores/useModalStore';

import useCheckAuth from '@hooks/utils/useCheckAuth';
import useGetStudyInfo from '@hooks/study/useGetStudyInfo';

import IconButton from '@components/_common/atoms/IconButton';
import StudyDescription from '@components/Study/StudyDescription';
import Button from '@components/_common/atoms/Button';

import Loading from '@pages/Loading';

import S from './style';

export default function StudyParticipation() {
  const navigate = useNavigate();
  const { open } = useModalStore();
  const { studyId } = useParams<{ studyId: string }>();
  const { checkAuth } = useCheckAuth();
  const { data, isLoading } = useGetStudyInfo(studyId);

  const handleJoinClick = () => {
    if (data.status === 'PUBLIC') {
      open('confirm', {
        studyId,
        name: data.name,
        navigate: (id: number) => navigate(ROUTES.STUDY.DETAIL({ studyId: id })),
      });
    } else if (data.status === 'PRIVATE') {
      open('passwordInput', {
        studyId,
        navigate: (id: number) => navigate(ROUTES.STUDY.DETAIL({ studyId: id })),
      });
    }
  };

  if (isLoading) return <Loading />;

  return (
    <S.Container>
      <S.Header>
        <IconButton
          content='다른 스터디 보러가기'
          onClick={() => navigate(ROUTES.ROOT())}
        >
          <BsArrowLeft />
        </IconButton>
      </S.Header>

      <StudyDescription
        id={data.id}
        name={data.name}
        status={data.status}
        languages={data.languages}
        workbooks={data.workbooks}
        description={data.description}
        totalUserCount={data.totalUserCount}
        createdAt={data.createdAt}
        leader={data.leader}
      />

      <S.Footer>
        <Button
          size='lg'
          color='primary'
          shape='default'
          onClick={() => checkAuth(handleJoinClick)}
        >
          참여하기
        </Button>
      </S.Footer>
    </S.Container>
  );
}
