import { createElement } from 'react';

export type ReactComponent = Parameters<typeof createElement>[0];
export type StringRecord = Record<string, string>;
export type UnknownRecord = Record<string, unknown>;
