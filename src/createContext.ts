import React from 'react';
import type { UnknownRecord, FCC } from './types';

type Hook<SV> = () => SV;
type CCR<SV> = [Hook<SV>, FCC, React.Context<SV | undefined>];

export const createContext = <SV extends UnknownRecord>(useHook: Hook<SV>): CCR<SV> => {
  const ctx = React.createContext<SV | undefined>(undefined);

  return [
    (): SV => {
      const contextValue = React.useContext(ctx);
      if (!contextValue) {
        throw new Error('context used outside provider');
      }
      return contextValue;
    },
    ({ children }) => {
      const value = useHook();
      return React.createElement(ctx.Provider, { value, children });
    },
    ctx,
  ];
};
