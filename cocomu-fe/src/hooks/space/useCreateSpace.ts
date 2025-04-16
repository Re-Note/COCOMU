import spaceApi from '@api/domain/space';
import { ROUTES } from '@constants/path';
import QUERY_KEYS from '@constants/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export default function useCreateSpace(studyId: number) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const createSpaceMutate = useMutation({
    mutationFn: spaceApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.SPACE_LIST, studyId],
        exact: false,
      });
      navigate(ROUTES.STUDY.DETAIL({ studyId }), { replace: true });
    },
  });

  return { createSpaceMutate };
}
