import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import useGetFinishPage from '@hooks/space/useGetFinishPage';

import CodingWorkspace from '@components/Space/CodingWorkspace';
import SpaceFooter from '@components/Space/SpaceFooter';
import SpaceNavbar from '@components/Space/SpaceNavbar';
import { ActiveTab } from '@customTypes/space';
import { ROUTES } from '@constants/path';
import Loading from '@pages/Loading';

import S from './style';

export default function SpaceFinish() {
  const navigate = useNavigate();
  const { codingSpaceId } = useParams();

  const [users, setUsers] = useState<ActiveTab[]>([]);
  const [selectTab, setSelectTab] = useState<ActiveTab | null>(null);
  const [triggerApiCall, setTriggerApiCall] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTriggerApiCall(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const { data, isLoading } = useGetFinishPage(triggerApiCall ? codingSpaceId : null);

  const handleStart = () => {
    if (data?.studyId) {
      navigate(ROUTES.STUDY.DETAIL({ studyId: data.studyId }));
    }
  };

  useEffect(() => {
    if (!data?.allFinishedTabs) return;
    setUsers(data.allFinishedTabs);
    setSelectTab(data.allFinishedTabs.length > 0 ? data.allFinishedTabs[0] : null);
  }, [data]);

  if (isLoading || !data) return <Loading />;

  return (
    <S.Container>
      <SpaceNavbar
        name={data.name}
        onClick={handleStart}
        studyId={data?.studyId}
        exitPage
      />

      <CodingWorkspace
        description={data.description}
        workbookUrl={data.workbookUrl}
        language={data.language}
        activeTabs={users}
        code={selectTab?.code || ''}
        selectUser={setSelectTab}
        finish
      />

      <SpaceFooter
        codingSpaceId={codingSpaceId}
        testCases={data.testCases}
      />
    </S.Container>
  );
}
