import { useMutation } from '@tanstack/react-query';
import spaceApi from '@api/domain/space';

export default function useDeleteSpace() {
  const deleteStudyMutate = useMutation({
    mutationFn: spaceApi.delete,
  });

  return { deleteStudyMutate };
}
