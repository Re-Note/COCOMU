import { useQuery } from '@tanstack/react-query';

import QUERY_KEYS from '@constants/queryKeys';
import userApi from '@api/domain/user';

export default function useGetMyInfo({ enabled }: { enabled: boolean }) {
  return useQuery({
    queryKey: [QUERY_KEYS.MY_INFO],
    queryFn: () => userApi.getMyInfo(),
    enabled,
  });
}
