import { extendData } from '@utils/extendData';

const memberData = [
  {
    id: 1,
    nickname: '코코무',
    profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
    role: 'MEMBER',
    joinedDate: '2025-03-10T10:33:25.488Z',
    joinedSpaceCount: 10,
  },
  {
    id: 2,
    nickname: '김범조',
    profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
    role: 'LEADER',
    joinedDate: '2025-03-10T10:33:25.488Z',
    joinedSpaceCount: 4,
  },
  {
    id: 3,
    nickname: '무코코',
    profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
    role: 'MEMBER',
    joinedDate: '2025-03-10T10:33:25.488Z',
    joinedSpaceCount: 2,
  },
];

export const getMemberResponse = {
  code: 1100,
  message: '스터디 멤버 목록 조회에 성공하였습니다.',
  result: extendData(memberData, 100),
};

export const getMemberErrorResponse = {
  code: 4200,
  message: '스터디 멤버 목록 조회에 실패했습니다.',
};
