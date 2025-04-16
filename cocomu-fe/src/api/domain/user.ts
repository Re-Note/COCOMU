import { axiosInstance } from '@api/axiosInstance';
import { END_POINTS_V1 } from '@constants/api';
import { EditUserData } from '@customTypes/user';

const userApi = {
  getMyInfo: async () => {
    const { data } = await axiosInstance.get(END_POINTS_V1.USER.MY_INFO);

    return data.result;
  },

  getInfo: async (userId: string) => {
    const { data } = await axiosInstance.get(END_POINTS_V1.USER.INFO(userId));

    return data.result;
  },

  getStudyList: async (userId: string, lastIndex: string | null) => {
    const { data } = await axiosInstance.get(END_POINTS_V1.USER.MY_STUDY_LIST(userId), {
      params: { lastIndex },
    });

    return data.result;
  },

  getSpaceList: async (userId: string, lastIndex: string | null) => {
    const { data } = await axiosInstance.get(END_POINTS_V1.USER.MY_SPACE_LIST(userId), {
      params: { lastIndex },
    });

    return data.result;
  },

  edit: async (editUserData: EditUserData) => {
    await axiosInstance.post(END_POINTS_V1.USER.EDIT, editUserData);
  },

  uploadImage: async (file: File) => {
    const formData = new FormData();
    formData.append('image', file);

    const { data } = await axiosInstance.post(END_POINTS_V1.USER.IMAGE_UPLOAD, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return data.result;
  },
};

export default userApi;
