import { useInfiniteQuery } from '@tanstack/react-query';
import studyApi from '@api/domain/study';
import QUERY_KEYS from '@constants/queryKeys';

interface useGetMemberListProps {
  studyId: string;
}

export default function useGetMemberList({ studyId }: useGetMemberListProps) {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.MEMBER_LIST, studyId],
    queryFn: async ({ pageParam = { lastNickname: null, lastIndex: null } }) => {
      const result = await studyApi.getMemberList(studyId, pageParam);
      return {
        result,
        lastNickname: result.length > 0 ? result[result.length - 1].nickname : null,
        lastIndex: result.length > 0 ? result[result.length - 1].studyUserId : null,
      };
    },
    initialPageParam: { lastNickname: null, lastIndex: null },
    getNextPageParam: (lastPage) =>
      lastPage.lastNickname && lastPage.lastIndex
        ? { lastNickname: lastPage.lastNickname, lastIndex: lastPage.lastIndex }
        : null,
    staleTime: 1000 * 60 * 3,
  });
}
