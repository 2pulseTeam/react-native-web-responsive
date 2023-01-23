import { DeclarativeStyle, NativeStyle } from "../types";

export const isDeclarativeStyle = <S extends NativeStyle>(style: DeclarativeStyle<S>): boolean => {
  return typeof style.mediaQueries !== 'undefined';
}