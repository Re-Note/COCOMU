import { useEffect, useState } from 'react';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { STOMP_ENDPOINTS } from '@constants/api';

export default function useStompClient() {
  const [client, setClient] = useState<Client | null>(null);

  useEffect(() => {
    const socket = new SockJS(STOMP_ENDPOINTS.CONNECT);
    const stompClient = new Client({
      webSocketFactory: () => socket,
      connectHeaders: { Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}` },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });

    stompClient.activate();
    setClient(stompClient);

    return () => {
      if (stompClient.connected) {
        stompClient.deactivate();
      }
    };
  }, []);

  return client;
}
