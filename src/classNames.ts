type Arg = string | Record<string, any> | undefined | null | number | Arg[];

const argToArr = (argOrArgs: Arg): string[] => {
  if (typeof argOrArgs === 'string' || typeof argOrArgs === 'number') {
    return [`${argOrArgs}`];
  } else if (Array.isArray(argOrArgs)) {
    let classNames: string[] = [];

    for (let i = 0; i < argOrArgs.length; i++) {
      const argClassNames = argToArr(argOrArgs[i]);
      for (let ci = 0; ci < argClassNames.length; ci++) {
        classNames.push(argClassNames[ci] as string);
      }
    }
    return classNames;
  } else {
    const classNames: string[] = [];
    for (let key in argOrArgs) {
      if (argOrArgs[key]) {
        classNames.push(key.trim());
      }
    }
    return classNames;
  }
};

export const classNames = (...args: Arg[]): string => {
  const classNames: string[] = [];
  for (let i = 0; i < args.length; i++) {
    if (args[i]) {
      const classNameStrings = argToArr(args[i] as Arg);
      for (let ci = 0; ci < classNameStrings.length; ci++) {
        let className = classNameStrings[ci];
        if (className) {
          className = className.trim();
          if (!classNames.includes(className)) {
            classNames.push(className);
          }
        }
      }
    }
  }
  return classNames.join(' ');
};
