import { useParams } from 'react-router-dom';

import useScroll from '@hooks/utils/useScroll';
import useGetUserStudyList from '@hooks/user/useGetUserStudyList';

import LoadingSpinner from '@components/_common/atoms/LoadingSpinner';
import EmptyResult from '@components/_common/atoms/EmptyResult';
import StudyCard from '@components/Study/StudyCard';
import InfiniteScrollSentinel from '@components/_common/molecules/InfiniteScrollSentinel';

import { StudyData } from '@customTypes/study';

import S from './style';

export default function MyStudyList() {
  const { userId } = useParams<{ userId: string }>();

  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGetUserStudyList(userId);

  const { observerRef } = useScroll({
    nextPage: hasNextPage,
    fetchingNextPage: isFetchingNextPage,
    fetchNext: fetchNextPage,
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <S.Container>
      {!data?.pages.some((page) => page.result.length > 0) && <EmptyResult />}
      <S.StudyList>
        {data?.pages.flatMap((page) =>
          page.result.map((study: StudyData) => (
            <StudyCard
              key={study.id}
              {...study}
            />
          )),
        )}
      </S.StudyList>

      <InfiniteScrollSentinel
        observerRef={observerRef}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </S.Container>
  );
}
