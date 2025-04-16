import spaceApi from '@api/domain/space';
import { useMutation } from '@tanstack/react-query';

export default function useExcution() {
  const excutionMutate = useMutation({
    mutationFn: spaceApi.excution,
  });

  return { excutionMutate };
}
