import { useMutation, useQueryClient } from '@tanstack/react-query';
import studyApi from '@api/domain/study';
import QUERY_KEYS from '@constants/queryKeys';

export default function useLeaveStudy({ navigate }: { navigate?: () => void }) {
  const queryClient = useQueryClient();

  const leaveStudyMutate = useMutation({
    mutationFn: studyApi.leave,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDY_LIST] });
      navigate?.();
    },
  });

  return { leaveStudyMutate };
}
