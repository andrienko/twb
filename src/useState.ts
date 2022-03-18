import React from 'react';

export type State<SV> = {
  value: SV;
  set: React.Dispatch<React.SetStateAction<SV>>;
};

export const useState = <SV>(defaultValue: SV | (() => SV)): State<SV> => {
  const [value, set] = React.useState<SV>(defaultValue);
  return React.useMemo(() => ({ value, set }), [value, set]);
};
