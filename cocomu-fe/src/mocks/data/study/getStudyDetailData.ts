export const getStudyDetailResponse = {
  code: 3000,
  message: '스터디 디테일 페이지 조회에 성공했습니다.',
  result: {
    id: 1,
    name: '매일 열심히하는 스터디',
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
  },
};

export const getStudyDetailErrorResponse = {
  code: 4200,
  message: '스터디 디테일 페이지 조회에 실패했습니다.',
};
