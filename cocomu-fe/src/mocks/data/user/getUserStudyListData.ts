export const getUserStudyListResponse = {
  code: 9999,
  message: '응답 성공 메시지입니다.',
  result: [
    {
      id: 1,
      joinable: false,
      name: '코코무 스터디',
      status: 'PUBLIC',
      languages: [
        {
          id: 1,
          name: 'JAVA',
          imageUrl: 'https://cdn.cocomu.co.kr/...',
        },
      ],
      workbooks: [
        {
          id: 1,
          name: '백준',
          imageUrl: 'https://cdn.cocomu.co.kr/..',
        },
      ],
      description: '열심히 하는 스터디',
      currentUserCount: 1,
      totalUserCount: 100,
      createdAt: '2025-03-13T06:39:21.850Z',
      leader: {
        id: 1,
        nickname: '코코무',
        profileImageUrl: 'https://cdn.cocomu.co.kr/images/...',
      },
    },
  ],
};

export const getUserStudyListErrorResponse = {
  code: -9999,
  message: '예외 메시지입니다.',
};
