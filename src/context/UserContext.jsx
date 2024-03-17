import { createContext, useEffect, useState } from 'react';
import userData from 'src/data/user.json';
import { useLocalStorage } from 'src/hooks';

export const UserContext = createContext(null);

export function UserContextProvider({ children }) {
  const { userRepository } = useLocalStorage();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      if (localStorage.getItem('users') === 'false' || !('users' in localStorage)) {
        userRepository.saveAll(userData);
        setUsers(userRepository.findAll());
      } else {
        setUsers(userRepository.findAll());
      }
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  }, [userRepository]);

  return (
    <>
      <UserContext.Provider value={{ users, setUsers }}>{children}</UserContext.Provider>
    </>
  );
}
