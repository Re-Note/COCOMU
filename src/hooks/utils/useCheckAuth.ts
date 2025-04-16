import { useUserStore } from '@stores/useUserStore';
import { useModalStore } from '@stores/useModalStore';

export default function useCheckAuth() {
  const { isLoggedIn } = useUserStore();
  const { open } = useModalStore();

  const checkAuth = (callback?: () => void) => {
    if (!isLoggedIn) {
      open('login');
      return false;
    }

    if (callback) {
      callback();
    }

    return true;
  };

  return { checkAuth };
}
