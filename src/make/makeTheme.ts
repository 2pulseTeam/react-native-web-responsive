import type { BaseTheme } from "../types";

export const makeTheme = <T extends BaseTheme>(theme: T): T => {
  return theme;
}