export const refreshToken = 'cocomuRefreshToken';

export const loginResponse = {
  code: 1000,
  message: '로그인에 성공했습니다.',
  result: {
    accessToken: 'cocomuAccessToken',
  },
};

export const loginErrorResponse = {
  code: 1001,
  message: '로그인에 실패했습니다.',
};

export const reIssueResponse = {
  code: 1000,
  message: '새로운 토큰 발급에 성공했습니다.',
  result: {
    accessToken: 'cocomuAccessToken',
  },
};
