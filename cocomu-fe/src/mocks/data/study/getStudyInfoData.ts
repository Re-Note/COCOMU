export const getStudyInfoResponse = {
  code: 3000,
  message: '스터디 정보 조회에 성공했습니다.',
  result: {
    id: 1,
    joinable: false,
    name: '매일 열심히하는 스터디',
    status: 'PUBLIC',
    languages: [
      {
        id: 1,
        name: 'java',
        imageUrl: 'https://cdn.cocomu.co.kr/images/languages/java.png',
      },
      {
        id: 2,
        name: 'python',
        imageUrl: 'https://cdn.cocomu.co.kr/images/languages/python.png',
      },
    ],
    workbooks: [
      {
        id: 1,
        name: '백준',
        imageUrl: 'https://cdn.cocomu.co.kr/images/workbooks/boj.png',
      },
      {
        id: 2,
        name: '프로그래머스',
        imageUrl: 'https://cdn.cocomu.co.kr/images/workbooks/programmers.png',
      },
    ],
    description: '우리 스터디는 ~ ',
    currentUserCount: 1,
    totalUserCount: 80,
    createdAt: '2025-03-09T02:38:16.885078',
    leader: {
      id: 1,
      nickname: '코코무',
      profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
    },
  },
};

export const getStudyInfoErrorResponse = {
  code: 4200,
  message: '스터디 정보 조회에 실패했습니다.',
};
