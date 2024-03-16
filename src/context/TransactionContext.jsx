import { createContext, useEffect, useState } from 'react';
import transactionData from 'src/data/transaction.json';
import { useLocalStorage } from 'src/hooks';

export const TransactionContext = createContext(null);

export function TransactionContextProvider({ children }) {
  const { transactionRepository } = useLocalStorage();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    try {
      if (localStorage.getItem('transactions') === 'false' || !('transactions' in localStorage)) {
        transactionRepository.saveAll(transactionData);
        setTransactions(transactionRepository.findAll());
      } else {
        setTransactions(transactionRepository.findAll());
      }
    } catch (error) {
      console.error('Error saving transaction data:', error);
    }
  }, [transactionRepository]);

  return (
    <>
      <TransactionContext.Provider value={{ transactions, setTransactions }}>
        {children}
      </TransactionContext.Provider>
    </>
  );
}
