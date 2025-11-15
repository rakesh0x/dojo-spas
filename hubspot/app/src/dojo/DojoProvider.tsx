import React, { type ReactNode } from 'react'; // Use type-only import for ReactNode
import { useDojoState } from '@chakra-dev/dojo-hooks';
import { type AppState, initialAppState } from './state'; // Use type-only import for AppState
import { DojoContext } from './useDojo';

export const DojoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useDojoState<AppState>(initialAppState);

  return (
    <DojoContext.Provider value={{ state, setState }}>
      {children}
    </DojoContext.Provider>
  );
};
