import { createContext, useContext } from 'react';
import type { AppState } from './state';

interface DojoContextType {
  state: AppState;
  setState: (updater: (prevState: AppState) => AppState) => void;
}

export const DojoContext = createContext<DojoContextType | undefined>(undefined);

export const useDojo = () => {
  const context = useContext(DojoContext);
  if (context === undefined) {
    throw new Error('useDojo must be used within a DojoProvider');
  }
  return context;
};
