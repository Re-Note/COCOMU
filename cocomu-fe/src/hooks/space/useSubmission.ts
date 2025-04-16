import spaceApi from '@api/domain/space';
import { useMutation } from '@tanstack/react-query';

export default function useSubmission() {
  const subMissionMutate = useMutation({
    mutationFn: spaceApi.submission,
  });

  return { subMissionMutate };
}
