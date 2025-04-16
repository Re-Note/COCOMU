export const getUserSpaceListResponse = {
  code: 9999,
  message: '응답 성공 메시지입니다.',
  result: [
    {
      id: 1,
      joinedMe: true,
      name: '[BOJ, Silver] 1130',
      language: {
        id: 1,
        name: 'JAVA',
        imageUrl: 'https://cdn.cocomu.co.kr/...',
      },
      currentUserCount: 1,
      totalUserCount: 2,
      createdAt: '2025-03-13T06:37:12.754Z',
      status: 'WAITING',
      currentUsers: [
        {
          id: 1,
          nickname: '코코무',
          profileImageUrl: 'https://cdn.cocomu.co.kr/images/...',
          role: 'HOST',
          myTab: true,
        },
      ],
    },
  ],
};

export const getUserSpaceListErrorResponse = {
  code: -9999,
  message: '예외 메시지입니다.',
};
