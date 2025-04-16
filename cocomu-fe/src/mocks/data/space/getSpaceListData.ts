export const getSpaceListResponse = {
  code: 4000,
  message: '코딩 스페이스 목록 조회에 성공했습니다.',
  result: {
    codingSpaces: [
      {
        id: 3,
        joinedMe: true,
        name: '[BOJ-1003, Silver3] 피보나치 함수',
        language: {
          id: 1,
          name: 'java',
          imageUrl: 'https://cdn.cocomu.co.kr/images/languages/java.png',
        },
        currentUserCount: 1,
        totalUserCount: 4,
        createdAt: '2025-03-09T03:05:07.718783',
        status: 'WAITING',
        currentUsers: [
          {
            id: 3,
            nickname: '복원빈',
            profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
            role: 'HOST',
          },
        ],
      },
      {
        id: 2,
        joinedMe: true,
        name: '[BOJ-1003, Silver3] 피보나치 함수',
        language: {
          id: 1,
          name: 'java',
          imageUrl: 'https://cdn.cocomu.co.kr/images/languages/java.png',
        },
        currentUserCount: 1,
        totalUserCount: 4,
        createdAt: '2025-03-09T03:05:04.495158',
        status: 'WAITING',
        currentUsers: [
          {
            id: 3,
            nickname: '복원빈',
            profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
            role: 'HOST',
          },
        ],
      },
      {
        id: 1,
        joinedMe: true,
        name: '[BOJ-1003, Silver3] 피보나치 함수',
        language: {
          id: 1,
          name: 'java',
          imageUrl: 'https://cdn.cocomu.co.kr/images/languages/java.png',
        },
        currentUserCount: 1,
        totalUserCount: 4,
        createdAt: '2025-03-09T03:04:54.654631',
        status: 'FEEDBACK',
        currentUsers: [
          {
            id: 3,
            nickname: '복원빈',
            profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
            role: 'HOST',
          },
        ],
      },
    ],
    lastId: 1,
  },
};

export const getSpaceListErrorResponse = {
  code: 4200,
  message: '코딩 스페이스 목록 조회에 실패했습니다.',
};
