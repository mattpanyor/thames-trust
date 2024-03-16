import { useContext } from 'react';
import { AccountContext } from 'src/context/index.js';

export function useAccountContext() {
  const context = useContext(AccountContext);

  if (!context) {
    throw new Error('AccountContextProvider must be used within AccountContextProvider');
  }

  return context;
}
