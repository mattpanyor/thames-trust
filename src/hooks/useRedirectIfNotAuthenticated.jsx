import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthentication } from 'src/hooks';

export function useRedirectIfNotAuthenticated() {
  const navigate = useNavigate();
  const { authentication } = useAuthentication();

  useEffect(() => {
    if (!authentication.getAuthenticationToken()) {
      navigate('/login');
    } else {
      navigate('/');
    }
  }, [authentication, navigate]);
}
