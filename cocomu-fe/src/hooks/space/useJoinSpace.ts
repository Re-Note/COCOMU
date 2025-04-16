import spaceApi from '@api/domain/space';
import { useMutation } from '@tanstack/react-query';

export default function useJoinSpace({ navigate }: { navigate?: (id: number) => void }) {
  const joinSpaceMutate = useMutation({
    mutationFn: spaceApi.join,
    onSuccess: ({ codingSpaceId }) => {
      navigate(codingSpaceId);
    },
  });

  return { joinSpaceMutate };
}
