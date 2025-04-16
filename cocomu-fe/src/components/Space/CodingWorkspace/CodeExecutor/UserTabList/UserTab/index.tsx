import S, { UserTabColor } from './style';

interface UserTabProps {
  color: UserTabColor;
  name: string;
  isSelected: boolean;
  onClick?: () => void;
}

export default function UserTab({ color, name, onClick, isSelected }: UserTabProps) {
  return (
    <S.UserTab
      isSelected={isSelected}
      onClick={onClick}
    >
      <S.UserName color={color}>{name}</S.UserName>
      <S.Dot color={color} />
    </S.UserTab>
  );
}
