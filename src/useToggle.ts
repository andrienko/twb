import React from 'react';

export const useToggle = (setter: React.Dispatch<React.SetStateAction<boolean>>) =>
  React.useCallback(() => setter((s) => !s), [setter]);
