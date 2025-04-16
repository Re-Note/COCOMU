import { useEffect, useState } from 'react';
import { BsX } from 'react-icons/bs';
import { ToastType, useToastStore } from '@stores/useToastStore';
import Icon from '../Icon';
import S from './style';

interface ToastProps {
  id: number;
  message: string;
  type: ToastType;
  visible: boolean;
}

export function Toast({ id, message, type, visible }: ToastProps) {
  const removeToast = useToastStore((state) => state.removeToast);

  return (
    <S.ToastContainer visible={visible}>
      <S.Header>
        <S.Icon onClick={() => removeToast(id)}>
          <Icon
            size='sm'
            color='700'
          >
            <BsX />
          </Icon>
        </S.Icon>
      </S.Header>
      <S.ToastContent type={type}>{message}</S.ToastContent>
      <S.ProgressBar type={type} />
      <S.ShrinkBar type={type} />
    </S.ToastContainer>
  );
}

export default function ToastModal({ id, message, type }: Omit<ToastProps, 'visible'>) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Toast
      id={id}
      message={message}
      type={type}
      visible={visible}
    />
  );
}
