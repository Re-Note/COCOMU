import { useQuery } from '@tanstack/react-query';

import QUERY_KEYS from '@constants/queryKeys';
import spaceApi from '@api/domain/space';

export default function useGetFinishPage(codingSpaceId: string) {
  return useQuery({
    queryKey: [QUERY_KEYS.SPACE_FINISH_PAGE, codingSpaceId],
    queryFn: () => spaceApi.getFinishPage(codingSpaceId),
    enabled: !!codingSpaceId,
  });
}
