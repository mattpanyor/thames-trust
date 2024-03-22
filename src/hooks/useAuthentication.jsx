import { useContext } from 'react';
import { AuthenticationPersistenceContext } from 'src/context';

/* Provides custom hook to access AuthenticationPersistenceContext. */
export function useAuthentication() {
  const context = useContext(AuthenticationPersistenceContext);

  if (!context) {
    throw new Error(
      'AuthenticationPersistenceContext must be used within AuthenticationPersistenceContext'
    );
  }
  return context;
}
