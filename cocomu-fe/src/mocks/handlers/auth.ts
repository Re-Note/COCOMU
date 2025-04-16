import { http, HttpResponse } from 'msw';
import { loginErrorResponse, loginResponse, refreshToken } from '@mocks/data/auth';
import { BASE_URL, END_POINTS_V1, HTTP_STATUS_CODE } from '@constants/api';
import { LogInData } from '@customTypes/auth';

export const authHandlers = [
  http.post(`${BASE_URL}${END_POINTS_V1.AUTH.OAUTH_LOGIN}`, async ({ request }) => {
    const body = (await request.json()) as LogInData;

    if (!body.provider || !body.oauthCode) {
      return new HttpResponse(JSON.stringify(loginErrorResponse), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(loginResponse), {
      status: HTTP_STATUS_CODE.SUCCESS,
      headers: {
        'Set-Cookie': `refreshToken=${refreshToken}; HttpOnly; Path=/`,
        'Content-Type': 'application/json',
      },
    });
  }),

  http.post(
    `${BASE_URL}${END_POINTS_V1.AUTH.REFRESH_TOKEN}`,
    async () =>
      new HttpResponse(JSON.stringify(loginResponse), {
        status: HTTP_STATUS_CODE.SUCCESS,
        headers: {
          'Set-Cookie': `refreshToken=${refreshToken}; HttpOnly; Path=/`,
          'Content-Type': 'application/json',
        },
      }),
  ),
];
