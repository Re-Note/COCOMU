import { authHandlers } from './auth';
import { studyHandlers } from './study';
import { spaceHandlers } from './space';
import { ideRunHandlers, ideSubmitHandler } from './ide';
import { userHandlers } from './user';

export const handlers = [
  ...authHandlers,
  ...userHandlers,
  ...studyHandlers,
  ...spaceHandlers,
  ...ideRunHandlers,
  ...ideSubmitHandler,
];
