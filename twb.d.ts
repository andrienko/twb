import { createElement } from 'react';

type Arg = string | Record<string, any> | number | Arg[];
export const classNames: (...args: Arg[]) => string;

export type ReactComponent = Parameters<typeof createElement>[0];
export type StringRecord = Record<string, string>;
export type UnknownRecord = Record<string, unknown>;

type DomReadyArg = (e?: Event) => void;
type DomReadyReturn = () => void;

/**
 * Fires a function when DOM has ben loaded.
 * @param  {DomReadyArg} listener
 */
export const domReady: (listener: DomReadyArg) => DomReadyReturn;

/**
 * On document load, creates a wrapper div, appends it to document body and mounts provided react component to it
 * @param  {ReactComponent} el A component to mount
 * @param  {string} className? Optional className to assign to wrapper div
 */
export const mountReact: (el: ReactComponent, className?: string) => void;

/**
 * Does nothing.
 */
export const noop: () => void;

/**
 * Generates a random hexadecimal string of given length.
 * @param  {number} length? Length of ID to generate. 6 if not provided.
 */
export const randomId: (length?: number) => string;
/**
 * Generates a random hexadecimal string, that looks like UUID
 * (it is not a standard-complying UUID tho)
 */
export const fakeUuid: () => string;
/**
 * Basically a counter, returns a unique hexadecimal string every time by increment
 */
export const nextId: () => string;

export type State<SV> = {
  value: SV;
  set: React.Dispatch<React.SetStateAction<SV>>;
};
/**
 * Similar to React's useState, but returns an object instead of an array.
 * @param defaultValue
 */
export const useState: <SV>(defaultValue: SV | (() => SV)) => State<SV>;

/**
 * For provided boolean react state setter, returns a function that will toggle the state value
 * @param  {React.Dispatch<React.SetStateAction<boolean>>} setter
 */
export const useToggle: (setter: React.Dispatch<React.SetStateAction<boolean>>) => void;

/**
 * For provided string react state setter, returns an onChange handler for input/textarea elements
 * @param  {React.Dispatch<React.SetStateAction<string>>} setter
 */
export const useTextChangeHandler: (setter: React.Dispatch<React.SetStateAction<string>>) => void;

/**
 * console.log's whenever one of provided values has changed. AKA useWhyDidYouUpdate
 * @param  {Record<string} props An object of title/value
 * @param  {string} label? Optional label
 */
export const useUpdatedValues: (props: Record<string, unknown>, label?: string) => void;
