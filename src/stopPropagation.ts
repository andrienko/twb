import React from "react";

export const stopPropagation = (e: React.SyntheticEvent) => e.stopPropagation();
export const preventDefault = (e: React.SyntheticEvent) => e.preventDefault();
export const stopPrevent = (e: React.SyntheticEvent) => {
  e.preventDefault();
  e.stopPropagation();
}
