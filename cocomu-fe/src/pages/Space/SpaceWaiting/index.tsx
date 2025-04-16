import { useState, useEffect } from 'react';
import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import { Client } from '@stomp/stompjs';

import useGetWaitingPage from '@hooks/space/useGetWaitingPage';
import useStartSpace from '@hooks/space/useStartSpace';

import CodingWorkspace from '@components/Space/CodingWorkspace';
import SpaceFooter from '@components/Space/SpaceFooter';
import SpaceNavbar from '@components/Space/SpaceNavbar';
import Loading from '@pages/Loading';

import { useModalStore } from '@stores/useModalStore';

import { UserRoleData } from '@customTypes/user';

import { STOMP_ENDPOINTS } from '@constants/api';
import { WAITING_INFO } from '@constants/modal';

import S from './style';

interface OutletContextType {
  client: Client | null;
}

export default function SpaceWaiting() {
  const { codingSpaceId } = useParams<{ codingSpaceId: string }>();
  const { client } = useOutletContext<OutletContextType>();
  const navigate = useNavigate();
  const { open } = useModalStore();

  const [users, setUsers] = useState<UserRoleData[]>([]);
  const { startSpaceMutate } = useStartSpace();
  const { data, isLoading } = useGetWaitingPage(codingSpaceId);

  useEffect(() => {
    if (!client || !client.connected || !codingSpaceId) return;

    if (data?.activeUsers) {
      setUsers(data.activeUsers);
    }

    const subscription = client.subscribe(STOMP_ENDPOINTS.SPACE_SUBSCRIBE(codingSpaceId), (msg) => {
      const object = JSON.parse(msg.body);

      if (object.type === 'STUDY_START') {
        open('waiting', {
          label: WAITING_INFO.running.label,
          description: WAITING_INFO.running.description,
          navigate: navigate(WAITING_INFO.running.navigate(Number(codingSpaceId)), { replace: true }),
        });
        return;
      }

      setUsers((prev) => {
        if (object.type === 'USER_ENTER') {
          return prev.some((user) => user.id === object.data.id) ? prev : [...prev, object.data];
        }
        if (object.type === 'USER_LEAVE') {
          return prev.filter((user) => user.id !== object.data.id);
        }
        return prev;
      });
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [data]);

  const handleStart = () => {
    startSpaceMutate.mutate(codingSpaceId);
  };

  if (isLoading) return <Loading />;

  return (
    <S.Container>
      <SpaceNavbar
        name={data.name}
        timer={data.codingMinutes}
        isLeader={data.hostMe}
        buttonLabel='문제 풀이 시작'
        onClick={handleStart}
        exitPage
      />

      <CodingWorkspace
        description={data.description}
        workbookUrl={data.workbookUrl}
        language={data.language}
        activeUsers={users}
        totalUserCount={data.totalUserCount}
        disabled
      />

      <SpaceFooter
        codingSpaceId={codingSpaceId}
        testCases={data.testCases}
      />
    </S.Container>
  );
}
