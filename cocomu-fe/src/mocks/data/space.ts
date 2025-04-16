export const updateTestCaseResponse = {
  code: 1200,
  message: '테스트 케이스 수정됨',
  result: {
    testCases: [
      {
        id: 100,
        input: '1,2,3,4,5',
        output: '8',
        type: 'CUSTOM',
      },
      {
        id: 101,
        input: '1,2,3,4,5',
        output: '8',
        type: 'CUSTOM',
      },
      {
        id: 102,
        input: '1,2,3,4,5',
        output: '8',
        type: 'CUSTOM',
      },
      {
        id: 103,
        input: '1,2,3,4,5',
        output: '8',
        type: 'CUSTOM',
      },
    ],
  },
};

export const updateTestCaseErrorResponse = {
  code: 4200,
  message: '테스트 케이스 추가에 실패했습니다.',
};

export const completeSpaceResponse = {
  code: 1200,
  message: '코딩 스페이스 종료에 성공했습니다.',
};

export const completeSpaceErrorResponse = {
  code: 4200,
  message: '피드백 종료에 실패했습니다.',
};
