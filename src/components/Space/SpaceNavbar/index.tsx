import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

import { ROUTES } from '@constants/path';

import IconButton from '@components/_common/atoms/IconButton';
import Timer from '@components/_common/atoms/Timer';
import Button from '@components/_common/atoms/Button';

import S from './style';

interface SpaceNavbarProps {
  studyId?: number;
  name: string;
  startTime?: string;
  timer?: number;
  isLeader?: boolean;
  buttonLabel?: string;
  onClick?: () => void;
  onTimeout?: () => void;
  hostMe?: boolean;
  exitPage?: boolean;
}

export default function SpaceNavbar({
  studyId,
  name,
  timer,
  isLeader,
  buttonLabel,
  onClick,
  startTime,
  onTimeout,
  hostMe,
  exitPage,
}: SpaceNavbarProps) {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.LeftSection>
        {exitPage && (
          <IconButton
            content='나가기'
            align='center'
            color='none'
            onClick={() => (studyId ? navigate(ROUTES.STUDY.DETAIL({ studyId })) : navigate(-1))}
          >
            <BsArrowLeft />
          </IconButton>
        )}
        <S.Name>{name}</S.Name>
      </S.LeftSection>
      <S.RightSection>
        {timer && (
          <Timer
            timer={timer}
            startTime={startTime}
            onTimeout={onTimeout}
            hostMe={hostMe}
          />
        )}
        {isLeader && (
          <Button
            size='md'
            color='triadic'
            onClick={onClick}
          >
            {buttonLabel}
          </Button>
        )}
      </S.RightSection>
    </S.Container>
  );
}
