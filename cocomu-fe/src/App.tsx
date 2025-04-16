import { useUserStore } from '@stores/useUserStore';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export default function App() {
  const checkAuth = useUserStore((state) => state.checkAuth);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return <Outlet />;
}
