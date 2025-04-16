import { useInfiniteQuery } from '@tanstack/react-query';
import spaceApi from '@api/domain/space';
import QUERY_KEYS from '@constants/queryKeys';
import { SpaceListData } from '@customTypes/space';

interface UseGetSpaceListProps {
  studyId: string;
  params: Omit<SpaceListData, 'lastId'>;
}

export default function useGetSpaceList({ studyId, params }: UseGetSpaceListProps) {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.SPACE_LIST, studyId, params],
    queryFn: ({ pageParam = null }) => spaceApi.getList(studyId, { ...params, lastId: pageParam }),
    initialPageParam: null,
    getNextPageParam: (lastPage) => {
      if (!lastPage?.codingSpaces.length) return null;
      return lastPage.lastId ?? null;
    },
  });
}
