import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Loading from '@pages/Loading';
import useEnterSpace from '@hooks/space/useEnterSpace';
import useStompClient from '@hooks/utils/useSoket';

export default function SpaceEnter() {
  const { codingSpaceId } = useParams<{ codingSpaceId: string }>();
  const { enterSpaceMutate, isLoading } = useEnterSpace(Number(codingSpaceId));

  const client = useStompClient();
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    enterSpaceMutate(codingSpaceId);
  }, [codingSpaceId, enterSpaceMutate]);

  useEffect(() => {
    if (!client) return;

    const checkConnection = setInterval(() => {
      if (client.connected) {
        setIsConnected(true);
        clearInterval(checkConnection);
      }
    }, 100);

    return () => clearInterval(checkConnection);
  }, [client]);

  if (isLoading || !client || !isConnected) return <Loading />;

  return <Outlet context={{ client }} />;
}
