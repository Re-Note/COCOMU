import { axiosInstance } from '@api/axiosInstance';
import authApi from '@api/domain/auth';
import { ACCESS_TOKEN_KEY } from '@constants/api';
import { ROUTES } from '@constants/path';
import { useUserStore } from '@stores/useUserStore';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export default function useLogIn() {
  const checkAuth = useUserStore((state) => state.checkAuth);
  const navigate = useNavigate();

  const logInMutate = useMutation({
    mutationFn: authApi.login,
    onSuccess: ({ accessToken }) => {
      localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
      axiosInstance.defaults.headers.Authorization = `Bearer ${accessToken}`;

      checkAuth();
      navigate(ROUTES.ROOT());
    },
  });

  return {
    logInMutate,
  };
}
