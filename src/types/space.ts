import { UserRoleData } from './user';

export type SpaceStatusData = 'WAITING' | 'RUNNING' | 'FEEDBACK' | 'FINISH';
export type TestCaseType = 'BASE' | 'CUSTOM';

export interface SpaceListData {
  status?: string;
  languageIds?: string;
  joinable?: boolean;
  keyword?: string;
  lastId?: number;
}

export interface SpaceLanguageData {
  languageId: number;
  languageName: string;
  languageImageUrl: string;
}

export interface SpaceData {
  id: number;
  joinedMe: boolean;
  name: string;
  language: SpaceLanguageData;
  totalUserCount: number;
  createdAt: string;
  status: string;
  currentUsers: UserRoleData[];
}

export interface SpaceFormData extends Record<string, string | number[]> {
  name: string;
  timerTime: string;
  workbookUrl: string;
  totalUserCount: number[];
  languageId: number[];
  description: string;
}

export interface TestCaseIO {
  input?: string;
  output?: string;
}

export interface SubmitTestCase {
  input?: string;
  output?: string;
  testCaseId?: number | string;
}

export interface TestCaseData {
  input?: string;
  output?: string;
  testCaseId?: number | string;
  type?: TestCaseType;
}

export interface CreateSpaceData {
  studyId: number;
  name: string;
  timerTime: number;
  workbookUrl: string;
  totalUserCount: number;
  languageId: number;
  description: string;
  testcases: TestCaseIO[];
}

export interface ActiveTab {
  tabId?: string;
  documentKey?: string;
  userId?: number;
  nickname?: string;
  profileImageUrl?: string;
  role?: 'HOST' | 'MEMBER';
  myTab?: boolean;
  code?: string;
}

export interface Execution {
  codingSpaceTabId: string;
  language: string;
  code: string;
  input: string;
}

export interface Submission {
  codingSpaceId: number;
  codingSpaceTabId: number;
  language: string;
  code: string;
}

export interface SendCode {
  codingSpaceId: string;
  code: { code: string };
}

export interface ExcutionMessage {
  executionTime: string;
  memoryUsageKB: string;
  output: string;
  tabId: number;
}

export interface CodeSubmitData {
  executionMessage: ExcutionMessage;
  testCaseId: number;
}

export interface CodeSubmit {
  type: string;
  data: CodeSubmitData;
}
