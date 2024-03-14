import { useContext } from 'react';
import { EntityPersistenceContext } from 'src/context/EntityPersistenceContext.jsx';

export function useLocalStorage() {
  const context = useContext(EntityPersistenceContext);

  if (!context) {
    throw new Error(
      'EntityPersistenceContext must be used within EntityPersistenceContextProvider'
    );
  }

  return context;
}
