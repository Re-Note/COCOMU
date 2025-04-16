import { BASE_URL, END_POINTS_V1, HTTP_STATUS_CODE } from '@constants/api';
import { http, HttpResponse } from 'msw';
import { getMyInfoResponse } from '@mocks/data/user/getMyInfoData';
import { getUserInfoErrorResponse, getUserInfoResponse } from '@mocks/data/user/getUserInfoData';
import { getUserSpaceListErrorResponse, getUserSpaceListResponse } from '@mocks/data/user/getUserSpaceListData';
import { getUserStudyListErrorResponse, getUserStudyListResponse } from '@mocks/data/user/getUserStudyListData';
import { editUserErrorResponse, editUserResponse } from '@mocks/data/user/editUserData';
import { uploadUserImageErrorResponse, uploadUserImageResponse } from '@mocks/data/user/uploadUserImage';
import { EditUserData, UploadProfileData } from '@customTypes/user';

export const userHandlers = [
  http.get(
    `${BASE_URL}${END_POINTS_V1.USER.MY_INFO}`,
    async () => new HttpResponse(JSON.stringify(getMyInfoResponse), { status: HTTP_STATUS_CODE.SUCCESS }),
  ),

  http.get(`${BASE_URL}${END_POINTS_V1.USER.INFO(':userId')}`, async ({ params }) => {
    const { userId } = params;

    if (!userId) {
      return new HttpResponse(JSON.stringify(getUserInfoErrorResponse), { status: HTTP_STATUS_CODE.BAD_REQUEST });
    }

    return new HttpResponse(JSON.stringify(getUserInfoResponse), { status: HTTP_STATUS_CODE.SUCCESS });
  }),

  http.get(`${BASE_URL}${END_POINTS_V1.USER.MY_SPACE_LIST(':userId')}`, async ({ params }) => {
    const { userId } = params;

    if (!userId) {
      return new HttpResponse(JSON.stringify(getUserSpaceListErrorResponse), { status: HTTP_STATUS_CODE.BAD_REQUEST });
    }

    return new HttpResponse(JSON.stringify(getUserSpaceListResponse), { status: HTTP_STATUS_CODE.SUCCESS });
  }),

  http.get(`${BASE_URL}${END_POINTS_V1.USER.MY_STUDY_LIST(':userId')}`, async ({ params }) => {
    const { userId } = params;

    if (!userId) {
      return new HttpResponse(JSON.stringify(getUserStudyListErrorResponse), { status: HTTP_STATUS_CODE.BAD_REQUEST });
    }

    return new HttpResponse(JSON.stringify(getUserStudyListResponse), { status: HTTP_STATUS_CODE.SUCCESS });
  }),

  http.post(`${BASE_URL}${END_POINTS_V1.USER.EDIT}`, async ({ request }) => {
    const body = (await request.json()) as EditUserData;

    if (!body.nickname || !body.profileImageUrl) {
      return new HttpResponse(JSON.stringify(editUserErrorResponse), { status: HTTP_STATUS_CODE.BAD_REQUEST });
    }

    return new HttpResponse(JSON.stringify(editUserResponse), { status: HTTP_STATUS_CODE.SUCCESS });
  }),

  http.post(`${BASE_URL}${END_POINTS_V1.USER.IMAGE_UPLOAD}`, async ({ request }) => {
    const body = (await request.json()) as UploadProfileData;

    if (!body.image) {
      return new HttpResponse(JSON.stringify(uploadUserImageErrorResponse), { status: HTTP_STATUS_CODE.BAD_REQUEST });
    }

    return new HttpResponse(JSON.stringify(uploadUserImageResponse), { status: HTTP_STATUS_CODE.SUCCESS });
  }),
];
