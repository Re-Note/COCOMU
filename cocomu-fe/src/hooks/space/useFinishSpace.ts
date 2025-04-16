import { useMutation } from '@tanstack/react-query';

import spaceApi from '@api/domain/space';

export default function useFinishSpace() {
  const finishSpaceMutate = useMutation({
    mutationFn: spaceApi.finish,
  });

  return { finishSpaceMutate };
}
