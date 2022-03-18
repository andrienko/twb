import React from 'react';

export const useUpdatedValues = (props: Record<string, unknown>, label: string = '') => {
  const previousRef = React.useRef<Record<string, unknown>>({});
  React.useEffect(() => {
    if (previousRef.current) {
      const changesObj: Record<string, unknown[]> = {};
      for (const [key, value] of Object.entries({ ...previousRef.current, ...props })) {
        if (previousRef.current[key] !== value) {
          changesObj[key] = [previousRef.current[key], value];
        }
      }
      if (Object.keys(changesObj).length) {
        console.log(`[updated values] ${label}`, changesObj);
      }
    }
    previousRef.current = props;
  });
};
