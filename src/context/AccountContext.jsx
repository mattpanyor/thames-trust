import { createContext, useEffect, useState } from 'react';
import accountData from 'src/data/account.json';
import { useLocalStorage } from 'src/hooks';

export const AccountContext = createContext(null);

export function AccountContextProvider({ children }) {
  const { accountRepository } = useLocalStorage();
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    try {
      if (localStorage.getItem('accounts') === 'false' || !('accounts' in localStorage)) {
        accountRepository.saveAll(accountData);
        setAccounts(accountRepository.findAll());
      } else {
        setAccounts(accountRepository.findAll());
      }
    } catch (error) {
      console.error('Error saving account data:', error);
    }
  }, [accountRepository]);

  return (
    <>
      <AccountContext.Provider value={{ accounts, setAccounts }}>
        {children}
      </AccountContext.Provider>
    </>
  );
}
