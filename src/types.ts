import { createElement, FC, PropsWithChildren } from 'react';

export type FCC<Props = {}> = FC<PropsWithChildren<Props>>;
export type ReactComponent = Parameters<typeof createElement>[0];
export type StringRecord = Record<string, string>;
export type UnknownRecord = Record<string, unknown>;
