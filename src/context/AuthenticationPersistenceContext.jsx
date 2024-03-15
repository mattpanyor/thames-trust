import { createContext } from 'react';
import { Authentication, AuthenticationPersistence } from 'src/classes';
import { useLocalStorage } from 'src/hooks';

export const AuthenticationPersistenceContext = createContext(null);

export function AuthenticationPersistenceContextProvider({ children }) {
  const authenticationPersistence = new AuthenticationPersistence('jwt-token');
  const { userRepository } = useLocalStorage();
  const authentication = new Authentication(authenticationPersistence, userRepository);
  return (
    <>
      <AuthenticationPersistenceContext.Provider value={{ authentication }}>
        {children}
      </AuthenticationPersistenceContext.Provider>
    </>
  );
}
