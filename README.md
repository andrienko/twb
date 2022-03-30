# TWB - My own React tool belt

TWB stands for "That WomBat". It is just a set of snippets and libs I use in
most of my projects, to avoid copy-pasting these and just have a single
dependency for those. It is written for TypeScript and React (may be used
without those, probably, but I don't care too much about such usage). I use it
mostly when I prototype things.

I am trying to keep these robust (cuz I use these myself). Feel free to use
these too, they won't change much, and if they will - the major version will
change. There is no specific goal or anything, not trying to be an
"all-in-one-everything" type of thing.

## Features

- It has React and React-dom as peer dependencies. what will your bundler do
with it, and honestly I don't care
- I target only modern browsers. Probably it would work in IE11 even, but I did
not test. Polyfills should work fine, too. I don't use too modern methods, so
probably it'd be fine.
- There are unit tests only for stuff it makes sense for. Hooks are not tested.

## Methods

This is not the documentation :P

### classNames

I use these for react mostly, but these are agnostic. Alternatives are
`classNames`+`@types/classNames` and `clsx` packages.

It is not the best-performant one (I guess): I am using arrays for it, and also
check for duplicate classes and trim their names. Perhaps, check for
[clsx](https://www.npmjs.com/package/clsx) library if it doesn't suit you.

A component from following example will always have a class name of 'test', will
have its `className` prop added, and will have `active` class name added when
`isToggled` is true.

```typeScript
import React from 'react';
import { classNames } from 'twb';

type Props = {
  className: string,
}

export const Component: React.FC<Props> = ({ className }) => {
  const [isOn, setIsOn] = React.useState<boolean>(false);
  const toggleIsOn = React.useCallback(() => setIsOn(s => !s), []);
  return (
    <button
      className={classNames('test', className, {'active': isToggled})}
      onClick={toggleIsOn}
    >
      Click me!
    </button>
  );
}
```

### domReady

It is a function to fire when `DOMContentLoaded` has been fired. It is similar
to popular `domready`+`@types/domready` package. Probably you are looking for
[the original](https://www.npmjs.com/package/domready). It should also work with
iframes, just like the original.

```typeScript
import { domReady } from 'twb';

domReady(() => {
  const helloDiv = document.createElement('div');
  helloDiv.innerHTML = 'Hello, world!';
  document.body.appendChild(helloDiv);
});
```

_Nowadays, the common approach to JS is to simply add scripts right before
`body` tag. I believe a good script should work no matter where, when and how it
was added._

### mountReact

_I don't like the common approach of having a div with an id in document body
and the finding it - I prefer to create the wrapper myself._

I often have all of my react code fit into component. And then there is a
"loader" script or something that handles creating a wrapper div (appended to
document.body), creating react component and passing it into reactDom.render
with wrapper as target. That is basically what the function does. The second,
optional argument is `className` for that wrapper div.

```typeScript
import { mountReact } from 'twb';
import { App } from './App';
mountReact(App);
```

### noop

Noop is noop. A function that does nothing. I often need it.

### randomId

Returns a string ID. Basically it is a Math.random().toString(16).slice(2) with
an option to set (any) length of that id. Also there is a `nextId` function that
when called returns an incremental id (hexadecimal from 0) and a `fakeUuid`
method that returns a string in format `00000000-0000-0000-0000-000000000000'
(it is NOT a real, RFC4122-compliant UUID, but just a random string that LOOKS
like UUID)

### useState

A wrapper around `React.useState` hook that returns an object with `value` and
`set` fields (instead of an array of those). I use it for contexts when I'm lazy
to use reducer.

```typeScript
import React from 'react';
import { useState, useTextChangeHandler } from 'twb';

export const App:React.FC = () => {

  // The point is there's single variable here
  const textState = useState<string>('');
  const handleTextChange = useTextChangeHandler(textState.set);

  return <input
    type="text"
    value={textState.value}
    onChange={handleTextChange}
  />
}

```

### useUpdatedValues

Similar to `useWhyDidYouUpdate` that is often used to debug which values were
changed to prevent excess renders and stuff while working with react hooks. It
accepts an array of values and console.logs those that have been changed.

```typeScript
import React from 'react';
import { useUpdatedValues } from 'twb';

export const App:React.FC = () => {

  const [text, setText] = React.useState<string>('');
  const handleTextChange = useTextChangeHandler(textState.set);

  // First argument is an object of labels and values to check if they were
  // changed. Second argument is label, helpful when you are trying to track
  // reason for re-render of nested component
  useUpdatedValues({ text }, 'App');

  return <input type="text" value={text} onChange={handleTextChange} />
}
```

### useTextChangeHandler

I often need to write something like this:

```typeScript
const [text, setText] = React.useState<string>('');
const handleTextChange = React.useCallback(
  (e: React.ChangeEvent<HTMLInputElement>) => setText(e.currentTarget.value),
  []
);
```

The hook basically does that. It's just this now:

```typeScript
const [text, setText] = React.useState<string>('');
const handleTextChange = useTextChangeHandler(setText);
```

### useToggle

Similar to handleTextChange, but to work with boolean states. For react state
setter it will return a function that will set value to the opposite.

### createContext

A function that takes a hook function that should return object context value as an argument - and returns a hook and
context provider. The returned hook will throw if used outside provider.

```typeScript
import React from 'react';
import { createContext } from 'twb';

const useHookValue = () => {
  const [text, setText] = React.useState<string>('');
  return React.useMemo(() => ({text, setText}), [text]);
}

export const [useTextContext, TextContextProvider] = createContext(useHookValue);
```

It will derive the hook value from return of that `useHookValue` (but you can provide it manually). If you name the fn
as a hook (`useWhatever`) react eslint rules will help you.

```typeScript
import React from 'react';
import { useContext } from './WhateverContext';
import { useTextChangeHandler } from 'twb';

export const Child = () => {
  const { text, setText } = useContext();
  const handleValueChange = useTextChangeHandler(setText);
  return <input value={text} onChange={handleValueChange} />;
};
```

## Building

`npm run build`

Uses `microbundle` to build. Haven't found an option to disable emitting
declarations so I broke these - it will spit several errors about
`declarationDir` - disregard these :)

Uses `jest` and `ts-jest` to test.
