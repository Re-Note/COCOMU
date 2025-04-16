import { SubmitTestCase } from './space';

export interface RunIDEData {
  ideId: string;
  language: string;
  inputData: string;
  code: string;
}

export interface SubmitIDEData {
  ideId: string;
  language: string;
  code: string;
  testCases: SubmitTestCase[];
}
