import ProfileImage from '@components/_common/atoms/ProfileImage';
import { UserData } from '@customTypes/user';
import S, { AvatarGroupSize } from './style';

interface AvatarGroupProps {
  users: UserData[];
  size?: AvatarGroupSize;
}

export default function AvatarGroup({ users, size = 'sm' }: AvatarGroupProps) {
  return (
    <S.AvatarGroupContainer size={size}>
      {users.map((user, index) => (
        <S.ProfileWrapper
          key={user.id}
          index={index}
          size={size}
        >
          <ProfileImage
            src={user.profileImageUrl}
            border
            size={size}
          />
          <S.Nickname>{user.nickname}</S.Nickname>
        </S.ProfileWrapper>
      ))}
    </S.AvatarGroupContainer>
  );
}
