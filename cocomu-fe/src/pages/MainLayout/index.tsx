import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import useGetMyInfo from '@hooks/user/useGetMyInfo';
import { useUserStore } from '@stores/useUserStore';

import NavBar from '@components/NavBar';
import Loading from '@pages/Loading';

import Footer from '@pages/MainLayout/Footer';
import S from './style';

export default function MainLayout() {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const setUserId = useUserStore((state) => state.setUserId);
  const { data, isLoading } = useGetMyInfo({ enabled: isLoggedIn });

  const location = useLocation();
  const isMain = location.pathname === '/';

  useEffect(() => {
    if (data?.id) {
      setUserId(data.id);
    }
  }, [data?.id, setUserId]);

  if (isLoading) return <Loading />;

  return (
    <>
      <S.MainContainer>
        <NavBar
          isLoggedIn={isLoggedIn}
          user={data}
        />
        <S.Container>
          <Outlet />
        </S.Container>
      </S.MainContainer>
      {isMain && <Footer />}
    </>
  );
}
