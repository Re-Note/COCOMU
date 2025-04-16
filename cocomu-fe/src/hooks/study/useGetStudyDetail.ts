import { useQuery } from '@tanstack/react-query';

import studyApi from '@api/domain/study';
import QUERY_KEYS from '@constants/queryKeys';

export default function useGetStudyDetail(studyId: string) {
  return useQuery({
    queryKey: [QUERY_KEYS.STUDY_DETAIL, studyId],
    queryFn: () => studyApi.getDetail(studyId),
    enabled: !!studyId,
    staleTime: 1000 * 10,
  });
}
