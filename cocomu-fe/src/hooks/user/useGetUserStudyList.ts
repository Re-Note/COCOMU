import { useInfiniteQuery } from '@tanstack/react-query';
import userApi from '@api/domain/user';
import QUERY_KEYS from '@constants/queryKeys';

export default function useGetUserStudyList(userId: string) {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.USER_STUDY_LIST, userId],
    queryFn: async ({ pageParam = null }) => {
      const result = await userApi.getStudyList(userId, pageParam);
      return { result, lastIndex: result.length > 0 ? result[result.length - 1].id : null };
    },
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.lastIndex,
  });
}
