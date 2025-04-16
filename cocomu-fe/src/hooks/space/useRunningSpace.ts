import { useMutation } from '@tanstack/react-query';
import spaceApi from '@api/domain/space';

export default function useFeedBackSpace() {
  const feedBackSpaceMutate = useMutation({
    mutationFn: spaceApi.feedback,
  });

  return { feedBackSpaceMutate };
}
