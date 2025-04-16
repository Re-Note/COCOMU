export const STATUS = {
  WAITING: '대기',
  RUNNING: '진행',
  FEEDBACK: '피드백',
  FINISHED: '종료',
} as const;

export const STATUS_ACTIONS = {
  [STATUS.WAITING]: {
    label: '문제 풀이 시작',
  },
  [STATUS.RUNNING]: {
    label: '피드백 시작',
  },
  [STATUS.FEEDBACK]: {
    label: '피드백 종료',
  },
  [STATUS.FINISHED]: {
    label: '나가기',
  },
} as const;

export const FOOTER_ACTIONS = {
  [STATUS.WAITING]: {
    testCaseLabel: '테스트 케이스 확인하기',
    isTestCaseEditable: false,
    showRun: false,
    showSubmit: false,
  },
  [STATUS.RUNNING]: {
    testCaseLabel: '테스트 케이스 추가하기',
    isTestCaseEditable: true,
    showRun: true,
    showSubmit: true,
  },
  [STATUS.FEEDBACK]: {
    testCaseLabel: '테스트 케이스 추가하기',
    isTestCaseEditable: true,
    showRun: true,
    showSubmit: false,
  },
  [STATUS.FINISHED]: {
    testCaseLabel: '테스트 케이스 확인하기',
    isTestCaseEditable: false,
    showRun: false,
    showSubmit: false,
  },
} as const;

export const RUNNER_TAB = {
  INPUT: '입력',
  OUTPUT: '실행 결과',
} as const;

export const DEFAULT_CODE = {
  python: `def Main():
      pass  
  
  Main()`,

  java: `public class Main {
      public static void Main() {
          
      }
  }`,

  javascript: `function Main() {
      
  }
  
  Main();`,

  c: `#include <stdio.h>
  
  void Main() {
      
  }
  
  Main();`,
};
