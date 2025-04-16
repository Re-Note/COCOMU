import spaceApi from '@api/domain/space';
import { ROUTES } from '@constants/path';
import { SpaceStatusData } from '@customTypes/space';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

interface EnterSpaceResponse {
  status: SpaceStatusData;
}

export default function useEnterSpace(codingSpaceId: number, onSuccessCallback?: () => void) {
  const navigate = useNavigate();

  const mutation: UseMutationResult<EnterSpaceResponse, unknown, string> = useMutation({
    mutationFn: spaceApi.enter,
    onSuccess: ({ status }) => {
      if (onSuccessCallback) {
        onSuccessCallback();
      }
      navigate(ROUTES.SPACE[status]({ codingSpaceId }), { replace: true });
    },
    onError: () => {
      navigate(-1);
    },
  });

  return { enterSpaceMutate: mutation.mutate, isLoading: mutation.isPending };
}
