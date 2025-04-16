import { CodeSubmit } from '@customTypes/space';
import S from './style';

interface ItemProps {
  item: CodeSubmit;
  index: number;
}

export default function SubmissionItem({ item, index }: ItemProps) {
  if (!item) {
    return <div>로딩중</div>;
  }

  return (
    <S.Container>
      <S.ContainerLeft>
        <S.ItemTitle>{`테스트 케이스 ${index + 1}`}</S.ItemTitle>
        <S.ItemInfo>
          <div>{`${item?.data?.executionMessage?.executionTime}ms`}</div>
          <div>{`${item?.data?.executionMessage?.memoryUsageKB}KB`}</div>
        </S.ItemInfo>
      </S.ContainerLeft>
      <S.ContainerRight>
        <div>{`${item.type}`}</div>
        <S.Dot status={item.type === 'CORRECT'} />
      </S.ContainerRight>
    </S.Container>
  );
}
