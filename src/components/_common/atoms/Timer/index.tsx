import { useEffect, useRef, useState } from 'react';
import { generateTimer } from '@utils/timeUtils';
import S from './style';

interface TimerProps {
  timer: number;
  startTime?: string;
  hostMe: boolean;
  onTimeout?: () => void;
}

export default function Timer({ timer, startTime, onTimeout, hostMe }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState<number>(timer * 60);
  const timeoutCalledRef = useRef(false);

  useEffect(() => {
    if (!startTime) return;

    const startTimestamp = new Date(startTime).getTime();
    const endTimestamp = startTimestamp + timer * 60 * 1000;

    const updateTimer = () => {
      const now = Date.now();
      const remainingSeconds = Math.max(0, Math.floor((endTimestamp - now) / 1000));
      setTimeLeft(remainingSeconds);

      if (remainingSeconds === 0 && onTimeout && !timeoutCalledRef.current) {
        timeoutCalledRef.current = true;
        if (hostMe) {
          onTimeout();
        }
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [timer, startTime, onTimeout]);

  return <S.Timer>{generateTimer(timeLeft)}</S.Timer>;
}
