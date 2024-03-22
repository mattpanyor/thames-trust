import { createContext } from 'react';
import { Authentication, AuthenticationPersistence } from 'src/classes';
import { useLocalStorage } from 'src/hooks';

export const AuthenticationPersistenceContext = createContext(null);
/*
 * This context instantiate AuthenticationPersistence.class with the key - jwt-token, and Authentication.class
 * to provide the authentication object to work with session storage and have access to methods for security.
 * */
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
