import { createElement, FC, PropsWithChildren } from 'react';

type Arg = string | Record<string, any> | number | Arg[];
export const classNames: (...args: Arg[]) => string;

export type FCC<Props = {}> = FC<PropsWithChildren<Props>>;
export type ReactComponent = Parameters<typeof createElement>[0];
export type StringRecord = Record<string, string>;
export type UnknownRecord = Record<string, unknown>;

type DomReadyArg = (e?: Event) => void;
type DomReadyReturn = () => void;

type H<SV> = () => SV;
type CCR<SV> = [H<SV>, FCC, React.Context<SV | undefined>];

export const createContext: <SV>(hook: H<SV>) => CCR<SV>;

/**
 * Fires a function when DOM has ben loaded.
 * @param  {DomReadyArg} listener
 */
export const domReady: (listener: DomReadyArg) => DomReadyReturn;

/**
 * Creates a div (or other) element, assigning a className to it. Used by mountReact and mountRoot
 * @param {string} [className] An optional string className of the element
 * @param {string} [tagName] Optional tag name, div by default
 */
export function createWrapper<K extends keyof HTMLElementTagNameMap>(
  className?: string,
  tagName?: K
): HTMLElementTagNameMap[K];

/**
 * On document load, creates a wrapper div, appends it to document body and mounts provided react component to it
 * @param  {ReactComponent} el A component to mount
 * @param  {string} [className] Optional className to assign to wrapper div
 */
export const mountReact: (el: ReactComponent, className?: string) => void;

/**
 * Same as mountReact, but uses the createRoot approach from react-dom/client
 * @param  {ReactComponent} el A component to mount
 * @param  {string} [className] Optional className to assign to wrapper div
 */
export const mountRoot: (el: ReactComponent, className?: string) => void;

/** Does nothing. Useful to pass where function is required, to not create a new noop every time */
export const noop: () => void;

/**
 * Generates a random hexadecimal string of given length.
 * @param  {number} length? Length of ID to generate. 6 if not provided.
 * @param {number} radix? Radix to generate. Between 2 and 36, 16 by default
 * (hexadecimal numbers)
 */
export const randomId: (length?: number, radix?: number) => string;
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
export const useToggle: (setter: React.Dispatch<React.SetStateAction<boolean>>) => () => void;

/**
 * For provided string react state setter, returns an onChange handler for input/textarea elements
 * @param  {React.Dispatch<React.SetStateAction<string>>} setter
 */
export const useTextChangeHandler: (
  setter: React.Dispatch<React.SetStateAction<string>>
) => (e: React.ChangeEvent) => void;

/** preventDefault's the event */
export const preventDefault: (e: React.SyntheticEvent) => void;
/** stopPropagation's the event */
export const stopPropagation: (e: React.SyntheticEvent) => void;
/** preventDefault's and  stopPropagation's the event */
export const stopPrevent: (e: React.SyntheticEvent) => void;

/**
 * console.log's whenever one of provided values has changed. AKA useWhyDidYouUpdate
 * @param  {Record<string} props An object of title/value
 * @param  {string} [label] Optional label
 */
export const useUpdatedValues: (props: Record<string, unknown>, label?: string) => void;
