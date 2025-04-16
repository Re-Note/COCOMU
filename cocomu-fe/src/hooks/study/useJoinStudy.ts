import studyApi from '@api/domain/study';
import QUERY_KEYS from '@constants/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useJoinStudy({ navigate }: { navigate?: (id: number) => void }) {
  const queryClient = useQueryClient();

  const joinPublicStudyMutate = useMutation({
    mutationFn: studyApi.joinPublic,
    onSuccess: (studyId) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDY_DETAIL, studyId] });
      navigate(studyId);
    },
  });

  const joinPrivateStudyMutate = useMutation({
    mutationFn: ({ studyId, password }: { studyId: string; password: string }) =>
      studyApi.joinPrivate(studyId, password!),
    onSuccess: (studyId) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDY_DETAIL, studyId] });
      navigate(studyId);
    },
  });

  return { joinPublicStudyMutate, joinPrivateStudyMutate };
}
