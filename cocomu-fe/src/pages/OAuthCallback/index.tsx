import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import useLogIn from '@hooks/auth/useLogIn';
import Loading from '@pages/Loading';

export default function OAuthCallback() {
  const { provider } = useParams();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const { logInMutate } = useLogIn();

  useEffect(() => {
    if (!code || !provider) return;

    logInMutate.mutate({ provider: provider.toUpperCase(), oauthCode: code });
  }, []);

  return <Loading />;
}
