import React from 'react';
import type { UnknownRecord } from './types';

type H<SV> = () => SV;
type CCR<SV> = [H<SV>, React.FC, React.Context<SV | undefined>];

export const createContext = <SV extends UnknownRecord>(useHook: H<SV>): CCR<SV> => {
  const ctx = React.createContext<SV | undefined>(undefined);

  return [
    (): SV => {
      const contextValue = React.useContext(ctx);
      if (!contextValue) {
        throw new Error('context used outside provide');
      }
      return contextValue;
    },
    ({ children }) => {
      const value = useHook();
      return React.createElement(ctx.Provider, { value, children });
    },
    ctx
  ];
};
