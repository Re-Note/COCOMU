import { useInfiniteQuery } from '@tanstack/react-query';
import userApi from '@api/domain/user';
import QUERY_KEYS from '@constants/queryKeys';

export default function useGetUserSpaceList(userId: string) {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.USER_SPACE_LIST, userId],
    queryFn: async ({ pageParam = null }) => {
      const result = await userApi.getSpaceList(userId, pageParam);
      return { result, lastIndex: result.length > 0 ? result[result.length - 1].id : null };
    },
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.lastIndex,
  });
}
