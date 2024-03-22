import { useContext } from 'react';
import { AccountContext } from 'src/context';

/* Provides custom hook to access AccountContext. */
export function useAccountContext() {
  const context = useContext(AccountContext);

  if (!context) {
    throw new Error('AccountContextProvider must be used within AccountContextProvider');
  }

  return context;
}
