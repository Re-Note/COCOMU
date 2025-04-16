import axios from 'axios';

import { checkAndSetToken, handleAPIError, handleResponse } from '@api/interceptors';
import { BASE_URL } from '@constants/api';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  withCredentials: true,
  useAuth: true,
  validateStatus: () => true,
});

axiosInstance.interceptors.request.use(checkAndSetToken, handleAPIError);

axiosInstance.interceptors.response.use(handleResponse);
