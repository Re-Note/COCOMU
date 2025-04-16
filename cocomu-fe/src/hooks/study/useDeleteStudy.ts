import { useMutation, useQueryClient } from '@tanstack/react-query';
import studyApi from '@api/domain/study';
import QUERY_KEYS from '@constants/queryKeys';

export default function useDeleteStudy({ navigate }: { navigate?: () => void }) {
  const queryClient = useQueryClient();

  const deleteStudyMutate = useMutation({
    mutationFn: (studyId: string) => studyApi.delete(studyId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDY_LIST] });
      navigate?.();
    },
  });

  return { deleteStudyMutate };
}
