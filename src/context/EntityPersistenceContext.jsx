import { createContext } from 'react';
import AccountRepository from 'src/features/account/classes/AccountRepository.js';
import TransactionRepository from 'src/features/transaction/classes/TransactionRepository.js';
import UserRepository from 'src/features/user/classes/UserRepository.js';

export const EntityPersistenceContext = createContext(null);

export function EntityPersistenceContextProvider({ children }) {
  const userRepository = new UserRepository('users');
  const transactionRepository = new TransactionRepository('transactions');
  const accountRepository = new AccountRepository('accounts');
  return (
    <>
      <EntityPersistenceContext.Provider
        value={{ userRepository, transactionRepository, accountRepository }}>
        {children}
      </EntityPersistenceContext.Provider>
    </>
  );
}
