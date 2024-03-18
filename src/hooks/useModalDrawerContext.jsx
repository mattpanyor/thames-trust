import { useContext } from 'react';
import { ModalDrawerContext } from 'src/context';

export function useModalDrawerContext() {
  const context = useContext(ModalDrawerContext);

  if (!context) {
    throw new Error('ModalDrawerContextProvider must be used within ModalDrawerContextProvider');
  }

  return context;
}
