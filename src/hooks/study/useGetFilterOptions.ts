import { useQuery } from '@tanstack/react-query';

import studyApi from '@api/domain/study';
import QUERY_KEYS from '@constants/queryKeys';

export default function useGetFilterOptions() {
  return useQuery({
    queryKey: [QUERY_KEYS.STUDY_FILTER],
    queryFn: () => studyApi.getFilterOptions(),
    staleTime: 1000 * 60 * 5,
  });
}
