import React from 'react';

export const useTextChangeHandler = (setter: React.Dispatch<React.SetStateAction<string>>) =>
  React.useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setter(e.currentTarget.value), [
    setter,
  ]);
