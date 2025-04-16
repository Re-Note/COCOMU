import userApi from '@api/domain/user';
import QUERY_KEYS from '@constants/queryKeys';
import { useToastStore } from '@stores/useToastStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useEditUser() {
  const queryClient = useQueryClient();
  const { alert } = useToastStore();

  const editUserMutate = useMutation({
    mutationFn: userApi.edit,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.MY_INFO] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USER_STUDY_LIST], exact: false });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USER_SPACE_LIST], exact: false });
      alert('프로필 수정이 완료되었습니다!');
    },
  });

  return { editUserMutate };
}
