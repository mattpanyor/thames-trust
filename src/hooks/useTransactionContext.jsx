import { useContext } from 'react';
import { TransactionContext } from 'src/context';

/* Provides custom hook to access TransactionContext. */
export function useTransactionContext() {
  const context = useContext(TransactionContext);

  if (!context) {
    throw new Error('TransactionContextProvider must be used within TransactionContextProvider');
  }

  return context;
}
