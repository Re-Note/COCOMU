export const getFilterOptionsResponse = {
  code: 3000,
  message: '스터디 필터 옵션 조회에 성공했습니다.',
  result: {
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
      {
        id: 3,
        name: 'javascript',
        imageUrl: 'https://cdn.cocomu.co.kr/images/languages/javascript.png',
      },
      {
        id: 4,
        name: 'cpp',
        imageUrl: 'https://cdn.cocomu.co.kr/images/languages/cpp.png',
      },
    ],
  },
};
