import { useQuery } from '@tanstack/react-query';

import studyApi from '@api/domain/study';
import QUERY_KEYS from '@constants/queryKeys';
import { GetListData } from '@customTypes/study';

export default function useGetStudyList(params: GetListData) {
  return useQuery({
    queryKey: [QUERY_KEYS.STUDY_LIST, params],
    queryFn: () => studyApi.getList(params),
  });
}
