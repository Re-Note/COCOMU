import spaceApi from '@api/domain/space';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

export default function useSaveTabCode() {
  const [isCooldown, setIsCooldown] = useState(false);

  const saveTabCodeMutate = useMutation({
    mutationFn: async ({ codingSpaceId, code }: { codingSpaceId: string; code: { code: string } }) => {
      if (isCooldown) {
        return Promise.reject(new Error('Cooldown active'));
      }

      setIsCooldown(true);
      const response = await spaceApi.codesave(codingSpaceId, code);

      setTimeout(() => {
        setIsCooldown(false);
      }, 2000);

      return response;
    },
  });

  return { saveTabCodeMutate, isCooldown };
}
