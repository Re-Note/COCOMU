import { RefObject } from 'react';
import LoadingSpinner from '@components/_common/atoms/LoadingSpinner';
import S from './style';

interface InfiniteScrollSentinelProps {
  observerRef: RefObject<HTMLDivElement>;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
}

export default function InfiniteScrollSentinel({
  observerRef,
  hasNextPage,
  isFetchingNextPage,
}: InfiniteScrollSentinelProps) {
  return (
    <div>
      {hasNextPage ? (
        <S.Sentinel ref={observerRef}>{isFetchingNextPage && <LoadingSpinner />}</S.Sentinel>
      ) : (
        <S.NoMoreDataMessage>더 이상 불러올 정보가 없습니다</S.NoMoreDataMessage>
      )}
    </div>
  );
}
