export const getUserInfoResponse = {
  code: 9999,
  message: '응답 성공 메시지입니다.',
  result: {
    id: 1,
    nickname: '코코무',
    profileImageUrl: 'https://cdn.cocomu.co.kr/images/profile.png',
    me: true,
  },
};

export const getUserInfoErrorResponse = {
  code: -9999,
  message: '예외 메시지입니다.',
};
