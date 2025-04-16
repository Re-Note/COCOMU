import { useMutation } from '@tanstack/react-query';

import spaceApi from '@api/domain/space';

export default function useStartSpace() {
  const startSpaceMutate = useMutation({
    mutationFn: spaceApi.start,
  });

  return { startSpaceMutate };
}
