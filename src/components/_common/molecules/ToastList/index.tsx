import ToastModal from '@components/_common/atoms/Toast';
import { useToastStore } from '@stores/useToastStore';
import S from './style';

export default function ToastList() {
  const toasts = useToastStore((state) => state.toasts);

  return (
    <S.ListContainer>
      {toasts.map(({ id, type, message }) => (
        <ToastModal
          key={id}
          id={id}
          type={type}
          message={message}
        />
      ))}
    </S.ListContainer>
  );
}
