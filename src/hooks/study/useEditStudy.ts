import studyApi from '@api/domain/study';
import { ROUTES } from '@constants/path';
import QUERY_KEYS from '@constants/queryKeys';
import { EditStudyData } from '@customTypes/study';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export default function useEditStudy() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const editStudyMutate = useMutation({
    mutationFn: ({ studyId, editStudyData }: { studyId: string; editStudyData: EditStudyData }) =>
      studyApi.edit(studyId, editStudyData),
    onSuccess: (studyId) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDY_DETAIL, studyId] });
      navigate(ROUTES.STUDY.DETAIL({ studyId }), { replace: true });
    },
  });

  return { editStudyMutate };
}
