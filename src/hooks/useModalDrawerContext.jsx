import { useContext } from 'react';
import { ModalDrawerContext } from 'src/context';

/* Provides custom hook to access ModalDrawerContext. */
export function useModalDrawerContext() {
  const context = useContext(ModalDrawerContext);

  if (!context) {
    throw new Error('ModalDrawerContextProvider must be used within ModalDrawerContextProvider');
  }

  return context;
}
