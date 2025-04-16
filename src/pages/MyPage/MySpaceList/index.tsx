import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useGetUserSpaceList from '@hooks/user/useGetUserSpaceList';
import useScroll from '@hooks/utils/useScroll';

import LoadingSpinner from '@components/_common/atoms/LoadingSpinner';
import EmptyResult from '@components/_common/atoms/EmptyResult';
import SpaceCard from '@components/Space/SpaceCard';
import InfiniteScrollSentinel from '@components/_common/molecules/InfiniteScrollSentinel';

import { SpaceData } from '@customTypes/space';

import S from './style';

export default function MySpaceList() {
  const { userId } = useParams<{ userId: string }>();

  const [filteredSpaces, setFilteredSpaces] = useState<SpaceData[]>([]);

  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGetUserSpaceList(userId);

  const { observerRef } = useScroll({
    nextPage: hasNextPage,
    fetchingNextPage: isFetchingNextPage,
    fetchNext: fetchNextPage,
  });

  useEffect(() => {
    if (data) {
      const newSpaces = data.pages.flatMap((page) => page.result) || [];
      setFilteredSpaces(newSpaces);
    }
  }, [data]);

  if (isLoading) return <LoadingSpinner />;

  const handleRemove = (id: number) => {
    setFilteredSpaces((prev) => prev.filter((space) => space.id !== id));
  };

  return (
    <S.Container>
      {filteredSpaces.length === 0 && <EmptyResult />}
      <S.SpaceList>
        {filteredSpaces.map((space) => (
          <SpaceCard
            key={space.id}
            {...space}
            onRemove={handleRemove}
          />
        ))}
      </S.SpaceList>

      <InfiniteScrollSentinel
        observerRef={observerRef}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </S.Container>
  );
}
