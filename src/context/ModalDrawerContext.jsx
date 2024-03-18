import { createContext, useState } from 'react';

export const ModalDrawerContext = createContext(null);

export function ModalDrawerContextProvider({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <ModalDrawerContext.Provider value={[isDrawerOpen, setIsDrawerOpen]}>
        {children}
      </ModalDrawerContext.Provider>
    </>
  );
}
