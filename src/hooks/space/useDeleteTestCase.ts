import { useMutation } from '@tanstack/react-query';
import spaceApi from '@api/domain/space';

export default function useDeleteTestCase() {
  const deleteTestCaseMutate = useMutation({
    mutationFn: ({ codingSpaceId, testCasesId }: { codingSpaceId: string; testCasesId: string }) =>
      spaceApi.deleteTestCase(codingSpaceId, testCasesId),
  });

  return { deleteTestCaseMutate };
}
