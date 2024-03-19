import { createContext, useEffect, useState } from 'react';
import transactionData from 'src/data/transaction.json';
import { useLocalStorage } from 'src/hooks';

export const TransactionContext = createContext(null);

export function TransactionContextProvider({ children }) {
  const { transactionRepository } = useLocalStorage();
  const [transactions, setTransactions] = useState([]);
  const [sortedTransactions, setSortedTransactions] = useState([]);

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

  useEffect(() => {
    const sortedTransactions = [...transactions].sort(
      (a, b) => b.transactionDate - a.transactionDate
    );
    setSortedTransactions(sortedTransactions);
  }, [transactions]);

  return (
    <>
      <TransactionContext.Provider value={{ transactions: sortedTransactions, setTransactions }}>
        {children}
      </TransactionContext.Provider>
    </>
  );
}
