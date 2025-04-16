import { generatePath } from 'react-router-dom';

export const PATH = {
  ROOT: '/',
  STUDY: {
    CREATE: '/study/create',
    EDIT: '/study/:studyId/edit',
    PARTICIPATION: '/study/:studyId/participation',
    DETAIL: '/study/:studyId',
    MEMBERS: 'members',
    INFO: 'info',
    SPACE_LIST: 'spaces',
  },
  SPACE: {
    CREATE: '/space/:studyId/create',
    ENTER: '/space/:codingSpaceId',
    WAITING: 'wait',
    RUNNING: 'running',
    FEEDBACK: 'feedback',
    FINISH: '/space/:codingSpaceId/finish',
  },
  MYPAGE: {
    ROOT: '/mypage/:userId',
    SPACE_LIST: 'spaces',
  },
  OAUTH: '/callback/:provider',
};

export const ROUTES = {
  ROOT: () => generatePath(PATH.ROOT),
  STUDY: {
    CREATE: () => generatePath(PATH.STUDY.CREATE),
    EDIT: ({ studyId }: { studyId: number }) => generatePath(PATH.STUDY.EDIT, { studyId }),
    PARTICIPATION: ({ studyId }: { studyId: number }) => generatePath(PATH.STUDY.PARTICIPATION, { studyId }),
    DETAIL: ({ studyId }: { studyId: number }) => generatePath(PATH.STUDY.DETAIL, { studyId }),
    MEMBERS: ({ studyId }: { studyId: number }) =>
      generatePath(`${PATH.STUDY.DETAIL}/${PATH.STUDY.MEMBERS}`, { studyId }),
    INFO: ({ studyId }: { studyId: number }) => generatePath(`${PATH.STUDY.DETAIL}/${PATH.STUDY.INFO}`, { studyId }),
    SPACE_LIST: ({ studyId }: { studyId: number }) =>
      generatePath(`${PATH.STUDY.DETAIL}/${PATH.STUDY.SPACE_LIST}`, { studyId }),
  },
  SPACE: {
    CREATE: ({ studyId }: { studyId: number }) => generatePath(PATH.SPACE.CREATE, { studyId }),
    ENTER: ({ codingSpaceId }: { codingSpaceId: number }) => generatePath(PATH.SPACE.ENTER, { codingSpaceId }),
    WAITING: ({ codingSpaceId }: { codingSpaceId: number }) =>
      generatePath(`${PATH.SPACE.ENTER}/${PATH.SPACE.WAITING}`, { codingSpaceId }),
    RUNNING: ({ codingSpaceId }: { codingSpaceId: number }) =>
      generatePath(`${PATH.SPACE.ENTER}/${PATH.SPACE.RUNNING}`, { codingSpaceId }),
    FEEDBACK: ({ codingSpaceId }: { codingSpaceId: number }) =>
      generatePath(`${PATH.SPACE.ENTER}/${PATH.SPACE.FEEDBACK}`, { codingSpaceId }),
    FINISH: ({ codingSpaceId }: { codingSpaceId: number }) => generatePath(`${PATH.SPACE.FINISH}`, { codingSpaceId }),
  },
  MYPAGE: {
    ROOT: ({ userId }: { userId: number }) => generatePath(PATH.MYPAGE.ROOT, { userId }),
    SPACE_LIST: ({ userId }: { userId: number }) =>
      generatePath(`${PATH.MYPAGE.ROOT}/${PATH.MYPAGE.SPACE_LIST}`, { userId }),
  },
};
