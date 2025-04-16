import { useNavigate } from 'react-router-dom';

import { useModalStore } from '@stores/useModalStore';

import { ROUTES } from '@constants/path';
import { formatDate } from '@utils/formatDate';

import { SpaceData } from '@customTypes/space';

import ImageTag from '@components/_common/atoms/ImageTag';
import AvatarGroup from '@components/_common/molecules/AvatarGroup';
import SpaceCardHeader from './SpaceCardHeader';

import S from './style';

interface SpaceCardProps extends SpaceData {
  onRemove: (id: number) => void;
}

export default function SpaceCard({
  id,
  joinedMe,
  name,
  language,
  totalUserCount,
  createdAt,
  status,
  currentUsers,
  onRemove,
}: SpaceCardProps) {
  const navigate = useNavigate();
  const { open } = useModalStore();

  const handleCardClick = () => {
    if (status === 'FINISHED') {
      navigate(ROUTES.SPACE.FINISH({ codingSpaceId: id }));
      return;
    }
    if (joinedMe) {
      navigate(ROUTES.SPACE.ENTER({ codingSpaceId: id }));
      return;
    }

    open('confirm', {
      isSpace: true,
      codingSpaceId: id,
      name,
      navigate: (codingSpaceId: number) => navigate(ROUTES.SPACE.ENTER({ codingSpaceId })),
    });
  };

  const leader = currentUsers.find((user) => user.role === 'HOST');

  return (
    <S.CardContainer onClick={handleCardClick}>
      <SpaceCardHeader
        id={id}
        leader={leader}
        status={status}
        onRemove={onRemove}
      />

      <S.Body>
        <S.Text>{name}</S.Text>
        <S.Info>
          <ImageTag imageUrl={language.languageImageUrl} />
          <S.Text>{`최대 인원 : ${totalUserCount}명`}</S.Text>
          <S.Date>{`생성 일자 : ${formatDate(createdAt)}`}</S.Date>
          <AvatarGroup
            users={currentUsers}
            size='sm'
          />
        </S.Info>
      </S.Body>
    </S.CardContainer>
  );
}
