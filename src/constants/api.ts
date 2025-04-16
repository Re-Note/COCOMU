export const BASE_URL = import.meta.env.VITE_API_URL;
const API_V1 = import.meta.env.VITE_API_V1;

export const YORKIE_URL = import.meta.env.VITE_YORKIE_URL;
export const YORKIE_API_KEY = import.meta.env.VITE_YORKIE_API_KEY;

const BASE_PATH_V1 = {
  STUDY: `${API_V1}/studies`,
  CODING_SPACE: `${API_V1}/coding-spaces`,
  EXECUTOR: `${API_V1}/executor`,
  USER: `${API_V1}/users`,
  AUTH: `${API_V1}/auth`,
};

export const END_POINTS_V1 = {
  STUDY: {
    LIST: BASE_PATH_V1.STUDY,
    FILTER_OPTIONS: `${BASE_PATH_V1.STUDY}/filter-options`,
    PUBLIC_CREATE: `${BASE_PATH_V1.STUDY}/public`,
    PRIVATE_CREATE: `${BASE_PATH_V1.STUDY}/private`,
    PUBLIC_JOIN: (studyId: string) => `${BASE_PATH_V1.STUDY}/public/${studyId}/join`,
    PRIVATE_JOIN: (studyId: string) => `${BASE_PATH_V1.STUDY}/private/${studyId}/join`,
    EDIT: (studyId: string) => `${BASE_PATH_V1.STUDY}/${studyId}/edit`,
    LEAVE: (studyId: string) => `${BASE_PATH_V1.STUDY}/${studyId}/leave`,
    DELETE: (studyId: string) => `${BASE_PATH_V1.STUDY}/${studyId}/remove`,
    DETAIL: (studyId: string) => `${BASE_PATH_V1.STUDY}/${studyId}`,
    MEMBER_LIST: (studyId: string) => `${BASE_PATH_V1.STUDY}/${studyId}/members`,
    INFO: (studyId: string) => `${BASE_PATH_V1.STUDY}/${studyId}/study-information`,
    PARTICIPATED_STUDIES: (userId: string) => `${BASE_PATH_V1.STUDY}/me/${userId}`,
    JOINED: (userId: string) => `${BASE_PATH_V1.STUDY}/me/${userId}`,
  },

  CODING_SPACE: {
    CREATE: BASE_PATH_V1.CODING_SPACE,
    LIST: (studyId: string) => `${BASE_PATH_V1.CODING_SPACE}/studies/${studyId}`,
    JOIN: (codingSpaceId: string) => `${BASE_PATH_V1.CODING_SPACE}/${codingSpaceId}`,
    ENTER: (codingSpaceId: string) => `${BASE_PATH_V1.CODING_SPACE}/${codingSpaceId}/enter`,
    DELETE: (codingSpaceId: string) => `${BASE_PATH_V1.CODING_SPACE}/${codingSpaceId}`,

    WAITING_PAGE: (codingSpaceId: string) => `${BASE_PATH_V1.CODING_SPACE}/${codingSpaceId}/waiting-page`,
    STARTING_PAGE: (codingSpaceId: string) => `${BASE_PATH_V1.CODING_SPACE}/${codingSpaceId}/starting-page`,
    FINISH_PAGE: (codingSpaceId: string) => `${BASE_PATH_V1.CODING_SPACE}/${codingSpaceId}/finish-page`,
    FEEDBACK_PAGE: (codingSpaceId: string) => `${BASE_PATH_V1.CODING_SPACE}/${codingSpaceId}/feedback-page`,

    START: (codingSpaceId: string) => `${BASE_PATH_V1.CODING_SPACE}/${codingSpaceId}/start`,
    SAVE: (codingSpaceId: string) => `${BASE_PATH_V1.CODING_SPACE}/${codingSpaceId}/save`,
    FINISH: (codingSpaceId: string) => `${BASE_PATH_V1.CODING_SPACE}/${codingSpaceId}/finish`,
    FEEDBACK: (codingSpaceId: string) => `${BASE_PATH_V1.CODING_SPACE}/${codingSpaceId}/feedback`,

    TEST_CASE_UPDATE: (codingSpaceId: string) => `${BASE_PATH_V1.CODING_SPACE}/${codingSpaceId}/test-case`,

    TEST_CASE_DELETE: (codingSpaceId: string, testCaseId: string) =>
      `${BASE_PATH_V1.CODING_SPACE}/${codingSpaceId}/test-cases/${testCaseId}`,
    JOINED: (userId: string) => `${BASE_PATH_V1.CODING_SPACE}/me/${userId}`,
  },

  EXECUTOR: {
    EXECUTION: `${BASE_PATH_V1.EXECUTOR}/execution`,
    RESULT: `${BASE_PATH_V1.EXECUTOR}/result`,
    SUBMISSION: `${BASE_PATH_V1.EXECUTOR}/submission`,
  },

  USER: {
    MY_INFO: `${BASE_PATH_V1.USER}/me`,
    EDIT: `${BASE_PATH_V1.USER}/me`,
    IMAGE_UPLOAD: `${BASE_PATH_V1.USER}/me/profile-image`,
    INFO: (userId: string) => `${BASE_PATH_V1.USER}/${userId}`,
    MY_STUDY_LIST: (userId: string) => `${BASE_PATH_V1.USER}/${userId}/studies`,
    MY_SPACE_LIST: (userId: string) => `${BASE_PATH_V1.USER}/${userId}/coding-spaces`,
  },

  AUTH: {
    OAUTH_LOGIN: `${BASE_PATH_V1.AUTH}/oauth-login`,
    REFRESH_TOKEN: `${BASE_PATH_V1.AUTH}/re-issue`,
  },
} as const;

export const STOMP_ENDPOINTS = {
  CONNECT: `${BASE_URL}/stomp`,
  SPACE_SUBSCRIBE: (codingSpaceId: string) => `/sub/v1/coding-spaces/${codingSpaceId}`,
  TAB_SUBSCRIBE: (codingSpaceTabId: string) => `/sub/v1/executor/${codingSpaceTabId}`,
  SUBMISSION_SUBSCRIBE: (codingSpaceTabId: string) => `/sub/v1/executor/${codingSpaceTabId}/submission`,
} as const;

export const HTTP_STATUS_CODE = {
  SUCCESS: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export const ERROR_CODE = {
  EXPIRED_TOKEN: 1102,
  INVALID_SIGNATURE: 1103,
  UNSUPPORTED_TOKEN: 1104,
  INVALID_TOKEN: 1105,
  TOKEN_ERROR: 1106,
  EXTRACTING_ERROR: 1107,
} as const;

export const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;

const KAKAO_CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID;

const OAUTH_BASE_URL = import.meta.env.VITE_OAUTH_BASE_URL;

const REDIRECT_BASE_URL = `${OAUTH_BASE_URL}/callback`;

/* eslint-disable max-len */

export const GOOGLE_AUTH_API_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&response_type=code&scope=profile%20email&redirect_uri=${REDIRECT_BASE_URL}/google`;

export const GITHUB_AUTH_API_URL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${REDIRECT_BASE_URL}/github`;

export const KAKAO_AUTH_API_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_BASE_URL}/kakao`;

/* eslint-enable max-len */
