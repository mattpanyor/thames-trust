import { useContext } from 'react';
import { UserContext } from 'src/context';
/* Provides custom hook to access UserContext. */
export function useUserContext() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('UserContextProvider must be used within UserContextProvider');
  }

  return context;
}
