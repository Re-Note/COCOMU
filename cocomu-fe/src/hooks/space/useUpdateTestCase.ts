import { useMutation } from '@tanstack/react-query';

import spaceApi from '@api/domain/space';
import { TestCaseIO } from '@customTypes/space';

export default function useUpdateTestCase() {
  const updateTestCaseMutate = useMutation({
    mutationFn: ({ codingSpaceId, testCases }: { codingSpaceId: string; testCases: TestCaseIO }) =>
      spaceApi.updateTestCase(codingSpaceId, testCases),
  });

  return { updateTestCaseMutate };
}
