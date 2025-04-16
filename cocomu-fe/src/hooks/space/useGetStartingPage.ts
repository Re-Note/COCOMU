import { useQuery } from '@tanstack/react-query';

import QUERY_KEYS from '@constants/queryKeys';
import spaceApi from '@api/domain/space';

export default function useGetStartingPage(codingSpaceId: string | null) {
  return useQuery({
    queryKey: [QUERY_KEYS.SPACE_START_PAGE, codingSpaceId],
    queryFn: () => spaceApi.getStartingPage(codingSpaceId!),
    enabled: !!codingSpaceId,
  });
}
