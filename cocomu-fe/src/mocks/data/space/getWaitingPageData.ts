export const getWaitingPageResponse = {
  code: 4000,
  message: '코딩 스페이스 대기방 조회에 성공했습니다.',
  result: {
    id: 35,
    name: '[BOJ-1003, Silver3] 피보나치 함수',
    description: '다음 소스는 N번째 피보나치 수를 구하는 C++ 함수이다 ...',
    workbookUrl: 'https://www.acmicpc.net/problem/1003',
    hostMe: true,
    codingMinutes: 30,
    totalUserCount: 4,
    language: {
      languageId: 2,
      languageName: 'python',
      languageImageUrl: 'https://cdn.cocomu.co.kr/images/languages/python.png',
    },
    activeUsers: [
      {
        id: 1,
        nickname: '코코무',
        profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
        role: 'HOST',
      },
    ],
    testCases: [
      {
        testCaseId: 35,
        input: '3\n0\n1\n3',
        output: '1 0\n0 1\n1 2',
        type: 'DEFAULT',
      },
    ],
  },
};

export const getWaitingPageErrorResponse = {
  code: 4004,
  message: '코딩 스페이스 대기방 조회에 실패했습니다.',
};
