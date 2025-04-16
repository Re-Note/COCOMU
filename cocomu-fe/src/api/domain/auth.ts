import { axiosInstance } from '@api/axiosInstance';
import { END_POINTS_V1 } from '@constants/api';
import { LogInData } from '@customTypes/auth';

const authApi = {
  login: async (logInData: LogInData) => {
    const { data } = await axiosInstance.post(END_POINTS_V1.AUTH.OAUTH_LOGIN, logInData, {
      useAuth: false,
      withCredentials: false,
    });

    return data.result;
  },

  reIssue: async () => {
    const { data } = await axiosInstance.post(END_POINTS_V1.AUTH.REFRESH_TOKEN);

    return data.result;
  },
};

export default authApi;
