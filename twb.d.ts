import { createElement } from 'react';

type Arg = string | Record<string, any> | number | Arg[];
export const classNames: (...args: Arg[]) => string;

export type ReactComponent = Parameters<typeof createElement>[0];
export type StringRecord = Record<string, string>;
export type UnknownRecord = Record<string, unknown>;

type DomReadyArg = (e?: Event) => void;
type DomReadyReturn = () => void;
export const domReady: (listener: DomReadyArg) => DomReadyReturn;

export const mountReact: (el: ReactComponent, className?: string) => void;

export const noop: () => void;

export const randomId: (length?: number) => string;
export const fakeUuid: () => string;
export const nextId: () => string;

export type State<SV> = {
  value: SV;
  set: React.Dispatch<React.SetStateAction<SV>>;
};

export const useState: <SV>(defaultValue: SV | (() => SV)) => State<SV>;
export const useToggle: (setter: React.Dispatch<React.SetStateAction<boolean>>) => void;
export const useTextChangeHandler: (setter: React.Dispatch<React.SetStateAction<string>>) => void;
export const useUpdatedValues: (props: Record<string, unknown>, label?: string) => void;
