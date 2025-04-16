export interface UserData {
  id: number;
  nickname: string;
  profileImageUrl: string;
}

export interface UserRoleData extends UserData {
  role: string;
  myTab?: boolean;
}

export interface UserDetailData {
  studyUserId: number;
  userId: number;
  nickname: string;
  profileImageUrl: string;
  joinedSpaceCount: number;
  role: string;
  joinedDate: string;
}

export interface EditUserData {
  nickname: string;
  profileImageUrl: string;
}

export interface UploadProfileData {
  image: string;
}
