import userApi from '@api/domain/user';
import { useMutation } from '@tanstack/react-query';

export default function useUploadUserImage() {
  const uploadUserImageMutate = useMutation({
    mutationFn: userApi.uploadImage,
  });

  return {
    uploadUserImageMutate: uploadUserImageMutate.mutate,
    isLoading: uploadUserImageMutate.isPending,
  };
}
